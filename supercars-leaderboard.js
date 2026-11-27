(() => {
  'use strict';
  const panel = document.getElementById('live-supercars-next');
  if (!panel) return;
  const board = panel.querySelector('[data-supercars-board]');
  const waiting = panel.querySelector('[data-supercars-waiting]');
  const title = panel.querySelector('[data-supercars-board-title]');
  const session = panel.querySelector('[data-supercars-session]');
  const status = panel.querySelector('[data-supercars-status]');
  const note = panel.querySelector('[data-supercars-note]');
  const source = panel.querySelector('[data-supercars-source]');
  const refreshButton = panel.querySelector('[data-supercars-refresh]');
  const bodies = [...panel.querySelectorAll('[data-supercars-rows]')];
  let busy = false;
  const storageKey = 'supercars-last-top-ten:adelaide-2026';
  // Same verified practice snapshot already published in the feed. This seeds
  // even a first visit when the request for a newer snapshot fails.
  const fallback = {
    "version": 1,
    "eventId": "adelaide-2026",
    "session": "Practice 2 · Fri 27 Nov · Leaders",
    "status": "complete",
    "updatedAt": "2026-11-27T00:47:19.237Z",
    "source": "https://speedcafe.com/supercars-news-2026-adelaide-grand-final-practice-2-results-kai-allen-fastest-finals-series-contenders/",
    "columnLabel": "Best",
    "positions": [
      {
        "position": 1,
        "driver": "Kai Allen",
        "car": "26",
        "team": "",
        "gapOrTime": "1:18.8397",
        "laps": "—"
      },
      {
        "position": 2,
        "driver": "Matt Payne",
        "car": "19",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 3,
        "driver": "Brodie Kostecki",
        "car": "17",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 4,
        "driver": "Cameron Waters",
        "car": "6",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 5,
        "driver": "Will Brown",
        "car": "888",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 6,
        "driver": "Thomas Randle",
        "car": "55",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 7,
        "driver": "Chaz Mostert",
        "car": "1",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 8,
        "driver": "Andre Heimgartner",
        "car": "8",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 9,
        "driver": "Jack Le Brocq",
        "car": "4",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      },
      {
        "position": 10,
        "driver": "Zach Bates",
        "car": "10",
        "team": "",
        "gapOrTime": "—",
        "laps": "—"
      }
    ]
  };
  let saved = fallback;

  function valid(d) {
    if (!d || d.version !== 1 || d.eventId !== 'adelaide-2026' ||
        !['in-progress', 'complete'].includes(d.status) ||
        !Array.isArray(d.positions) || d.positions.length !== 10) return false;
    const time = Date.parse(d.updatedAt);
    let url;
    try { url = new URL(d.source); } catch (_) { return false; }
    return Number.isFinite(time) && time <= Date.now() + 300000 &&
      url.protocol === 'https:' && /(^|\.)(supercars\.com|speedcafe\.com)$/.test(url.hostname) &&
      typeof d.session === 'string' && d.session.length > 0 && d.session.length <= 90 &&
      ['Gap', 'Best', 'Time'].includes(d.columnLabel) &&
      d.positions.every((p, i) => p && p.position === i + 1 &&
        typeof p.driver === 'string' && p.driver.length > 2 && p.driver.length < 100 &&
        typeof p.car === 'string' && /^\d{1,3}$/.test(p.car) &&
        typeof p.team === 'string' && p.team.length <= 100 &&
        typeof p.gapOrTime === 'string' && p.gapOrTime.length > 0 && p.gapOrTime.length <= 30 &&
        typeof p.laps === 'string' && /^(\d{1,3}|—)$/.test(p.laps)) &&
      new Set(d.positions.map(p => p.car)).size === d.positions.length;
  }

  function draw(d) {
    board.hidden = false;
    waiting.hidden = true;
    title.textContent = 'Top ' + d.positions.length + ' positions';
    session.textContent = d.session + (d.status === 'complete' ? ' · Session complete' : ' · Session in progress');
    panel.querySelectorAll('[data-supercars-column]').forEach(x => { x.textContent = d.columnLabel; });
    bodies.forEach((body, group) => {
      body.closest('table').hidden = group === 1 && d.positions.length <= 10;
      const fragment = document.createDocumentFragment();
      d.positions.slice(group * 10, group * 10 + 10).forEach(p => {
        const row = document.createElement('tr');
        const position = document.createElement('td');
        position.className = 'golf-position';
        position.textContent = p.position;
        const driver = document.createElement('th');
        driver.scope = 'row';
        const name = document.createElement('span');
        name.textContent = p.driver;
        const details = document.createElement('small');
        details.textContent = '#' + p.car + (p.team ? ' · ' + p.team : '');
        driver.append(name, details);
        const time = document.createElement('td');
        time.className = 'golf-score';
        time.textContent = p.gapOrTime;
        const laps = document.createElement('td');
        laps.className = 'golf-thru';
        laps.textContent = p.laps;
        row.append(position, driver, time, laps);
        fragment.append(row);
      });
      body.replaceChildren(fragment);
    });
    const stamp = new Date(d.updatedAt).toLocaleString('en-AU', {
      timeZone: 'Australia/Sydney', day: 'numeric', month: 'short',
      hour: 'numeric', minute: '2-digit', hour12: true
    });
    status.textContent = 'Positions checked ' + stamp + ' Sydney';
    source.href = d.source;
    source.textContent = 'View position source';
    const stale = d.status === 'in-progress' && Date.now() - Date.parse(d.updatedAt) > 90 * 60000;
    note.textContent = stale ? 'These saved positions are more than 90 minutes old. Check the position source for newer information.' :
      'Published snapshot · checked hourly during the Adelaide weekend. This is not lap-by-lap live timing.';
    note.classList.toggle('golf-warning', stale);
  }

  async function refresh() {
    if (busy) return;
    busy = true;
    refreshButton.disabled = true;
    refreshButton.textContent = 'Checking…';
    try {
      const response = await fetch('supercars-leaderboard.json?t=' + Date.now(), {cache: 'no-store'});
      if (!response.ok) throw new Error('Positions unavailable');
      const d = await response.json();
      if (!valid(d)) throw new Error('Invalid positions');
      if (Date.parse(d.updatedAt) < Date.parse(saved.updatedAt)) throw new Error('Older positions');
      saved = d;
      draw(saved);
      try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (_) { /* optional */ }
    } catch (_) {
      note.textContent = 'Showing the last verified top ten. Check Supercars results for newer information.';
      note.classList.add('golf-warning');
    } finally {
      busy = false;
      refreshButton.disabled = false;
      refreshButton.textContent = 'Refresh panel';
    }
  }
  try {
    const cached = JSON.parse(localStorage.getItem(storageKey));
    if (valid(cached) && Date.parse(cached.updatedAt) > Date.parse(fallback.updatedAt)) saved = cached;
  } catch (_) { /* an unreadable cache must not blank the board */ }
  draw(saved);
  refreshButton.addEventListener('click', refresh);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  setInterval(() => { if (!document.hidden) refresh(); }, 60000);
  refresh();
})();
