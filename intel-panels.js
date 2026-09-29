(() => {
  const interval = 3 * 60 * 60 * 1000;
  let lastCheck = 0;
  const safeUrl = (value) => {
    try {
      const url = new URL(value, location.href);
      return url.protocol === 'https:' ? url.href : null;
    } catch { return null; }
  };
  function setText(selector, key, value) {
    const element = document.querySelector(`[data-intel-${selector}="${key}"]`);
    if (element && typeof value === 'string') element.textContent = value;
  }
  function update(key, item) {
    if (!item || typeof item !== 'object') return;
    for (const field of ['label', 'title', 'deck', 'heading', 'caption']) setText(field, key, item[field]);
    const paragraphs = document.querySelectorAll(`[data-intel-paragraph="${key}"]`);
    if (Array.isArray(item.paragraphs)) item.paragraphs.slice(0, 2).forEach((value, i) => {
      if (paragraphs[i] && typeof value === 'string') paragraphs[i].textContent = value;
    });
    const source = document.querySelector(`[data-intel-source="${key}"]`);
    const visual = document.querySelector(`[data-intel-image-link="${key}"]`);
    const image = document.querySelector(`[data-intel-image="${key}"]`);
    if (source && safeUrl(item.sourceUrl)) source.href = safeUrl(item.sourceUrl);
    if (visual && safeUrl(item.imageHref)) visual.href = safeUrl(item.imageHref);
    if (image && safeUrl(item.imageUrl)) image.src = safeUrl(item.imageUrl);
    if (image && typeof item.imageAlt === 'string') image.alt = item.imageAlt;
  }
  async function refresh() {
    lastCheck = Date.now();
    try {
      const response = await fetch(`intel-updates.json?t=${lastCheck}`, {cache: 'no-store'});
      if (!response.ok) return;
      const data = await response.json();
      update('warwatch', data.warwatch);
      update('skyglass', data.skyglass);
    } catch { /* Keep the last sourced cards visible when offline. */ }
  }
  refresh();
  setInterval(refresh, interval);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - lastCheck >= interval) refresh();
  });
})();
