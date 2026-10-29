"""Build a portable static GitHub Pages site, including every deep link.

Source is in castle-GPT/; the published Czech tree is in cs/castle/.
No API keys, third-party packages or server rewrites are required.
"""
import argparse, html, io, json, re, shutil, zipfile
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('--output',type=Path,default=ROOT/'_site')
parser.add_argument('--asset-base',default='/bricks/cs/castle/',help='Shared image host; empty string for a portable export.')
parser.add_argument('--base',default='/bricks-gpt/')
args=parser.parse_args()
base='/'+args.base.strip('/')+'/'
castle_base=base+'cs/castle/'
out=args.output.resolve()
if out==ROOT or ROOT not in out.parents:
 raise SystemExit('Output must be a child directory of this repository.')
source=ROOT/'web'
data=json.loads((source/'catalog.json').read_text())
slugs=json.loads((ROOT/'faction_routes.json').read_text())
if set(slugs)!={f['id']for f in data['factions']}:raise SystemExit('Missing faction route.')
if len(set(slugs.values()))!=len(slugs):raise SystemExit('Duplicate faction route.')
if out.exists():shutil.rmtree(out)
target=out/'cs'/'castle'
shutil.copytree(source,target,ignore=shutil.ignore_patterns('catalog'))
parts=sorted((ROOT/'assets').glob('atlas-images.zip.*'))
if not parts:raise SystemExit('Missing bundled catalogue images.')
with zipfile.ZipFile(io.BytesIO(b''.join(p.read_bytes()for p in parts))) as assets:
 for name in assets.namelist():
  if name.startswith('/')or '..'in Path(name).parts:raise SystemExit('Invalid asset path')
 assets.extractall(target/'assets')
