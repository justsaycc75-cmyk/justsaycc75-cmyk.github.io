(() => {
  const card = document.getElementById('nfl-news-feature');
  if (!card) return;
  const trusted = value => {
    try { const u = new URL(value); return u.protocol === 'https:' && /(^|\.)(espn\.com|nfl\.com|nbcsports\.com)$/.test(u.hostname); }
    catch (_) { return false; }
  };
  let busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    try {
      const response = await fetch('nfl-story.json?t=' + Date.now(), {cache: 'no-store'});
      if (!response.ok) throw new Error('Story unavailable');
      const story = await response.json();
      if (!trusted(story.sourceUrl) || !story.headline || !story.summary || !story.source || !story.dateLabel) throw new Error('Invalid story');
      card.querySelector('[data-nfl-news-title]').textContent = story.headline;
      card.querySelector('[data-nfl-news-summary]').textContent = story.summary;
      card.querySelector('[data-nfl-news-source]').textContent = story.source;
      const date = card.querySelector('[data-nfl-news-date]');
      date.textContent = story.dateLabel;
      date.dateTime = story.publishedDate;
      card.querySelectorAll('[data-nfl-news-link]').forEach(link => { link.href = story.sourceUrl; });
      // Logos and story images are contained, so faces and lettering cannot be cropped off.
      const img = card.querySelector('[data-nfl-news-image]');
      if (story.imageUrl && /^https:\/\//.test(story.imageUrl)) {
        img.src = story.imageUrl;
        img.alt = story.imageAlt || 'NFL story image';
      }
      card.querySelector('[data-nfl-news-status]').hidden = !(Date.now() - Date.parse(story.updatedAt) > 30 * 3600000 || Date.now() - Date.parse(story.publishedDate) > 72 * 3600000);
    } catch (_) { /* Keep the dated, readable story and its direct source link. */ }
    finally { busy = false; }
  }
  refresh();
  setInterval(refresh, 5 * 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
