(() => {
  const card = document.getElementById('epl-news-feature');
  if (!card) return;
  const trusted = value => {
    try { const u = new URL(value); return u.protocol === 'https:' && /(^|\.)(bbc\.com|bbc\.co\.uk|skysports\.com|premierleague\.com)$/.test(u.hostname); }
    catch (_) { return false; }
  };
  let busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    try {
      const response = await fetch('epl-story.json?t=' + Date.now(), {cache: 'no-store'});
      if (!response.ok) throw new Error('Story unavailable');
      const story = await response.json();
      if (!trusted(story.sourceUrl) || !story.headline || !story.summary || !story.source || !story.dateLabel) throw new Error('Invalid story');
      card.querySelector('[data-epl-news-title]').textContent = story.headline;
      card.querySelector('[data-epl-news-summary]').textContent = story.summary;
      card.querySelector('[data-epl-news-source]').textContent = story.source;
      const date = card.querySelector('[data-epl-news-date]');
      date.textContent = story.dateLabel;
      date.dateTime = story.publishedDate;
      card.querySelectorAll('[data-epl-news-link]').forEach(link => { link.href = story.sourceUrl; });
      // Keep the full photograph visible, including the player’s face and key action.
      const credit = card.querySelector('[data-epl-news-credit]');
      if (credit) credit.textContent = story.imageCredit || '';
      const img = card.querySelector('[data-epl-news-image]');
      if (story.imageUrl && /^https:\/\//.test(story.imageUrl)) {
        img.src = story.imageUrl;
        img.alt = story.imageAlt || 'Premier League story photograph';
      }
      card.querySelector('[data-epl-news-status]').hidden = !(Date.now() - Date.parse(story.updatedAt) > 30 * 3600000 || Date.now() - Date.parse(story.publishedDate) > 72 * 3600000);
    } catch (_) { /* Keep the dated, readable story and its direct source link. */ }
    finally { busy = false; }
  }
  refresh();
  setInterval(refresh, 5 * 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
