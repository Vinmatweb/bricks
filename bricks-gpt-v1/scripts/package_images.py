"""Refresh the image bundle after running castle-GPT/cache_images.py."""
from pathlib import Path
import io,zipfile
root=Path(__file__).resolve().parents[1]
buffer=io.BytesIO()
with zipfile.ZipFile(buffer,'w',zipfile.ZIP_DEFLATED,compresslevel=6)as archive:
 for image in sorted((root/'web/assets/catalog').glob('*.webp')):
  archive.write(image,'catalog/'+image.name)
raw=buffer.getvalue();size=7680000
folder=root/'assets';folder.mkdir(exist_ok=True)
for old in folder.glob('atlas-images.zip.*'):old.unlink()
for i,start in enumerate(range(0,len(raw),size),1):
 (folder/('atlas-images.zip.'+str(i).zfill(3))).write_bytes(raw[start:start+size])
print(len(raw),'bytes in',(len(raw)+size-1)//size,'parts')
