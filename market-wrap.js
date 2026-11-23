(() => {
  'use strict';
  const byId = (key) => document.getElementById(`market-wrap-${key}`);
  const headline = byId('headline');
  const time = byId('updated');
  const separator = byId('sep');
  const status = byId('status');
  const copy = byId('copy');
  const sources = byId('sources');
  if (!(headline && time && separator && status && copy && sources)) return;
  const cacheKey = 'site-market-wrap-v1';
  const dateFormat = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney', day: 'numeric', month: 'short',
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
  });
  const localClock = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  });
  let current = null;
  let checking = false;
  const validText = (value, max) => typeof value === 'string' && !!value.trim() && value.length <= max;
  function validate(data) {
    if (!data || typeof data.updatedAt !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/.test(data.updatedAt)) return null;
    const stamp = Date.parse(data.updatedAt);
    if (!Number.isFinite(stamp) || stamp > Date.now() + 5 * 60_000 ||
      !validText(data.headline, 160) || !Array.isArray(data.paragraphs) ||
      data.paragraphs.length < 1 || data.paragraphs.length > 6 ||
      !data.paragraphs.every((p) => validText(p, 1300)) ||
      !Array.isArray(data.sources) || data.sources.length < 1 || data.sources.length > 10) return null;
    const refs = [];
    for (const item of data.sources) {
      if (!item || !validText(item.label, 100) || !validText(item.url, 800)) return null;
      try {
        const url = new URL(item.url);
        if (url.protocol !== 'https:' || url.username || url.password) return null;
        refs.push({ label: item.label, url: url.href });
      } catch { return null; }
    }
    return { ...data, sources: refs, stamp };
  }
  const sydneyParts = (stamp) => Object.fromEntries(
    localClock.formatToParts(stamp).map(({ type, value }) => [type, Number(value)])
  );
  function localCalendarTime(parts, hour = parts.hour, minute = parts.minute, day = parts.day) {
    // Compare Sydney wall-clock values, not elapsed UTC time, across DST changes.
    return Date.UTC(parts.year, parts.month - 1, day, hour, minute);
  }
  function overdue(stamp) {
    // A 45-minute grace period allows source verification and Pages publishing.
    const now = sydneyParts(Date.now());
    const minute = now.hour * 60 + now.minute;
    // Allow a brief prepared up to 15 minutes ahead of its intended slot.
    const cutoff = minute >= 1125 ? localCalendarTime(now, 17, 45)
      : minute >= 405 ? localCalendarTime(now, 5, 45)
      : localCalendarTime(now, 17, 45, now.day - 1);
    return localCalendarTime(sydneyParts(stamp)) < cutoff;
  }
  function message(value) {
    if (status.textContent !== value) status.textContent = value;
    status.hidden = !value;
  }
  function render(brief) {
    current = brief;
    headline.textContent = brief.headline;
    headline.hidden = false;
    time.dateTime = brief.updatedAt;
    time.textContent = `As at ${dateFormat.format(brief.stamp)}`;
    time.hidden = separator.hidden = false;
    copy.replaceChildren(...brief.paragraphs.map((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      return p;
    }));
    sources.replaceChildren(document.createTextNode('Sources:'), ...brief.sources.map(({ label, url }) => {
      const a = document.createElement('a');
      a.href = url;
      a.textContent = label;
      return a;
    }));
    sources.hidden = false;
  }
  function statusFor(failed) {
    if (!current) return failed ? 'The market wrap is temporarily unavailable. The charts below are still available.' : 'Loading the market wrap…';
    if (overdue(current.stamp)) return 'The latest verified wrap is shown below. A newer update is pending.';
    return failed ? 'Showing the latest saved wrap. The page could not check for a newer update.' : '';
  }
  try {
    const saved = validate(JSON.parse(localStorage.getItem(cacheKey)));
    if (saved) render(saved);
  } catch { /* storage is optional */ }
  message(statusFor(false));
  async function refresh() {
    if (checking) return;
    checking = true;
    const abort = new AbortController();
    const timeout = setTimeout(() => abort.abort(), 8000);
    try {
      const response = await fetch('market-wrap.json', { cache: 'no-store', signal: abort.signal });
      if (!response.ok) throw new Error('Market wrap unavailable');
      const latest = validate(await response.json());
      if (!latest) throw new Error('Invalid market wrap');
      if (!current || latest.stamp > current.stamp) {
        render(latest);
        try { localStorage.setItem(cacheKey, JSON.stringify(latest)); } catch { /* storage is optional */ }
      }
      message(statusFor(false));
    } catch { message(statusFor(true)); }
    finally { clearTimeout(timeout); checking = false; }
  }
  refresh();
  setInterval(() => { if (!document.hidden) refresh(); }, 5 * 60_000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
