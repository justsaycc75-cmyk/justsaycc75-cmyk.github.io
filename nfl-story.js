(() => {
  const card = document.getElementById('nfl-news-feature') || document.querySelector('[data-nfl-feature]');
  if (!card) return;
  const trusted = value => {
    try { const u = new URL(value); return u.protocol === 'https:' && /(^|\.)(espn\.com|nfl\.com|nbcsports\.com)$/.test(u.hostname); }
    catch (_) { return false; }
  };
  const setText = (selector, value) => {
    const element = card.querySelector(selector);
    if (element) element.textContent = value;
  };
  let busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    try {
      const response = await fetch('nfl-story.json?t=' + Date.now(), {cache: 'no-store'});
      if (!response.ok) throw new Error('Story unavailable');
      const story = await response.json();
      if (!story || !trusted(story.sourceUrl) ||
          !['headline', 'summary', 'source', 'dateLabel'].every(key => typeof story[key] === 'string' && story[key].trim()) ||
          !Number.isFinite(Date.parse(story.publishedDate)) || !Number.isFinite(Date.parse(story.updatedAt)) ||
          typeof story.imageUrl !== 'string' || !/^https:\/\//.test(story.imageUrl)) throw new Error('Invalid story');
      setText('[data-nfl-news-title], [data-nfl-headline]', story.headline);
      setText('[data-nfl-news-summary], [data-nfl-summary]', story.summary);
      setText('[data-nfl-news-source]', story.source);
      setText('[data-nfl-meta]', 'NFL • ' + story.source + ' • ' + story.dateLabel);
      const date = card.querySelector('[data-nfl-news-date]');
      if (date) {
        date.textContent = story.dateLabel;
        date.dateTime = story.publishedDate;
      }
      card.querySelectorAll('[data-nfl-news-link], [data-nfl-image-link], [data-nfl-source-link]').forEach(link => { link.href = story.sourceUrl; });
      setText('[data-nfl-source-link]', 'Read the full story at ' + story.source + ' →');
      const imageLink = card.querySelector('[data-nfl-image-link]');
      if (imageLink) imageLink.setAttribute('aria-label', 'Read this NFL story on ' + story.source);
      // Keep the full photograph visible, including the player’s face and key action.
      setText('[data-nfl-news-credit], [data-nfl-image-credit]', story.imageCredit || '');
      const img = card.querySelector('[data-nfl-news-image], [data-nfl-image]');
      if (img) {
        img.src = story.imageUrl;
        img.alt = story.imageAlt || 'NFL story image';
      }
      const status = card.querySelector('[data-nfl-news-status]');
      if (status) status.hidden = !(Date.now() - Date.parse(story.updatedAt) > 30 * 3600000 || Date.now() - Date.parse(story.publishedDate) > 72 * 3600000);
    } catch (_) { /* Keep the dated, readable story and its direct source link. */ }
    finally { busy = false; }
  }
  refresh();
  setInterval(refresh, 5 * 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
