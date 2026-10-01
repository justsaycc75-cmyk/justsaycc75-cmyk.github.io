/* Front-page readings. Every card remains useful when a third-party feed fails. */
(() => {
  const kpValue = document.querySelector('[data-live-kp]');
  const issValue = document.querySelector('[data-live-iss]');
  if (!kpValue || !issValue) return;

  const kpDetail = document.querySelector('[data-live-kp-detail]');
  const kpTime = document.querySelector('[data-live-kp-time]');
  const issDetail = document.querySelector('[data-live-iss-detail]');
  const issTime = document.querySelector('[data-live-iss-time]');
  const sydneyTime = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney', weekday: 'short', day: 'numeric', month: 'short',
    hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
  });

  async function getJson(url) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch(url, { cache: 'no-store', signal: controller.signal });
      if (!response.ok) throw new Error('Feed unavailable');
      return await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  async function updateKp() {
    try {
      const rows = await getJson('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json');
      if (!Array.isArray(rows)) throw new Error('Invalid Kp feed');
      const reading = [...rows].reverse().find(row => Number.isFinite(Number(row.Kp)) && row.time_tag);
      if (!reading) throw new Error('No Kp reading');
      const observed = new Date(`${reading.time_tag.replace(/Z$/, '')}Z`);
      const age = Date.now() - observed.getTime();
      if (!Number.isFinite(age) || age < -5 * 60e3 || age > 12 * 60 * 60e3) throw new Error('Stale Kp reading');
      const kp = Number(reading.Kp);
      if (kp < 0 || kp > 9) throw new Error('Invalid Kp value');
      const level = kp >= 5 ? 'geomagnetic storm' : kp >= 4 ? 'active' : kp >= 3 ? 'unsettled' : 'quiet';
      kpValue.textContent = `Kp ${kp.toFixed(1)} · ${level}`;
      kpDetail.textContent = 'Global geomagnetic activity; check the Australian HF map for local conditions.';
      kpTime.textContent = `NOAA reading · ${sydneyTime.format(observed)}`;
    } catch (_) {
      kpValue.textContent = 'Check radio conditions';
      kpDetail.textContent = 'The latest reading is unavailable here. Open the Australian HF map.';
      kpTime.textContent = 'Live reading unavailable';
    }
  }

  async function updateIss() {
    try {
      // Visible passes only; predictions use current CelesTrak orbital elements.
      const data = await getJson('https://iss-api.polluxlabs.io/iss-pass?lat=-33.8688&lon=151.2093&visible_only=true&n=5&days_ahead=10');
      const generated = Date.parse(data.generated_at);
      if (data.tle_stale || !Number.isFinite(generated) || Date.now() - generated > 24 * 60 * 60e3 || generated - Date.now() > 5 * 60e3) {
        throw new Error('Stale orbit prediction');
      }
      if (!Array.isArray(data.passes)) throw new Error('Invalid pass list');
      const next = data.passes.find(pass => pass.visible && Date.parse(pass.visible_start || pass.rise?.time) > Date.now());
      if (!next) {
        issValue.textContent = 'No visible pass listed';
        issDetail.textContent = 'None predicted over Sydney in the next 10 days.';
      } else {
        const start = new Date(next.visible_start || next.rise.time);
        issValue.textContent = sydneyTime.format(start);
        const elevation = Number(next.culmination?.elevation_deg);
        issDetail.textContent = Number.isFinite(elevation)
          ? `Next predicted visible pass · peaks near ${Math.round(elevation)}° above the horizon.`
          : 'Next predicted visible pass over Sydney.';
      }
      issTime.textContent = 'Prediction: Pollux/CelesTrak · check NASA for changes';
    } catch (_) {
      issValue.textContent = 'Find the next visible pass';
      issDetail.textContent = 'The pass prediction is unavailable here. NASA has the latest sightings.';
      issTime.textContent = 'Prediction unavailable — check NASA';
    }
  }

  function refresh() {
    updateKp();
    updateIss();
  }
  refresh();
  setInterval(() => { if (!document.hidden) refresh(); }, 30 * 60 * 1000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
