#!/usr/bin/env python3
"""Sestaví web Hradní kronika.

1. index.html            – jednosouborový náhled (claude.ai)
2. OUT/cs/castle/castle-app.js – sdílený skript (data + aplikace) pro obě jazykové verze
3. OUT/{cs/castle,castle}/<stránka>/index.html – šablony všech stránek (pak je předvykreslí prerender.mjs)
4. OUT/castle-sitemap.xml – mapa stránek pro Google
Použití: python3 build_site.py [výstupní složka bricks]   (výchozí deploy/bricks)
"""
import hashlib, io, json, os, re, sys, zipfile
from pathlib import Path
ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
OUT = os.path.abspath(sys.argv[1]) if len(sys.argv) > 1 else os.path.join(ROOT, "deploy", "bricks")
rd = lambda n: open(os.path.join(SRC, n), encoding="utf-8").read()

head, shell = rd("01-head.html"), rd("02-shell.html")
script = "".join(rd(n) for n in ["03-data-cs.js", "03b-setdesc.js", "03c-catalog.js", "04-data-en.js", "05-app.js"])

# Restore the supplied catalogue images for a standalone build.
parts = sorted((Path(ROOT).parents[1] / "assets").glob("atlas-images.zip.*"))
if parts:
    with zipfile.ZipFile(io.BytesIO(b"".join(p.read_bytes() for p in parts))) as images:
        for name in images.namelist():
            assert not name.startswith("/") and ".." not in Path(name).parts
        images.extractall(Path(OUT) / "cs/castle/assets")

# 1) náhled
open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(head + shell + script)

# 2) sdílený skript (bez <script> značek)
app_js = script.strip()
assert app_js.endswith("</script>")
app_js = app_js[: -len("</script>")]
ver = hashlib.sha1(app_js.encode()).hexdigest()[:10]
os.makedirs(os.path.join(OUT, "cs", "castle"), exist_ok=True)
open(os.path.join(OUT, "cs", "castle", "castle-app.js"), "w", encoding="utf-8").write(app_js)

# 3) šablony stránek
head_clean = re.sub(r'<meta name="claude:viewport-fit-sides"[^>]*>\n?', "", head)
head_clean = re.sub(r"<title>.*?</title>\n?", "", head_clean)
shell_body = shell.rstrip()
assert shell_body.endswith("<script>")
shell_body = shell_body[: -len("<script>")]
ids = re.findall(r'\{id:"([a-z0-9-]+)", en:', rd("03-data-cs.js"))
routes = ["uvod", "diagram", "v-prodeji", "nedavno-vyrazeno", "navrat", "brzy", "zdroje", "soukromi", "podminky"] + ids
TITLE = {"cs": "Hradní kronika", "en": "Castle Chronicle"}
BASE = {"cs": "cs/castle", "en": "castle"}

def page(lang):
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{TITLE[lang]}</title>
{head_clean}
</head>
<body>
{shell_body}
<script>window.CASTLE_LANG="{lang}"</script>
<script src="/bricks/cs/castle/castle-app.js?v={ver}"></script>
</body>
</html>
"""

for lang in ("cs", "en"):
    for r in routes:
        d = os.path.join(OUT, BASE[lang]) if r == "uvod" else os.path.join(OUT, BASE[lang], r)
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(page(lang))

# 4) sitemap
def url(lang, r): return "https://vinmat.eu/bricks/" + BASE[lang] + "/" + ("" if r == "uvod" else r + "/")
items = []
for r in routes:
    for lang in ("cs", "en"):
        alts = "".join(f'<xhtml:link rel="alternate" hreflang="{l}" href="{url(l, r)}"/>' for l in ("cs", "en"))
        items.append(f"<url><loc>{url(lang, r)}</loc>{alts}</url>")
open(os.path.join(OUT, "castle-sitemap.xml"), "w", encoding="utf-8").write(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
    + "\n".join(items) + "\n</urlset>\n")
json.dump({"routes": routes, "base": BASE}, open(os.path.join(OUT, ".castle-routes.json"), "w"))
print(f"šablony: {len(routes)*2} stránek, skript {len(app_js)//1024} kB (v={ver})")
