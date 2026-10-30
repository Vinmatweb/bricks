"""Keep /bricks/ links and the shared catalogue image host working."""
import html,json,re,shutil
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=root/'_site';target=root/'_legacy'
if not (source/'cs/castle/index.html').exists():raise SystemExit('Run build.py first.')
if target.exists():shutil.rmtree(target)
shutil.copytree(source,target)
for page in target.rglob('*.html'):
 text=page.read_text();canonical=re.search(r'<link rel="canonical" href="([^"]+)"',text)
 url=canonical[1]if canonical else 'https://vinmat.eu/bricks-gpt/cs/castle/'
 page.write_text('<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url='+html.escape(url,quote=True)+'"><link rel="canonical" href="'+html.escape(url,quote=True)+'"><title>Castle Atlas se přestěhoval</title></head><body><p>Castle Atlas má novou adresu. <a href="'+html.escape(url,quote=True)+'">Otevřít web</a></p><script>location.replace('+json.dumps(url)+'+location.search+location.hash)</script></body></html>')
assert (target/'cs/castle/assets/catalog/10305-1.webp').exists()
assert 'https://vinmat.eu/bricks-gpt/cs/castle/black-falcons/'in(target/'cs/castle/black-falcons/index.html').read_text()
print('Prepared legacy redirects and shared images:',target)
