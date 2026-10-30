"""Overlay the Claude EN/CZ pages onto the shared bricks Pages artifact."""
from pathlib import Path
import json,shutil,re,subprocess,tempfile
root=Path(__file__).resolve().parents[1]
target=root.parent/'castle-GPT/_legacy'
if not (target/'cs/castle/assets/catalog/10305-1.webp').exists():
 raise SystemExit('Build GPT and prepare_legacy.py first to preserve shared images.')
for relative,lang in [('castle/index.html','en'),('cs/castle/index.html','cs')]:
 source=root/'bricks'/relative
 text=source.read_text()
 assert f'<html lang="{lang}">'in text
 assert f'window.CASTLE_LANG="{lang}"'in text
 assert text.count('<head>')==text.count('</head>')==1
 assert text.index('</head>')<text.index('<body>')
 assert 'https://vinmat.eu/bricks/'+relative.removesuffix('index.html')in text
 assert 'location.replace('not in text
 # Parse each executable inline script with Node without running network calls.
 with tempfile.TemporaryDirectory()as folder:
  for i,script in enumerate(re.findall(r'<script(?:\s[^>]*)?>([\s\S]*?)</script>',text)):
   path=Path(folder)/f'{i}.js';path.write_text(script)
   subprocess.run(['node','--check',str(path)],check=True,capture_output=True)
 dest=target/relative;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source,dest)
for relative in ['castle/favicon.svg','cs/castle/favicon.svg']:
 source=root/'bricks'/relative
 assert '<svg'in source.read_text()
 shutil.copyfile(source,target/relative)
status=root/'bricks/cs/castle/status.json';assert 'sets'in json.loads(status.read_text())
shutil.copyfile(status,target/'cs/castle/status.json')
assert '/bricks-gpt/cs/castle/black-falcons/'in(target/'cs/castle/black-falcons/index.html').read_text()
print('PASS: Claude EN/CZ pages, inline JavaScript, status JSON; GPT deep-link redirects and shared images preserved.')
