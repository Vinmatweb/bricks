"""Check catalogue integrity and known cross-theme appearances."""
import json
from pathlib import Path
p=Path(__file__).parent/'web';d=json.loads((p/'catalog.json').read_text())
ss={x['id']:x for x in d['sets']};ff={x['id']:x for x in d['figures']};groups={x['id']for x in d['factions']}
assert len(ss)==len(d['sets'])and len(ff)==len(d['figures'])
for s in ss.values():
 assert set(s['factions']+s['catalogFactions'])<=groups
 for f in s['figures']:
  assert f['id']in ff and s['id']in ff[f['id']]['sets'] and f['quantity']>0
for f in ff.values():
 assert f['faction']in groups
 for s in f['sets']:assert any(x['id']==f['id']for x in ss[s]['figures'])
for f in d['factions']:
 assert f['hero'] in ss
 assert f['portrait'] in ff and ff[f['portrait']]['faction']==f['id']
for s,expected in {'10305-1':{'lion','falcon','forest'},'910029-1':{'lion','falcon'},'910043-1':{'forest','falcon'},'910057-1':{'wolf','lion'},'31168-1':{'horse','serpent'},'21358-1':{'griffin','kraken'},'6086-1':{'black','wolf'},'10223-1':{'falcon','kingdom-lion'}}.items():
 assert expected<=set(ss[s]['factions']),(s,expected,ss[s]['factions'])
assert sum(f['quantity']for f in ss['10305-1']['figures'])==22
assert sum(f['quantity']for f in ss['21358-1']['figures'])==16
assert ss['910070-1']['figures']==[] and ss['910070-1']['status']=='upcoming'
assert {s['id']for s in ss.values()if s['status']=='available'}=={'31168-1','21358-1'}
assert ss['10305-1']['status']=='retired' and ss['10332-1']['status']=='retired'
missing=[x['id']for x in list(ss.values())+list(ff.values())if not x.get('localImage')or not (p/x['localImage']).exists()]
print('PASS:',len(ss),'sets,',len(ff),'figures;',len(missing),'without cached image')
if missing:print('Uncached:',', '.join(missing))
