import json, datetime as dt, pathlib, tempfile
from skyfield.api import load, wgs84, EarthSatellite
import requests
from skyfield import almanac
UTC=dt.timezone.utc
now=dt.datetime.now(UTC)
response=requests.get("https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=TLE",timeout=30)
response.raise_for_status()
lines=response.text.strip().splitlines()
if len(lines)!=3 or not lines[1].startswith("1 25544") or not lines[2].startswith("2 25544"):raise ValueError("Invalid ISS elements")
ts=load.timescale()
sat=EarthSatellite(lines[1],lines[2],"ISS",ts)
epoch=sat.epoch.utc_datetime()
if abs((now-epoch).total_seconds())>3*86400:raise ValueError("ISS elements stale")
eph=load("de421.bsp")
site=wgs84.latlon(-33.8688,151.2093)
observer=eph["earth"]+site
import numpy as np
start=ts.from_datetime(now)
end=ts.from_datetime(now+dt.timedelta(days=10))
times,events=sat.find_events(site,start,end,altitude_degrees=10)
passes=[]
rise=None
for t,event in zip(times,events):
    if event==0:rise=t
    elif event==2 and rise is not None:
        seconds=(t.tt-rise.tt)*86400
        grid=ts.tt_jd(rise.tt+np.arange(0,seconds+1,5)/86400)
        altitude,azimuth,_=(sat-site).at(grid).altaz()
        sunalt=observer.at(grid).observe(eph["sun"]).apparent().altaz()[0].degrees
        visible=(sunalt<=-6)&sat.at(grid).is_sunlit(eph)&(altitude.degrees>=10)
        indices=np.flatnonzero(visible)
        if len(indices):
            groups=np.split(indices,np.where(np.diff(indices)>1)[0]+1)
            for g in groups:
                if len(g)<5:continue
                peak=g[np.argmax(altitude.degrees[g])]
                if altitude.degrees[peak]<20:continue
                def iso(i):return grid[int(i)].utc_datetime().isoformat()
                passes.append({"visible":True,"visible_start":iso(g[0]),"visible_end":iso(g[-1]),"culmination":{"elevation_deg":round(float(altitude.degrees[peak]),1)},"start_azimuth_deg":round(float(azimuth.degrees[g[0]]),1)})
        rise=None
data={"generated_at":now.isoformat(),"tle_epoch":epoch.isoformat(),"tle_stale":False,"passes":passes,"source":"CelesTrak / Skyfield","criteria":"Sun below -6 degrees; sunlit ISS; visible elevation at least 10 degrees, peak at least 20 degrees"}
p=pathlib.Path("data/iss-sydney.json");p.parent.mkdir(exist_ok=True)
tmp=p.with_suffix(".tmp");tmp.write_text(json.dumps(data,indent=2)+"\n");tmp.replace(p)
print("Predicted",len(passes),"visible passes")
