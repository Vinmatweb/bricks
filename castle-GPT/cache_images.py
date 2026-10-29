"""Cache and optimize source-catalogue images; preserve attribution in catalog.json."""
import json,io,concurrent.futures,urllib.request,os
from pathlib import Path
from PIL import Image
root=Path(__file__).parent/'web';data=json.loads((root/'catalog.json').read_text());out=root/'assets'/'catalog';out.mkdir(exist_ok=True)
def cache(pair):
 kind,item=pair;target=out/(item['id']+'.webp')
 try:
  if not target.exists():
   raw=urllib.request.urlopen(item['image'],timeout=12).read()
   im=Image.open(io.BytesIO(raw)).convert('RGBA');bg=Image.new('RGBA',im.size,'white');bg.alpha_composite(im);im=bg.convert('RGB');im.thumbnail((1100,800)if item['id']=='10305-1'else (640,480)if kind=='set'else (300,360))
   im.save(target,'WEBP',quality=83,method=4)
  return item['id'],'assets/catalog/'+target.name
 except Exception as e:return item['id'],None
items=[('set',x)for x in data['sets']]+[('figure',x)for x in data['figures']]
done={};fail=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=14)as ex:
 for i,(id,local)in enumerate(ex.map(cache,items)):
  if local:done[id]=local
  else:fail.append(id)
  if (i+1)%100==0:print('images',i+1,'/',len(items),flush=True)
for _,x in items:
 if x['id']in done:x['localImage']=done[x['id']]
(root/'catalog.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
print(json.dumps({'cached':len(done),'failed':fail,'bytes':sum(p.stat().st_size for p in out.iterdir())}),flush=True)
