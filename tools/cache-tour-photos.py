"""Cache only known Commons file references; preserve original source credits.
No automatic substitution of different subjects. Failed photos are reported."""
import hashlib, html, io, json, re, time
from pathlib import Path
from urllib.parse import unquote, urlparse
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps
page=Path("world-cruise-journal.html")
folder=Path("assets/img/world-cruise-2029/tour-cache")
folder.mkdir(parents=True,exist_ok=True)
session=requests.Session()
session.headers["User-Agent"]="MyRetirementPagePhotoCache/1.0 (https://github.com/justsaycc75-cmyk/justsaycc75-cmyk.github.io)"
source=page.read_text(encoding="utf-8")
soup=BeautifulSoup(source,"html.parser")
report=[]
def get(url,**kwargs):
    for attempt in range(3):
        r=session.get(url,timeout=30,**kwargs)
        if r.status_code not in (429,500,502,503,504): return r
        time.sleep(3*(attempt+1))
    return r
for card in soup.select(".tour-photo"):
    img=card.find("img"); anchor=card.find("a")
    if not img or not anchor: continue
    src=img.get("src",""); url=anchor.get("href","")
    if not src.startswith("https://"):
        local=Path(src)
        try:
            with Image.open(local) as im: im.verify()
            report.append({"source":url,"status":"local","path":src})
            continue
        except Exception: pass
    parsed=urlparse(url)
    if parsed.hostname!="commons.wikimedia.org" or not parsed.path.startswith("/wiki/File:"):
        report.append({"source":url,"status":"failed","reason":"not a Commons file page"});continue
    title=unquote(parsed.path.split("/wiki/",1)[1]).replace("_"," ")
    try:
        r=get("https://commons.wikimedia.org/w/api.php",params={"action":"query","format":"json","titles":title,"redirects":1,"prop":"imageinfo","iiprop":"url|mime|extmetadata","iiurlwidth":640,"iiextmetadatafilter":"Artist|LicenseShortName|LicenseUrl"})
        r.raise_for_status()
        entry=next(iter(r.json()["query"]["pages"].values()))
        info=entry["imageinfo"][0]; meta=info["extmetadata"]
        clean=lambda key: BeautifulSoup(meta.get(key,{}).get("value",""),"html.parser").get_text(" ",strip=True)
        artist=clean("Artist"); licence=clean("LicenseShortName"); licence_url=clean("LicenseUrl")
        if not re.match(r"^(CC BY|CC0|Public domain)",licence,re.I): raise ValueError("unsupported licence: "+licence)
        if not artist and not re.match(r"^(CC0|Public domain)",licence,re.I): raise ValueError("missing photographer credit")
        download=info.get("thumburl") or info["url"]
        if urlparse(download).hostname!="upload.wikimedia.org": raise ValueError("unexpected image host")
        r=get(download);r.raise_for_status()
        with Image.open(io.BytesIO(r.content)) as im:
            im=ImageOps.exif_transpose(im).convert("RGB")
            if im.width<250 or im.height<150: raise ValueError("image too small")
            im.thumbnail((800,800))
            filename=hashlib.sha256(entry["title"].encode()).hexdigest()[:20]+".webp"
            dest=folder/filename;im.save(dest,"WEBP",quality=86)
        local=dest.as_posix()
        # Modify only this card's exact HTML, leaving unrelated page markup unchanged.
        old=str(card)
        original=re.search(r'<figure class="tour-photo">[\s\S]*?</figure>',source)
        # Use source URL and image URL to select the exact original card without reserialising the page.
        matches=list(re.finditer(r'<figure class="tour-photo">[\s\S]*?</figure>',source))
        target=next((m for m in matches if BeautifulSoup(m.group(),"html.parser").find("img") and BeautifulSoup(m.group(),"html.parser").find("img").get("src")==src and BeautifulSoup(m.group(),"html.parser").find("a").get("href")==url),None)
        if target is None: raise ValueError("original card not found")
        fragment=target.group()
        fragment=re.sub(r'(<img\s+src=")[^"]+(")',lambda m:m[1]+html.escape(local,quote=True)+m[2],fragment,count=1)
        fragment=re.sub(r' data-original="[^"]*"','',fragment,count=1)
        credit=html.escape(artist or "Public domain contributor")+" · "+html.escape(licence)
        if licence_url.startswith("https://creativecommons.org/"):
            credit+=' · <a href="'+html.escape(licence_url,quote=True)+'" target="_blank" rel="noopener noreferrer">Licence</a>'
        credit+=' · <a href="'+html.escape(url,quote=True)+'" target="_blank" rel="noopener noreferrer">Source</a> · Reference only; route may vary.'
        fragment=re.sub(r'(<small class="tour-credit">)[\s\S]*?(</small>)',lambda m:m[1]+credit+m[2],fragment,count=1)
        source=source[:target.start()]+fragment+source[target.end():]
        report.append({"source":url,"status":"cached","path":local,"artist":artist,"licence":licence})
    except Exception as e: report.append({"source":url,"status":"failed","reason":str(e)})
    time.sleep(.5)
page.write_text(source,encoding="utf-8")
Path("health-report").mkdir(exist_ok=True)
Path("health-report/photo-cache.json").write_text(json.dumps(report,indent=2,ensure_ascii=False))
failed=[x for x in report if x["status"]=="failed"]
print("Photo cache:",len(report)-len(failed),"local or cached;",len(failed),"failed")
for x in failed: print(x["source"],x["reason"])
if failed: raise SystemExit(1)
