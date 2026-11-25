(() => {
  'use strict';
  const views = ['radio', 'aviation'].map(key => ({
    key,
    feed: document.querySelector('[data-public-feed="' + key + '"]'),
    note: document.querySelector('[data-public-check="' + key + '"]')
  })).filter(view => view.feed && view.note);
  if (!views.length) return;
  const interval = 5 * 60 * 1000;
  const display = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney', day: 'numeric', month: 'short',
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
  });
  const dates = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric'
  });
  const str = (v, n) => typeof v === 'string' && v.trim() && v.length <= n;
  const date = (v) => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) &&
    Number.isFinite(Date.parse(v)) && new Date(v).toISOString().slice(0, 10) === v;
  function safeUrl(value) {
    try {
      if (!str(value, 850)) return '';
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
    } catch { return ''; }
  }
  function update(view, panel) {
    if (!panel || !Array.isArray(panel.entries)) return;
    const stamp = Date.parse(panel.checkedAt);
    if (!Number.isFinite(stamp) || stamp > Date.now() + 300000 ||
        stamp < Date.parse(view.note.dataset.checkedAt)) return;
    const seen = new Set();
    const entries = panel.entries.filter(entry => {
      if (!entry || !str(entry.id, 160) || seen.has(entry.id) || !date(entry.date) ||
          !str(entry.headline, 200) || !str(entry.summary, 650) ||
          !str(entry.sourceLabel, 100) || !safeUrl(entry.sourceUrl)) return false;
      seen.add(entry.id);
      return true;
    }).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
    if (!entries.length) return;
    const note = (checked, latest) => 'Latest item: ' + dates.format(new Date(latest)) +
      ' · Sources checked: ' + display.format(checked) + '. ' +
      (Date.now() - checked > 86400000 ? 'A newer source check is pending. ' : '') +
      'Dated updates, not a live feed.';
    const signature = JSON.stringify(entries);
    if (signature !== view.signature) {
      view.feed.replaceChildren(...entries.map(e => {
        const li = document.createElement('li');
        li.className = 'intel-feed-item';
        const time = document.createElement('time');
        time.dateTime = e.date;
        time.textContent = dates.format(new Date(e.date));
        const heading = document.createElement('h3');
        heading.textContent = e.headline;
        const summary = document.createElement('p');
        summary.textContent = e.summary;
        const link = document.createElement('a');
        link.href = safeUrl(e.sourceUrl);
        link.textContent = e.sourceLabel + ' ↗';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        li.append(time, heading, summary, link);
        return li;
      }));
      view.signature = signature;
    }
    view.note.dataset.checkedAt = panel.checkedAt;
    view.note.textContent = note(stamp, entries[0].date);
  }
  let busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), 8000);
    try {
      const response = await fetch('public-updates.json', {cache: 'no-store', signal: abort.signal});
      if (!response.ok) return;
      const data = await response.json();
      if (data?.version === 1) views.forEach(view => update(view, data[view.key]));
    } catch { /* Keep the last available dated entries and links. */ }
    finally { clearTimeout(timer); busy = false; }
  }
  refresh();
  setInterval(() => { if (!document.hidden) refresh(); }, interval);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
