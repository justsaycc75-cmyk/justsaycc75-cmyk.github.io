"""Replace duplicate tour references only after downloading a distinct licensed photo."""
import hashlib, html, io, json, re, time
from pathlib import Path
from urllib.parse import unquote, urlparse, quote
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps

PAGE=Path("world-cruise-journal.html")
CACHE=Path("assets/img/world-cruise-2029/tour-cache")
CACHE.mkdir(parents=True,exist_ok=True)
Path("health-report").mkdir(exist_ok=True)
S=requests.Session()
S.headers["User-Agent"]="MyRetirementPageDuplicatePhotoRepair/1.0 (https://github.com/justsaycc75-cmyk/justsaycc75-cmyk.github.io)"
# Distinct subjects, each grounded in the current tour plan or its destination.
SUBJECTS={
11:["Royal Tombs Nuku'alofa Tonga","Talamahu Market Nuku'alofa"],
26:["Puntarenas Costa Rica beach","Puntarenas Costa Rica Paseo de los Turistas"],
28:["Casco Viejo Panama City plaza","Panama City Cinta Costera skyline","Panama Canal Miraflores locks"],
30:["Cartagena Colombia Centro y Bocagrande","Cartagena Colombia colonial street"],
32:["Oranjestad Aruba streetcar","Oranjestad Aruba Wilhelmina Park","Oranjestad Aruba main street"],
34:["Brownes Beach Barbados","Carlisle Bay Barbados beach","Carlisle Bay Barbados waterfront"],
41:["Funchal Madeira Mercado dos Lavradores","Funchal Madeira city gardens","Funchal Madeira cable car"],
42:["Santa Cruz Tenerife Plaza de España","Santa Cruz Tenerife Parque García Sanabria","Santa Cruz Tenerife Mercado Nuestra Señora de África"],
44:["Cadiz Spain La Caleta beach","Cadiz Spain Plaza de San Juan de Dios","Cadiz Spain Parque Genovés"],
45:["Europa Point lighthouse Gibraltar","Gibraltar Trinity Lighthouse","Gibraltar Strait Europa Point coastline"],
47:["Pointe de la Parata Ajaccio Corsica","Sanguinaires islands lighthouse Corsica","Ajaccio Corsica scenic coast"],
48:["Piazza dell'Anfiteatro Lucca","Lucca city walls","Pisa Cathedral Piazza dei Miracoli"],
50:["Trevi Fountain Rome","Piazza Navona Rome","Saint Peter square Vatican"],
52:["Casa Batllo Barcelona","La Rambla Barcelona","Barcelona Arc de Triomf"],
53:["Palacio Consistorial Cartagena Spain","Calle Mayor Cartagena Spain","Cartagena Spain waterfront promenade"],
55:["Jeronimos Monastery Lisbon","Praça do Comércio Lisbon","Monument to the Discoveries Lisbon"],
59:["Killybegs harbour Donegal Ireland","Donegal Glencolmcille coastline","Donegal Ireland coastal road"],
60:["Loch Lomond Scotland","Loch Long Scotland","Loch Fyne Scotland"],
62:["Cork River Lee Ireland","Cork English Market Ireland","Cork countryside Ireland"],
65:["Rozenhoedkaai Bruges","Burg Square Bruges","Beguinage Bruges"],
68:["Skagen yellow houses Denmark","Skagen Denmark museum","Skagen Denmark beach"],
69:["Amalienborg Copenhagen","Little Mermaid Copenhagen","Christiansborg Copenhagen"],
70:["Fiskebrygga Kristiansand","Kristiansand Norway cathedral","Kristiansand Norway Bystranda beach"],
71:["Preikestolen from Lysefjord","Hengjanefossen Lysefjord waterfall","Lysefjord Norway boat"],
75:["Oyri Eysturoy Faroe Islands","Gjogv Eysturoy Faroe Islands","Eidi Eysturoy Faroe Islands"],
77:["Gullfoss Iceland waterfall","Strokkur Iceland geyser","Thingvellir Iceland national park"],
82:["Corner Brook Newfoundland downtown","Corner Brook Newfoundland Broadway","Corner Brook Newfoundland waterfront"],
86:["Cavendish Prince Edward Island red cliffs","Prince Edward Island farmland","Prince Edward Island North Rustico harbour"],
88:["Alexander Graham Bell National Historic Site Baddeck","Baddeck Nova Scotia waterfront","Bras d'Or Lake Baddeck"],
89:["Halifax waterfront Historic Properties Nova Scotia","Halifax Nova Scotia boardwalk","Halifax Seaport Farmers Market"],
90:["St Martins sea caves New Brunswick","St Martins covered bridge New Brunswick","Bay of Fundy St Martins coastline"],
92:["Central Park New York","Brooklyn Bridge New York","New York Grand Central Terminal"],
95:["Ocean Drive Miami Beach Art Deco","Biscayne Bay Miami sightseeing boat","Miami Beach South Beach"],
101:["Manta Ecuador fishing boats","Manta Ecuador seafood market","Manta Ecuador Playa Tarqui"],
104:["Casa de Aliaga Lima Peru","Plaza Mayor Lima night","Lima historic centre Peru cathedral"],
}
def norm(s):
    return unquote(s).replace("_"," ").strip().casefold()
