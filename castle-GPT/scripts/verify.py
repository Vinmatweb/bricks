"""Verify canonical pages, deep-link assets and inventory integrity."""
import json,re
from pathlib import Path
from xml.etree import ElementTree
root=Path(__file__).resolve().parents[1]
site=root/'_site';base='/bricks-gpt/cs/castle/';atlas=site/'cs'/'castle'
d=json.loads((atlas/'catalog.json').read_text())
slugs=json.loads((root/'faction_routes.json').read_text())
ss={x['id']:x for x in d['sets']};ff={x['id']:x for x in d['figures']}
assert len(ss)==len(d['sets'])and len(ff)==len(d['figures'])
pages=list(atlas.rglob('index.html'))
expected=1+len(slugs)+len(ss)+len(ff)+10
assert len(pages)==expected,(len(pages),expected)
for page in pages:
 text=page.read_text()
 assert '<base href="'+base+'">'in text
 assert 'href="#/'not in text
 assert 'Načítám atlas…'not in text
 assert '<h1>'in text
 for url in re.findall(r'href="('+re.escape(base)+r'[^"]+)"',text):
  if url.endswith('/'):
   relative=url[len(base):]
   assert (atlas/relative/'index.html').exists(),(page,url)
 for src in ['style.css','app.js','router.js','routes.js','content.js','catalog.json','assets/mark.svg']:
  assert (atlas/src).is_file()
for faction in d['factions']:
 text=(atlas/slugs[faction['id']]/'index.html').read_text()
 assert faction['name']in text
for item in d['sets']+d['figures']:
 if item.get('localImage'):assert (atlas/('assets/'+item['localImage'].split('/assets/',1)[-1])).is_file(),item['id']
for s in d['sets']:
 for f in s['figures']:
  assert f['id']in ff and s['id']in ff[f['id']]['sets']
assert {'lion','falcon','forest'}<=set(ss['10305-1']['factions'])
assert {'wolf','lion'}<=set(ss['910057-1']['factions'])
assert not (site/'CNAME').exists()
ElementTree.parse(site/'sitemap.xml')
print('PASS:',len(pages),'HTML pages,',len(ss),'sets,',len(ff),'figures; clean faction URLs, assets and reciprocal inventories verified.')
