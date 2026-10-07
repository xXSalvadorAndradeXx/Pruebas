(() => {
  const dateString = window.AECOMPU_CONFIG?.tournamentDate || '2026-10-23T13:00:00-06:00';
  const target = new Date(dateString).getTime();
  const els = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
  };

  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    if (!els.days) return;
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    els.days.textContent = String(days);
    els.hours.textContent = pad(hours);
    els.minutes.textContent = pad(minutes);
    els.seconds.textContent = pad(seconds);
  };
  tick();
  setInterval(tick, 1000);

  document.querySelectorAll('.rule-chapter__button').forEach(button => {
    button.addEventListener('click', () => {
      const chapter = button.closest('.rule-chapter');
      const open = chapter.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
})();