def key(a,img):
    href=a.get("href","") if a else ""
    if "/wiki/File:" in href:
        return norm(href.split("/wiki/File:",1)[1].split("?")[0])
    return norm(img.get("data-original") or img.get("src",""))
def api(params):
    p={"action":"query","format":"json",**params}
    for i in range(3):
        try:
            r=S.get("https://commons.wikimedia.org/w/api.php",params=p,timeout=25)
            r.raise_for_status()
            data=r.json()
            if "error" in data: raise ValueError(str(data["error"]))
            return data.get("query",{}).get("pages",{})
        except Exception:
            if i==2: raise
            time.sleep(2*(i+1))
def clean(s): return BeautifulSoup(s or "","html.parser").get_text(" ",strip=True)
def dhash(im):
    im=ImageOps.fit(im.convert("L"),(9,8))
    a=list(im.getdata())
    return sum((a[y*9+x]>a[y*9+x+1])<<(y*8+x) for y in range(8) for x in range(8))
def esc(s): return html.escape(str(s),quote=True)
src=PAGE.read_text(encoding="utf-8")
soup=BeautifulSoup(src,"html.parser")
used=set()
hashes=[]
# Reserve every destination photo and every unique excursion reference before searching.
for fig in soup.select(".port-visual figure, .tour-photo"):
    img=fig.find("img")
    if not img: continue
    used.add(key(fig.find("a"),img))
    p=Path(img.get("src",""))
    if p.is_file():
        try:
            with Image.open(p) as im: hashes.append(dhash(im))
        except Exception: pass
seen=set()
for fig in soup.select(".port-visual figure"):
    img=fig.find("img")
    if img: seen.add(key(fig.find("a"),img))
