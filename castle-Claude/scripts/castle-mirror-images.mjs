// Stáhne obrázky z BrickLinku, Bricksetu a Rebrickable, které web Hradní kronika používá,
// do bricks/cs/castle/assets/ext/<server>/<cesta>. Už stažené soubory přeskočí.
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = "castle-Claude/bricks";
const OUT = "castle-Claude/bricks/cs/castle/assets/ext";
const RE = /https:\/\/(img\.bricklink\.com|images\.brickset\.com|cdn\.rebrickable\.com)\/[^"'`\s)<>]+/g;

const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) { if (!p.startsWith(OUT)) walk(p); }
    else if (/\.(html|js)$/.test(n)) files.push(p);
  }
})(ROOT);

const urls = new Set();
for (const f of files) for (const m of readFileSync(f, "utf8").matchAll(RE)) {
  const u = m[0].replace(/&amp;/g, "&");
  if (!u.includes("${") && !u.includes("?")) urls.add(u);
}
console.log(`nalezeno ${urls.size} adres v ${files.length} souborech`);

let ok = 0, skip = 0, fail = 0;
for (const u of [...urls].sort()) {
  const local = join(OUT, u.slice("https://".length));
  if (existsSync(local)) { skip++; continue; }
  try {
    const r = await fetch(u, { headers: { "User-Agent": "Mozilla/5.0 (Hradni kronika image mirror; vinmat.eu)" } });
    const type = r.headers.get("content-type") || "";
    if (!r.ok || !type.startsWith("image/")) throw new Error(`${r.status} ${type}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 200) throw new Error("prázdný obrázek");
    mkdirSync(dirname(local), { recursive: true });
    writeFileSync(local, buf); ok++;
  } catch (e) { fail++; console.log(`CHYBA ${u}: ${e.message}`); }
  await new Promise(r => setTimeout(r, 250)); // šetrně k serverům
}
console.log(`staženo ${ok}, už bylo ${skip}, nepovedlo se ${fail}`);
