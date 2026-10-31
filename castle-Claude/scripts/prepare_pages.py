"""Validate the supplied prerendered Claude export and overlay shared Pages."""
from pathlib import Path
import hashlib,json,re,shutil,subprocess
from urllib.parse import urlsplit
from xml.etree import ElementTree as ET

root=Path(__file__).resolve().parents[1]
source=root/'bricks'
target=root.parent/'castle-GPT/_legacy'
assert (target/'cs/castle/assets/catalog/10305-1.webp').is_file(), 'Prepare shared GPT images first'
app=source/'cs/castle/castle-app.js'
text=app.read_text()
names=['03-data-cs.js','03b-setdesc.js','03c-catalog.js','04-data-en.js','05-app.js']
combined=''.join((root/'_src/castle/src'/name).read_text()for name in names).strip()
assert combined.endswith('</script>')
assert combined[:-len('</script>')]==text, 'Source changed: rebuild and prerender the Claude pages before committing'
version=hashlib.sha1(text.encode()).hexdigest()[:10]
subprocess.run(['node','--check',str(app)],check=True,capture_output=True)

# Gallery photos and optional image mirrors are local assets of the supplied app.
gallery=json.loads(re.search(r'const GAL = (\{[^;]+\});',text)[1])
expected_gallery={f'{number}-{i}.webp'for number,count in gallery.items()for i in range(1,count+1)}
assert len(expected_gallery)==31
assert expected_gallery=={p.name for p in (source/'cs/castle/assets/gal').glob('*.webp')}
for folder in ['gal','ext']:
    origin=source/'cs/castle/assets'/folder
    if origin.exists():shutil.copytree(origin,target/'cs/castle/assets'/folder,dirs_exist_ok=True)

pages=[]
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','x':'http://www.w3.org/1999/xhtml'}
sitemap=ET.parse(source/'castle-sitemap.xml')
locations={node.text for node in sitemap.findall('s:url/s:loc',ns)}
for base,lang in [('castle','en'),('cs/castle','cs')]:
    for page in sorted((source/base).rglob('index.html')):
        relative=page.relative_to(source)
        body=page.read_text()
        canonical='https://vinmat.eu/bricks/'+relative.as_posix().removesuffix('index.html')
        head=body.split('</head>',1)[0]
        assert f'<html lang="{lang}"' in body,relative
        assert body.count('<head>')==body.count('</head>')==1,relative
        assert body.index('</head>')<body.index('<body'),relative
        assert re.search(r'<title>[^<]+</title>',head),relative
        assert '<h1' in body and 'window.CASTLE_PRERENDERED=1;' in body,relative
        assert f'window.CASTLE_LANG="{lang}"' in body,relative
        assert f'/bricks/cs/castle/castle-app.js?v={version}' in body,relative
        assert re.search(r'<link[^>]+rel="canonical"[^>]+href="'+re.escape(canonical)+r'"',head),relative
        assert all(f'hreflang="{code}"'in head for code in ['cs','en','x-default']),relative
        assert 'noindex' not in head.lower(),relative
        assert canonical in locations,relative
        for url in re.findall(r'(?:href|src)="(/bricks/[^"#?]*)',body):
            path=urlsplit(url).path.removeprefix('/bricks/')
            if not path:continue
            if path.endswith('/'):path+='index.html'
            if path.startswith('cs/castle/assets/ext/'):
                # These mirrors are optional: the app falls back to data-o.
                tags=re.findall(r'<[^>]+(?:src|href)="'+re.escape(url)+r'"[^>]*>',body)
                assert tags and all(re.search(r'data-o="https://(?:img\.bricklink\.com|images\.brickset\.com|cdn\.rebrickable\.com)/',tag)for tag in tags),(relative,url)
                continue
            assert (source/path).exists() or (target/path).exists(),(relative,url)
        dest=target/relative;dest.parent.mkdir(parents=True,exist_ok=True)
        shutil.copyfile(page,dest)
        pages.append(canonical)
assert len(pages)==60 and set(pages)==locations,(len(pages),len(locations))
for url in sitemap.findall('s:url',ns):
    for alternate in url.findall('x:link',ns):assert alternate.attrib['href']in locations

manifest=json.loads((root/'assets/catalog-image-manifest.json').read_text())
assert len(manifest)==1015
for name,expected in manifest.items():
    path=target/'cs/castle/assets/catalog'/name
    assert path.is_file() and hashlib.sha256(path.read_bytes()).hexdigest()==expected,name
for relative in ['castle/favicon.svg','cs/castle/favicon.svg','cs/castle/castle-app.js','castle-sitemap.xml','cs/castle/status.json']:
    item=source/relative
    if relative.endswith('.svg'):assert '<svg'in item.read_text()
    if relative.endswith('status.json'):assert 'sets'in json.loads(item.read_text())
    dest=target/relative;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(item,dest)
print(f'PASS: {len(pages)} prerendered Claude pages, sitemap and language links, JavaScript, status JSON, {len(manifest)} shared images and {len(expected_gallery)} gallery photos')
