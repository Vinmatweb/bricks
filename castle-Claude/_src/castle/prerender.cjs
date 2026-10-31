// Předvykreslí všechny stránky Hradní kroniky do statického HTML (pro Google).
// Potřebuje Node 18+ a Playwright:  npm i -D playwright && npx playwright install chromium
// Použití: node prerender.cjs [složka, která obsahuje "bricks"]   (výchozí ./deploy)
const { chromium } = require("playwright");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
(async () => {

const ROOT = path.resolve(process.argv[2] || "deploy");
const META = JSON.parse(fs.readFileSync(path.join(ROOT, "bricks", ".castle-routes.json"), "utf8"));
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".json": "application/json", ".webp": "image/webp", ".svg": "image/svg+xml", ".xml": "application/xml" };
const PIXEL = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let f = path.join(ROOT, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch();
const ctx = await browser.newContext();
// cizí servery (fotky, písma) při vykreslování nahradit prázdným obrázkem – adresy v HTML zůstanou původní
await ctx.route(url => !url.href.startsWith(`http://127.0.0.1:${port}`) || url.pathname.includes("/assets/ext/"), r => {
  const u = r.request().url();
  if (/\.css|fonts\.googleapis/.test(u)) return r.fulfill({ status: 200, contentType: "text/css", body: "" });
  return r.fulfill({ status: 200, contentType: "image/png", body: PIXEL });
});
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", e => errors.push(e.message));
let n = 0;
for (const lang of ["cs", "en"]) {
  for (const r of META.routes) {
    const rel = `/bricks/${META.base[lang]}/${r === "uvod" ? "" : r + "/"}`;
    await page.goto(`http://127.0.0.1:${port}${rel}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(150);
    let html = await page.content();
    html = html.replace(/<script>window\.CASTLE_LANG/, "<script>window.CASTLE_PRERENDERED=1;window.CASTLE_LANG");
    fs.writeFileSync(path.join(ROOT, rel, "index.html"), "<!doctype html>\n" + html.replace(/^<!DOCTYPE html>\s*/i, ""));
    n++;
  }
}
await browser.close();
server.close();
fs.rmSync(path.join(ROOT, "bricks", ".castle-routes.json"));
if (errors.length) { console.error("Chyby skriptu:", errors); process.exit(1); }
console.log(`předvykresleno ${n} stránek`);
})();
