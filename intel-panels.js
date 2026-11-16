(() => {
  const interval = 3 * 60 * 60 * 1000;
  let lastCheck = 0;
  function update(key, item) {
    if (!item || typeof item !== 'object') return;
    const feed = document.querySelector(`[data-intel-feed="${key}"]`);
    if (feed && Array.isArray(item.entries)) {
      const entries = item.entries.filter(entry => entry && typeof entry.date === 'string' && typeof entry.headline === 'string' && typeof entry.summary === 'string');
      if (entries.length) {
        feed.replaceChildren(...entries.slice(0, 12).map(entry => {
          const li = document.createElement('li');
          li.className = 'intel-feed-item';
          const time = document.createElement('time');
          time.dateTime = entry.date;
          time.textContent = entry.dateLabel || entry.date;
          const heading = document.createElement('h3');
          heading.textContent = entry.headline;
          const summary = document.createElement('p');
          summary.textContent = entry.summary;
          li.append(time, heading, summary);
          if (typeof entry.sourceUrl === 'string' && /^https:\/\/x\.com\/(WarWatchIntel|SkyGlass12)\/status\/\d+$/.test(entry.sourceUrl)) {
            const link = document.createElement('a');
            link.href = entry.sourceUrl;
            link.textContent = 'Source post ↗';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            li.append(link);
          }
          return li;
        }));
      }
    }
    if (feed) {
      let notice = feed.previousElementSibling;
      if (!notice || !notice.classList.contains('intel-freshness')) {
        notice = document.createElement('p');
        notice.className = 'intel-freshness';
        feed.before(notice);
      }
      const latest = item.entries?.[0]?.date || 'unknown';
      const checked = item.sourceCheckedAt ? new Date(item.sourceCheckedAt) : null;
      const valid = checked && Number.isFinite(checked.getTime());
      const old = valid && Date.now() - checked.getTime() > 24 * 60 * 60 * 1000;
      notice.textContent = 'Publisher snapshot, not live tracking. Newest post: ' + latest +
        (valid ? ' · Source checked: ' + checked.toISOString().replace('T', ' ').slice(0, 16) + ' UTC.' : ' · Source check time unavailable.') +
        (old ? ' Source check is overdue; newer posts may exist.' : '') +
        ' This page reloads published snapshots every 3 hours.';
    }
    const image = document.querySelector(`[data-intel-image="${key}"]`);
    const caption = document.querySelector(`[data-intel-caption="${key}"]`);
    if (image && typeof item.imageUrl === 'string' && /^[A-Za-z0-9._/-]+$/.test(item.imageUrl)) image.src = item.imageUrl;
    if (image && typeof item.imageAlt === 'string') image.alt = item.imageAlt;
    if (caption && typeof item.caption === 'string') caption.textContent = item.caption;
  }
  async function refresh() {
    lastCheck = Date.now();
    try {
      const response = await fetch(`intel-updates.json?t=${lastCheck}`, {cache: 'no-store'});
      if (!response.ok) return;
      const data = await response.json();
      update('warwatch', data.warwatch);
      update('skyglass', data.skyglass);
    } catch { /* Keep the last verified commentary visible when offline. */ }
  }
  refresh();
  setInterval(refresh, interval);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - lastCheck >= interval) refresh();
  });
})();
