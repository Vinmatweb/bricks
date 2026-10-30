// Týdenní kontrola dostupnosti setů pro web LEGO Castle Kronika.
// Spouští GitHub Action (.github/workflows/lego-castle-status.yml), Node 20+, bez závislostí.
//
// Zdroje (v tomto pořadí):
//   1. Produktová stránka lego.cz – strukturovaná data schema.org (dostupnost, cena v Kč)
//   2. Brickset API v3 (pokud je nastaven secret BRICKSET_API_KEY) – datum konce prodeje
//   3. Veřejná stránka setu na brickset.com – záloha, když API klíč chybí
//
// Výsledek se zapíše do bricks/cs/castle/status.json, které stránka načítá.

import { readFile, writeFile } from "node:fs/promises";

const FILE = process.env.STATUS_FILE || "castle-Claude/bricks/cs/castle/status.json";
const BRICKSET_KEY = process.env.BRICKSET_API_KEY || "";
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const today = new Date();
const iso = d => d.toISOString().slice(0, 10);
const czDate = d => `${d.getUTCDate()}. ${d.getUTCMonth() + 1}. ${d.getUTCFullYear()}`;

async function get(url, opts = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 20000);
  try {
    return await fetch(url, {
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "user-agent": UA, "accept-language": "cs-CZ,cs;q=0.9", accept: "text/html,application/json" },
      ...opts,
    });
  } finally { clearTimeout(t); }
}

// ---------- 1. lego.cz ----------
async function checkLego(num, url) {
  try {
    const r = await get(url);
    if (r.status === 404 || r.status === 410) return { state: "removed", why: `HTTP ${r.status}` };
    if (!r.ok) return { state: "unknown", why: `HTTP ${r.status}` };
    // přesměrování mimo produkt (např. na vyhledávání) = set z nabídky zmizel
    if (!r.url.includes(num)) return { state: "removed", why: `přesměrováno na ${r.url}` };
    const html = await r.text();
    let availability = null, price = null;
    for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
      try {
        const data = JSON.parse(m[1]);
        for (const item of [].concat(data["@graph"] || data)) {
          if (!/Product/i.test(item["@type"] || "")) continue;
          const offer = [].concat(item.offers || [])[0] || {};
          availability = String(offer.availability || "").split("/").pop() || availability;
          price = Number(offer.price) || price;
        }
      } catch { /* neplatný blok JSON-LD přeskočit */ }
    }
    if (!availability) {
      const m = html.match(/schema\.org\/(InStock|OutOfStock|SoldOut|Discontinued|PreOrder|BackOrder|LimitedAvailability)/);
      if (m) availability = m[1];
    }
    if (!availability) return { state: "unknown", why: "na stránce chybí údaj o dostupnosti", price };
    if (availability === "Discontinued") return { state: "removed", why: "Discontinued", price };
    if (/OutOfStock|SoldOut/.test(availability)) return { state: "soldout", why: availability, price };
    return { state: "available", why: availability, price };
  } catch (e) {
    return { state: "unknown", why: `lego.cz nedostupné: ${e.message}` };
  }
}

// ---------- 2./3. Brickset ----------
async function checkBrickset(bsId) {
  try {
    if (BRICKSET_KEY) {
      const params = encodeURIComponent(JSON.stringify({ setNumber: bsId }));
      const r = await get(`https://brickset.com/api/v3.asmx/getSets?apiKey=${BRICKSET_KEY}&userHash=&params=${params}`);
      const j = await r.json();
      const s = (j.sets || [])[0];
      if (s) return { exit: s.exitDate ? new Date(s.exitDate) : null, source: "Brickset API" };
    }
    const r = await get(`https://brickset.com/sets/${bsId}`);
    const html = await r.text();
    const m = html.match(/Launch\/exit<\/dt>\s*<dd>([^<]+)<\/dd>/i);
    if (!m) return { exit: null, source: "Brickset" };
    const exitTxt = m[1].split(" - ")[1] || "";
    const d = /t\.b\.a/i.test(exitTxt) ? null : new Date(exitTxt + " UTC");
    return { exit: d && !isNaN(d) ? d : null, source: "Brickset" };
  } catch (e) {
    return { exit: null, source: "Brickset (chyba)" };
  }
}

// ---------- hlavní běh ----------
const status = JSON.parse(await readFile(FILE, "utf8"));
const log = [];
for (const [num, s] of Object.entries(status.sets)) {
  if (s.st === "off" || !s.url) continue;               // vyřazené sety už nekontrolujeme
  const lego = await checkLego(num, s.url);
  const bs = await checkBrickset(s.brickset || `${num}-1`);
  const exitPassed = bs.exit && bs.exit < today;
  const prev = s.st;
  if (prev === "soon") {                                  // oznámený set: jen čekáme na začátek prodeje
    if (lego.state === "available") { s.st = "on"; s.note = ""; }
    if (lego.price) s.price = lego.price;
    s.checked = iso(today);
    log.push(`${num}: soon -> ${s.st} (lego.cz: ${lego.state})`);
    await new Promise(r => setTimeout(r, 1500));
    continue;
  }

  if (lego.state === "removed" || (exitPassed && lego.state !== "available")) {
    s.st = "off";
    s.exit = czDate(bs.exit || today);
    s.note = "";
  } else if (lego.state === "available") {
    s.st = "on"; s.note = "";
  } else if (lego.state === "soldout") {
    s.st = "on"; s.note = "Na lego.cz dočasně vyprodáno";
  } // "unknown" -> stav ponechat

  if (lego.price) s.price = lego.price;
  s.checked = iso(today);
  s.source = lego.state === "unknown" ? bs.source : `lego.cz + ${bs.source}`;
  log.push(`${num}: ${prev} -> ${s.st} (lego.cz: ${lego.state}, ${lego.why}; konec prodeje: ${bs.exit ? iso(bs.exit) : "neuveden"})`);
  await new Promise(r => setTimeout(r, 1500));           // šetrně k serverům
}

status.checked = iso(today);
status.checkedLabel = czDate(today);
status.source = "lego.cz a Brickset";
await writeFile(FILE, JSON.stringify(status, null, 2) + "\n");
console.log(log.join("\n") || "Žádné sety ke kontrole.");
