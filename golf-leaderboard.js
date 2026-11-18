(() => {
  'use strict';
  const panel = document.getElementById('golf-tournament');
  if (!panel) return;
  const tables = [...panel.querySelectorAll('[data-golf-rows]')];
  const status = panel.querySelector('[data-golf-status]');
  const round = panel.querySelector('[data-golf-round]');
  const button = panel.querySelector('[data-golf-refresh]');
  const note = panel.querySelector('[data-golf-note]');
  let busy = false;
  let saved = null;
  const valid = d => d && d.version === 1 && d.tournamentId === 'qld-pga-2026' &&
    Number.isInteger(d.round) && d.round >= 1 && d.round <= 4 &&
    ['in-progress', 'round-complete', 'final'].includes(d.status) &&
    Number.isFinite(Date.parse(d.updatedAt)) && Date.parse(d.updatedAt) <= Date.now() + 300000 &&
    Array.isArray(d.players) && d.players.length === 20 &&
    new Set(d.players.map(p => p.name)).size === 20 &&
    d.players.every(p => typeof p.name === 'string' && p.name.length > 2 && p.name.length < 80 &&
      /^T?\d{1,3}$/.test(p.position) && /^[A-Z]{3}$/.test(p.country) &&
      /^(E|[+-]?\d{1,2})$/.test(p.toPar) && /^(F|[0-9]|1[0-8]|—)$/.test(p.thru));

  function describe(d, failed = false) {
    const stamp = new Date(d.updatedAt).toLocaleString('en-AU', {
      timeZone: 'Australia/Sydney', day: 'numeric', month: 'short',
      hour: 'numeric', minute: '2-digit', hour12: true
    });
    status.textContent = 'Scores checked ' + stamp + ' Sydney';
    round.textContent = d.status === 'final' ? 'Final results' :
      'Round ' + d.round + (d.status === 'round-complete' ? ' complete' : ' in progress');
    const stale = d.status !== 'final' && Date.now() - Date.parse(d.updatedAt) > 30 * 3600000;
    note.textContent = failed ? 'Latest saved scores shown. Open the full leaderboard for the newest scores.' :
      stale ? 'This saved leaderboard is more than a day old. Check the full leaderboard for newer scores.' :
      '20 players in official order · T = tied · F = finished · (a) = amateur. Updated daily during the tournament.';
    note.classList.toggle('golf-warning', failed || stale);
  }

  function draw(d) {
    tables.forEach((body, group) => {
      const fragment = document.createDocumentFragment();
      d.players.slice(group * 10, group * 10 + 10).forEach(p => {
        const row = document.createElement('tr');
        const pos = document.createElement('td');
        pos.className = 'golf-position';
        pos.textContent = p.position;
        const player = document.createElement('th');
        player.scope = 'row';
        const name = document.createElement('span');
        name.textContent = p.name + (p.amateur ? ' (a)' : '');
        const country = document.createElement('small');
        country.textContent = p.country;
        player.append(name, country);
        const score = document.createElement('td');
        score.className = 'golf-score';
        score.textContent = p.toPar;
        const holes = document.createElement('td');
        holes.className = 'golf-thru';
        holes.textContent = p.thru;
        row.append(pos, player, score, holes);
        fragment.append(row);
      });
      body.replaceChildren(fragment);
    });
    describe(d);
  }

  async function refresh() {
    if (busy) return;
    busy = true;
    button.disabled = true;
    button.textContent = 'Checking…';
    try {
      const response = await fetch('golf-leaderboard.json?t=' + Date.now(), {cache: 'no-store'});
      if (!response.ok) throw new Error('Leaderboard unavailable');
      const data = await response.json();
      if (!valid(data)) throw new Error('Invalid leaderboard');
      if (saved && Date.parse(data.updatedAt) < Date.parse(saved.updatedAt)) throw new Error('Older leaderboard');
      saved = data;
      draw(data);
    } catch (_) {
      if (saved) describe(saved, true);
      else {
        note.textContent = 'Latest saved scores shown. Open the full leaderboard for the newest scores.';
        note.classList.add('golf-warning');
      }
    } finally {
      busy = false;
      button.disabled = false;
      button.textContent = 'Refresh panel';
    }
  }
  button.addEventListener('click', refresh);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  setInterval(() => { if (!document.hidden) refresh(); }, 120000);
  refresh();
})();
