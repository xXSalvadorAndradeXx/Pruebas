(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.nav-panel');
  const navLinks = document.querySelectorAll('.nav-links a');
  const toast = document.querySelector('.toast');
  let toastTimer;

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeMenu = () => {
    toggle?.classList.remove('is-open');
    panel?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const open = !toggle.classList.contains('is-open');
    toggle.classList.toggle('is-open', open);
    panel?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const showToast = (title, message) => {
    if (!toast) return;
    toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
  };

  document.querySelectorAll('[data-registration]').forEach(button => {
    button.addEventListener('click', (event) => {
      const url = window.AECOMPU_CONFIG?.registrationFormUrl?.trim();
      if (url) {
        button.setAttribute('href', url);
        button.setAttribute('target', '_blank');
        button.setAttribute('rel', 'noopener noreferrer');
        return;
      }
      event.preventDefault();
      showToast('Inscripción', 'El formulario está listo para conectarse. Solo falta colocar la URL oficial en assets/js/config.js.');
    });
  });

  window.AECOMPU = { showToast };
})();
