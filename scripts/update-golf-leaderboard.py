#!/usr/bin/env python3
"""Publish verified public Queensland PGA scores; retain the last snapshot on failure."""
import datetime as dt
import json
import pathlib
import re
import urllib.request
from html.parser import HTMLParser
from zoneinfo import ZoneInfo

SOURCE = 'https://pga-live.pga-tic.com/tic/tmscores.cgi?tourn=1066~season=2026~params=PG0SSA00999'
OUT = pathlib.Path(__file__).resolve().parents[1] / 'golf-leaderboard.json'


class Node:
    def __init__(self, tag='', attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

    def text(self):
        return re.sub(r'\s+', ' ', ''.join(c.text() if isinstance(c, Node) else c for c in self.children)).strip()

    def find(self, tag):
        for child in self.children:
            if isinstance(child, Node):
                if child.tag == tag:
                    yield child
                yield from child.find(tag)


class Document(HTMLParser):
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def cells(row):
    return [c for c in row.children if isinstance(c, Node) and c.tag in {'td', 'th'}]


def parse_scores(html, checked_at):
    root = Document(html).root
    page = root.text()
    if not all(x in page for x in ['2026', 'Queensland PGA Championship', 'Nudgee', 'Latest Scores']):
        raise ValueError('Wrong or unavailable tournament')
    table = next((t for t in root.find('table') if
                  (first := next(t.find('tr'), None)) is not None and
                  (cs := cells(first)) and cs[0].text() == 'Pos.'), None)
    if table is None:
        raise ValueError('Score table missing')
    grid = []
    for r, row in enumerate(table.find('tr')):
        while len(grid) <= r:
            grid.append({})
        col = 0
        for cell in cells(row):
            while col in grid[r]:
                col += 1
            for offset in range(int(cell.attrs.get('rowspan', '1'))):
                while len(grid) <= r + offset:
                    grid.append({})
                grid[r + offset][col] = cell.text()
            col += 1
    header = grid[0]
    name_col = next(k for k, v in header.items() if v.startswith('Name'))
    holes_col = next(k for k, v in header.items() if v == 'Holes')
    round_cols = [(int(v[1:]), k) for k, v in header.items() if re.fullmatch(r'R[1-4]', v)]
    round_number, current_col = max(round_cols)
    ranked, finished = [], []
    for row in grid[1:]:
        match = re.match(r'^(.+?) \(([A-Z]{3})\)(.*)', row.get(name_col, ''))
        if not match:
            continue
        raw_position = row.get(0, '')
        if raw_position.rstrip('=') in {'WD', 'DQ', 'CUT', 'RET'}:
            continue
        round_score = row.get(current_col, '')
        done = bool(re.fullmatch(r'\d{2,3}', round_score)) and 40 <= int(round_score) <= 130
        finished.append(done)
        if not re.fullmatch(r'\d+=?', raw_position):
            continue
        raw_score = row.get(1, '')
        score = 'E' if raw_score in {'Par', 'E'} else raw_score
        if not re.fullmatch(r'E|[+-]?\d{1,2}', score):
            raise ValueError('Missing overall score')
        holes = row.get(holes_col, '')
        thru = 'F' if done or holes in {'18', 'F'} else holes
        if not re.fullmatch(r'F|[0-9]|1[0-8]|—', thru):
            raise ValueError('Unrecognised holes value')
        ranked.append({'position': raw_position.rstrip('='), 'name': match[1],
                       'country': match[2], 'amateur': '(a)' in match[3],
                       'toPar': score, 'thru': thru})
    if len(ranked) < 20 or len({p['name'] for p in ranked}) != len(ranked):
        raise ValueError('Incomplete or duplicate leaderboard')
    scores = [0 if p['toPar'] == 'E' else int(p['toPar']) for p in ranked]
    if scores != sorted(scores):
        raise ValueError('Overall scores are not in leaderboard order')
    counts = {p['position']: sum(q['position'] == p['position'] for q in ranked) for p in ranked}
    for player in ranked:
        if counts[player['position']] > 1:
            player['position'] = 'T' + player['position']
    complete = bool(finished) and all(finished)
    return {'version': 1, 'tournamentId': 'qld-pga-2026', 'title': 'Queensland PGA Championship',
            'round': round_number, 'status': 'final' if complete and round_number == 4 else
            'round-complete' if complete else 'in-progress',
            'updatedAt': checked_at.isoformat().replace('+00:00', 'Z'), 'source': SOURCE,
            'players': ranked[:20]}


def main():
    now = dt.datetime.now(dt.timezone.utc)
    local = now.astimezone(ZoneInfo('Australia/Sydney'))
    if not (dt.date(2026, 11, 19) <= local.date() <= dt.date(2026, 11, 22) and 6 <= local.hour <= 21):
        print('Outside Queensland PGA update window')
        return
    request = urllib.request.Request(SOURCE, headers={
        'User-Agent': 'MyRetirementPage-PGA-Scoreboard/1.0', 'Accept': 'text/html', 'Cache-Control': 'no-cache'})
    with urllib.request.urlopen(request, timeout=30) as response:
        html = response.read().decode('utf-8', 'replace')
    data = parse_scores(html, now)
    temp = OUT.with_suffix('.tmp')
    temp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temp.replace(OUT)
    print('Verified', len(data['players']), 'players; leader:', data['players'][0]['name'], data['players'][0]['toPar'])


if __name__ == '__main__':
    main()