report=[]
for article in soup.select("article.port"):
    day=int(article.get("data-day","0"))
    cards=article.select(".tour-photo")
    for card in cards:
        img=card.find("img"); a=card.find("a")
        if not img or not a: continue
        k=key(a,img)
        if k not in seen:
            seen.add(k);continue
        oldurl=a.get("href","")
        queries=SUBJECTS.get(day,[])
        done=False; reasons=[]
        for subject in queries:
            if done: break
            try:
                # Namespace 6 selects files; do not use the unsupported bitmap filter.
                pages=api({"generator":"search","gsrsearch":subject,"gsrnamespace":6,"gsrlimit":12,"prop":"imageinfo","iiprop":"url|size|mime|sha1|extmetadata","iiurlwidth":800,"iiextmetadatafilter":"Artist|LicenseShortName|LicenseUrl|ImageDescription|ObjectName"})
                for p in sorted(pages.values(),key=lambda p:p.get("index",999)):
                    title=p.get("title","")
                    candidate=norm(title.removeprefix("File:"))
                    if candidate in used: continue
                    info=(p.get("imageinfo") or [{}])[0]
                    if info.get("mime") not in ("image/jpeg","image/png","image/webp"): continue
                    w,h=info.get("width",0),info.get("height",1)
                    if w<600 or w/h<1.15: continue
                    meta=info.get("extmetadata",{})
                    val=lambda n:clean(meta.get(n,{}).get("value"))
                    artist,licence=val("Artist"),val("LicenseShortName")
                    if not re.match(r"^(CC BY|CC0|Public domain)",licence,re.I):continue
                    if not artist and not re.match(r"^(CC0|Public domain)",licence,re.I):continue
                    # Require meaningful matching tokens in title/description, not just generic search rank.
                    words=[t for t in re.findall(r"[^\W\d_]+",subject.casefold(),re.UNICODE) if len(t)>3 and t not in {"from","with","city","beach","waterfront","historic","countryside","coastline"}]
                    evidence=(title+" "+val("ImageDescription")+" "+val("ObjectName")).casefold()
                    if len([t for t in words if t in evidence])<min(2,len(words)):continue
                    u=info.get("thumburl") or info.get("url","")
                    if urlparse(u).hostname!="upload.wikimedia.org":continue
                    rr=S.get(u,timeout=35);rr.raise_for_status()
                    with Image.open(io.BytesIO(rr.content)) as im:
                        im=ImageOps.exif_transpose(im).convert("RGB")
                        dh=dhash(im)
                        if any((dh^prev).bit_count()<=5 for prev in hashes):continue
                        im.thumbnail((800,800))
                        dest=CACHE/(hashlib.sha256(title.encode()).hexdigest()[:20]+".webp")
                        im.save(dest,"WEBP",quality=88)
                    # Match the original card by both its link and source.
                    target=next((m for m in re.finditer(r'<figure class="tour-photo">[\s\S]*?</figure>',src) if (lambda z:z.find("a") and z.find("img") and z.find("a").get("href")==oldurl and z.find("img").get("src")==img.get("src"))(BeautifulSoup(m.group(),"html.parser"))),None)
                    if target is None:raise ValueError("card markup not found")
                    source="https://commons.wikimedia.org/wiki/"+quote(title.replace(" ","_"),safe=":")
                    credit=esc(artist or "Public domain contributor")+" · "+esc(licence)+" · <a href=\""+esc(source)+"\" target=\"_blank\" rel=\"noopener noreferrer\">Source</a> · Reference only; route may vary."
                    fragment='<figure class="tour-photo"><div class="tour-photo-frame"><a href="'+esc(source)+'" target="_blank" rel="noopener noreferrer"><img src="'+esc(dest.as_posix())+'" alt="'+esc(subject)+'" loading="lazy" decoding="async"></a></div><figcaption>'+esc(subject)+'<small class="tour-credit">'+credit+'</small></figcaption></figure>'
                    src=src[:target.start()]+fragment+src[target.end():]
                    used.add(candidate);seen.add(candidate);hashes.append(dh)
                    report.append({"day":day,"old":oldurl,"new":source,"subject":subject,"status":"replaced"})
                    done=True;break
            except Exception as e:reasons.append(str(e))
            time.sleep(.5)
        if not done:report.append({"day":day,"old":oldurl,"status":"unresolved","reasons":reasons})
PAGE.write_text(src,encoding="utf-8")
Path("health-report/duplicate-photos.json").write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf-8")
replaced=sum(x["status"]=="replaced" for x in report)
print("Duplicate references:",len(report),"replaced:",replaced,"unresolved:",len(report)-replaced)
if replaced<len(report):raise SystemExit(1)
