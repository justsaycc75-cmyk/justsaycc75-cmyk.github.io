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
  let saved = null;

  function valid(d) {
    if (!d || d.version !== 1 || d.eventId !== 'adelaide-2026' ||
        !['scheduled', 'in-progress', 'complete', 'unavailable'].includes(d.status) ||
        !Array.isArray(d.positions) || d.positions.length > 20) return false;
    if (!d.positions.length) return d.status === 'scheduled' || d.status === 'unavailable';
    const time = Date.parse(d.updatedAt);
    let url;
    try { url = new URL(d.source); } catch (_) { return false; }
    return Number.isFinite(time) && time <= Date.now() + 300000 &&
      url.protocol === 'https:' && /(^|\.)(supercars\.com|speedcafe\.com)$/.test(url.hostname) &&
      typeof d.session === 'string' && d.session.length > 0 && d.session.length <= 90 &&
      ['Gap', 'Best', 'Time'].includes(d.columnLabel) &&
      ['in-progress', 'complete'].includes(d.status) &&
      new Set(d.positions.map(p => p.position)).size === d.positions.length &&
      d.positions.every((p, i) => Number.isInteger(p.position) && p.position === i + 1 &&
        typeof p.driver === 'string' && p.driver.length > 2 && p.driver.length < 100 &&
        typeof p.car === 'string' && /^\d{1,3}$/.test(p.car) &&
        typeof p.team === 'string' && p.team.length <= 100 &&
        typeof p.gapOrTime === 'string' && p.gapOrTime.length > 0 && p.gapOrTime.length <= 30 &&
        typeof p.laps === 'string' && /^(\d{1,3}|—)$/.test(p.laps));
  }

  function draw(d) {
    if (!d.positions.length) {
      board.hidden = true;
      waiting.hidden = false;
      session.textContent = '26–29 November · Awaiting session positions';
      status.textContent = 'No verified Adelaide session positions published yet.';
      note.textContent = 'The top 20 will appear here once verified session positions are available, with the time they were updated.';
      return;
    }
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
      if (saved?.positions.length && (!d.positions.length || Date.parse(d.updatedAt) < Date.parse(saved.updatedAt))) throw new Error('Older positions');
      saved = d;
      draw(d);
    } catch (_) {
      note.textContent = saved?.positions.length ? 'Latest saved positions shown. Check the position source for newer information.' :
        'No verified positions available here yet. The public event timetable is available below.';
      note.classList.add('golf-warning');
    } finally {
      busy = false;
      refreshButton.disabled = false;
      refreshButton.textContent = 'Refresh panel';
    }
  }
  refreshButton.addEventListener('click', refresh);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  setInterval(() => { if (!document.hidden) refresh(); }, 60000);
  refresh();
})();
