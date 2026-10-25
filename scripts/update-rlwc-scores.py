#!/usr/bin/env python3
"""Fetch public RLWC fixtures and scores; never infer scores from schedule placeholders."""
import datetime as dt, json, os, pathlib, re, urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'data/rlwc-scores.json'
UTC=dt.timezone.utc
BASE='https://www.rlwc2026.com'

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'RetirementPage-RLWC-scoreboard/1.0'}), timeout=25) as r:
        return r.read().decode('utf-8')

def fixtures_from_html(html):
    for encoded in re.findall(r'self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)',html):
        payload=json.loads(encoded)
        key='"fixturesByComp":'
        if key not in payload: continue
        raw=json.JSONDecoder().raw_decode(payload.split(key,1)[1])[0]
        out=[]
        for comp, games in raw.items():
            for f in games:
                home=next(t for t in f['teams'] if t['isHomeTeam'])
                away=next(t for t in f['teams'] if not t['isHomeTeam'])
                out.append({'id':str(f['gameId']),'start':f['startTimeUTC'],
                  'home':home['teamName'],'away':away['teamName'],
                  'group':{'130':'Wheelchair','131':'Men’s','157':'Women’s'}.get(comp,'World Cup')+' · '+f['roundName'],
                  'place':', '.join(filter(None,[f.get('venueName'),f.get('city')])),
                  'url':BASE+f['matchCentreUrl']})
        if len(out)<30: raise ValueError('Incomplete official draw')
        return sorted(out,key=lambda f:f['start'])
    raise ValueError('Official fixture payload missing')

def build(fixtures,scores,now):
    clean={}
    for f in fixtures:
        x=scores.get(f['id'])
        if not isinstance(x,dict):continue
        if x.get('gameStateId') not in {2,3,4,5,6,7,8,9,11,12,13,14}:continue
        h,a=x.get('home'),x.get('away')
        if not all(isinstance(v,int) and not isinstance(v,bool) and 0<=v<=300 for v in [h,a]):continue
        clean[f['id']]={'home':h,'away':a,'state':x['gameStateId'],'clock':str(x.get('gameClock',''))[:20]}
    if not clean:raise ValueError('No valid official score records')
    return {'version':1,'fetchedAt':now.isoformat().replace('+00:00','Z'),'source':BASE+'/draws-and-pools','fixtures':fixtures,'scores':clean}

def main():
    now=dt.datetime.now(UTC)
    if not dt.datetime(2026,10,15,tzinfo=UTC)<=now<dt.datetime(2026,11,16,tzinfo=UTC):
        print('Outside 2026 tournament; no data update');return
    fixtures=fixtures_from_html(get(BASE+'/draws-and-pools'))
    force=os.getenv('RLWC_FORCE')=='1'
    active=any(-3600<=(now-dt.datetime.fromisoformat(f['start'].replace('Z','+00:00'))).total_seconds()<=14400 for f in fixtures)
    # Keep checking delayed/suspended games until their official status resolves.
    if not active and OUT.exists():
        previous=json.loads(OUT.read_text())
        active=any(previous.get('scores',{}).get(f['id'],{}).get('state') in {3,4,5,6,9,13} and
            0<=(now-dt.datetime.fromisoformat(f['start'].replace('Z','+00:00'))).total_seconds()<86400 for f in fixtures)
    if not active and not force:print('No match window; no data update');return
    ids=','.join(f['id'] for f in fixtures)
    scores=json.loads(get(BASE+'/api/match-scores?matchIds='+ids)).get('scores',{})
    data=build(fixtures,scores,now)
    OUT.parent.mkdir(parents=True,exist_ok=True)
    temp=OUT.with_suffix('.tmp');temp.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n');temp.replace(OUT)
    print('Updated',len(data['scores']),'official match records at',data['fetchedAt'])
if __name__=='__main__':main()
