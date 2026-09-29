/* The official X timeline displays the source post and its media at native proportions. */
(() => {
  const target = document.getElementById('war-watch-timeline');
  if (!target) return;

  const refresh = () => {
    if (!window.twttr?.widgets?.createTimeline) return;
    const next = document.createElement('div');
    target.appendChild(next);
    window.twttr.widgets.createTimeline(
      { sourceType: 'profile', screenName: 'WarWatchIntel' },
      next,
      { theme: 'dark', chrome: 'noheader nofooter noborders transparent', tweetLimit: 3, height: 510, dnt: true }
    ).then((timeline) => {
      if (timeline) target.replaceChildren(next);
      else next.remove();
    }).catch(() => {
      // Keep the last working posts and the direct X link if the widget fails.
      next.remove();
    });
  };

  const script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  script.async = true;
  script.onload = refresh;
  document.head.appendChild(script);
  setInterval(refresh, 3 * 60 * 60 * 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refresh();
  });
})();