if args.asset_base:
 for item in data['sets']+data['figures']:
  if item.get('localImage'): item['localImage']=args.asset_base.rstrip('/')+'/'+item['localImage']
 (target/'catalog.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
e=lambda value:html.escape(str(value),quote=True)
def legacy_url(value):
 bits=value.removeprefix('#/').strip('/').split('/')
 kind=bits[0]
 if kind=='frakce':return castle_base+slugs[bits[1]]+'/'
 if kind=='set':return castle_base+'sety/'+bits[1]+'/'
 if kind=='minifigurka':return castle_base+'minifigurky/'+bits[1]+'/'
 return castle_base+({'bdp':'bricklink-designer-program','dostupne':'dostupnost'}.get(kind,kind)+'/ 'if kind else '').replace('/ ','/')

template=(source/'index.html').read_text()
template=re.sub(r'href="(#[/][^"]*)"',lambda m:'href="'+e(legacy_url(m[1]))+'"',template)
template=template.replace('<head>','<head><base href="'+e(castle_base)+'">',1)
template=template.replace('<html lang="cs">','<html lang="cs">',1)
(target/'routes.js').write_text('export const FACTION_ROUTES='+json.dumps(slugs,separators=(',',':'))+';\n')
pages=[]
def page(relative,title,description,content):
 path=target/relative/'index.html';path.parent.mkdir(parents=True,exist_ok=True)
 canonical='https://vinmat.eu'+castle_base+(relative.strip('/')+'/'if relative else '')
 body=re.sub(r'<main id="main">.*?</main>',lambda _: '<main id="main"><article class="wrap section">'+content+'</article></main>',template,flags=re.S)
 body=re.sub(r'<title>.*?</title>',lambda _:'<title>'+e(title)+'</title>',body)
 body=re.sub(r'<meta name="description" content="[^"]*">',lambda _:'<meta name="description" content="'+e(description[:260])+'">',body)
 tags='<link rel="canonical" href="'+e(canonical)+'"><meta property="og:type" content="website"><meta property="og:locale" content="cs_CZ"><meta property="og:title" content="'+e(title)+'"><meta property="og:description" content="'+e(description[:260])+'"><meta property="og:url" content="'+e(canonical)+'">'
 path.write_text(body.replace('</head>',tags+'</head>'))
 pages.append(canonical)

def link(url,text):return '<a href="'+e(url)+'">'+e(text)+'</a>'
def listing(items,url):return '<ul>'+''.join('<li>'+link(url(x),x['name'])+'</li>'for x in items)+'</ul>'
def seturl(s):return castle_base+'sety/'+s['id']+'/'
def figurl(f):return castle_base+'minifigurky/'+f['id']+'/'
sets={s['id']:s for s in data['sets']};figures={f['id']:f for f in data['figures']}
page('','Castle Atlas — průvodce LEGO Castle frakcemi','Český atlas LEGO Castle: historie frakcí, sety, minifigurky a BrickLink Designer Program.','<h1>Castle Atlas</h1><p>Průvodce frakcemi, sety a minifigurkami LEGO Castle.</p>'+listing(data['factions'],lambda f:castle_base+slugs[f['id']]+'/'))
for f in data['factions']:
 fs=[s for s in data['sets']if f['id']in s['factions']+s['catalogFactions']or f['id']=='civil'and any(figures[x['id']]['faction']=='civil'for x in s['figures'])]
 ff=[x for x in data['figures']if x['faction']==f['id']]
 content='<h1>'+e(f['name'])+'</h1><p>'+e(f['english'])+'</p><p>'+e(f['history'])+'</p><h2>Jak je poznáš</h2><p>'+e(f['recognition'])+'</p><h2>Souvislosti</h2><p>'+e(f['note'])+'</p><h2>Sety</h2>'+listing(fs,seturl)+'<h2>Minifigurky</h2>'+listing(ff,figurl)
 page(slugs[f['id']],f['name']+' — LEGO Castle | Castle Atlas',f['history'],content)
for s in data['sets']:
 content='<h1>'+e(s['name'])+'</h1><p>LEGO '+e(s['id'])+' · '+str(s['year'])+'</p><h2>Frakce</h2>'+listing([f for f in data['factions']if f['id']in s['factions']+s['catalogFactions']],lambda f:castle_base+slugs[f['id']]+'/')+'<h2>Minifigurky</h2>'+listing([figures[x['id']]for x in s['figures']],figurl)
 page('sety/'+s['id'],s['id']+' '+s['name']+' | Castle Atlas','LEGO '+s['id']+' '+s['name']+': frakce, minifigurky, inventář a dostupnost.',content)
for f in data['figures']:
 page('minifigurky/'+f['id'],f['name']+' | Castle Atlas','Minifigurka '+f['id']+': '+f['name']+'. Všechny její evidované výskyty v setech atlasu.','<h1>'+e(f['name'])+'</h1><p>'+e(f['id'])+'</p><h2>Sety s touto figurkou</h2>'+listing([sets[s]for s in f['sets']],seturl))
for route,title,items in [('sety','Katalog setů',data['sets']),('minifigurky','Katalog minifigurek',data['figures']),('bricklink-designer-program','BrickLink Designer Program',[s for s in data['sets']if s['kind']=='BDP']),('dostupnost','Dostupnost LEGO Castle',[s for s in data['sets']if s['status']=='available'])]:
 page(route,title+' | Castle Atlas',title+' — český průvodce světem LEGO Castle.','<h1>'+title+'</h1>'+listing(items,figurl if route=='minifigurky'else seturl))
page('zdroje','Zdroje a metodika | Castle Atlas','Původ dat, vymezení frakcí a rozsah ověření dostupnosti.','<h1>Zdroje a metodika</h1><p>'+e(data['methodology'])+'</p>'+listing(data['sources'],lambda s:s['url']))
(out/'.nojekyll').touch()
redirect='<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url='+castle_base+'"><title>Castle Atlas</title></head><body>'+link(castle_base,'Otevřít Castle Atlas')+'</body></html>'
(out/'index.html').write_text(redirect)
(out/'cs'/'index.html').write_text(redirect)
# A convenience redirect keeps the requested source-folder name useful as a URL too.
(out/'castle').mkdir();(out/'castle'/'index.html').write_text(redirect)
(out/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+xml_escape(x)+'</loc></url>'for x in pages)+'</urlset>')
# Unknown URLs retain the normal shell and render a helpful missing-record page.
notfound=re.sub(r'<meta name="description" content="[^"]*">','<meta name="robots" content="noindex">',template)
(out/'404.html').write_text(notfound)
print(json.dumps({'pages':len(pages),'base':castle_base,'output':str(out)}))
