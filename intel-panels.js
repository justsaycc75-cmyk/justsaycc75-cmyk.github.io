(() => {
  const interval = 3 * 60 * 60 * 1000;
  let lastCheck = 0;
  const safeUrl = (value) => {
    try {
      const url = new URL(value, location.href);
      return url.protocol === 'https:' ? url.href : null;
    } catch { return null; }
  };
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
          return li;
        }));
      }
    }
    const visual = document.querySelector(`[data-intel-image-link="${key}"]`);
    const image = document.querySelector(`[data-intel-image="${key}"]`);
    const caption = document.querySelector(`[data-intel-caption="${key}"]`);
    if (visual && safeUrl(item.imageHref)) visual.href = safeUrl(item.imageHref);
    if (image && safeUrl(item.imageUrl)) image.src = safeUrl(item.imageUrl);
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
