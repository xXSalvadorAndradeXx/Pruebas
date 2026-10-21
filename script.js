'use strict';

// CONFIGURACIÓN: para preinscripciones reales, conecta un backend o formulario
// oficial con gestión de datos y validación de entradas. Esta demo no envía datos.
const EVENT = Object.freeze({ name: 'AECOMPU Experience 2026', date: '23/10/2026', location: 'UGB Centro Regional Usulután', price: '$1.00' });

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navLinks.classList.toggle('open', open);
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menú');
  navLinks.classList.remove('open');
}));

const form = document.getElementById('registration-form');
const result = document.getElementById('registration-result');
const error = document.getElementById('form-error');
let demoRecord = null;

function safeText(value) {
  return String(value).replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
}
function makeCode() {
  const arr = new Uint32Array(2);
  crypto.getRandomValues(arr);
  return `DEMO-${arr[0].toString(36).toUpperCase()}-${arr[1].toString(36).toUpperCase()}`;
}
form?.addEventListener('submit', event => {
  event.preventDefault();
  error.hidden = true;
  if (!form.reportValidity()) return;
  const fullName = safeText(document.getElementById('fullName').value);
  const email = safeText(document.getElementById('email').value);
  const phone = safeText(document.getElementById('phone').value);
  const interest = document.getElementById('interest').value;
  if (fullName.length < 3) {
    error.textContent = 'Escribe tu nombre y apellido.';
    error.hidden = false;
    return;
  }
  demoRecord = { code: makeCode(), fullName, email, phone, interest, createdAt: new Date().toLocaleString('es-SV') };
  try { localStorage.setItem('aecompu-demo', JSON.stringify(demoRecord)); } catch { /* La descarga sigue disponible si el almacenamiento está bloqueado. */ }
  document.getElementById('result-code').textContent = demoRecord.code;
  form.hidden = true;
  document.getElementById('form-help').hidden = true;
  result.hidden = false;
});

document.getElementById('reset-form')?.addEventListener('click', () => {
  form.reset();
  form.hidden = false;
  document.getElementById('form-help').hidden = false;
  result.hidden = true;
  error.hidden = true;
  demoRecord = null;
});

document.getElementById('download-ticket')?.addEventListener('click', () => {
  if (!demoRecord) return;
  const ticket = [
    EVENT.name.toUpperCase(),
    'COMPROBANTE DE DEMOSTRACIÓN — NO VÁLIDO PARA INGRESO',
    '----------------------------------------------------',
    `Código: ${demoRecord.code}`,
    `Nombre: ${demoRecord.fullName}`,
    `Correo: ${demoRecord.email}`,
    `WhatsApp: ${demoRecord.phone || 'No indicado'}`,
    `Interés: ${demoRecord.interest}`,
    `Fecha de evento: ${EVENT.date}`,
    `Lugar: ${EVENT.location}`,
    `Entrada general: ${EVENT.price} (no pagada)`,
    `Generado: ${demoRecord.createdAt}`,
    '',
    'Este comprobante NO se envió a AECOMPU y NO reserva una entrada.',
    'Para un registro oficial se requiere un sistema central de validación.'
  ].join('\n');
  const blob = new Blob([ticket], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `AECOMPU-${demoRecord.code}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

/* ==========================================================
   MEJORAS: animaciones al hacer scroll y menú móvil
   (bloque añadido; no modifica la lógica anterior)
   ========================================================== */
(() => {
  // --- Menú móvil: cerrar con Escape, al tocar fuera o al pasar a escritorio ---
  const menuBtn = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelector('.nav-links');
  if (menuBtn && menuLinks) {
    const isOpen = () => menuLinks.classList.contains('open');
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen()) { menuBtn.click(); menuBtn.focus(); }
    });
    document.addEventListener('click', e => {
      if (isOpen() && !e.target.closest('.nav')) menuBtn.click();
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', e => {
      if (e.matches && isOpen()) menuBtn.click();
    });
  }

  // --- Revelado suave al entrar en pantalla ---
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  const selectors = [
    '.section-kicker', '.section-title', '.section-header > p',
    '.intro-copy', '.mini-features span',
    '.console-card', '.footnote',
    '.activity-card', '.price-card',
    '.raffle-layout > div:first-child > *', '.raffle-step',
    '.heart-mark', '.solidarity-layout > div:last-child > *',
    '.detail', '.location-link',
    '.registration-copy', '.registration-panel',
    '.faq-items details',
    '.last-cta .container > *', '.footer-inner > *'
  ].join(',');

  const counters = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll(selectors).forEach(el => {
    if (el.closest('.hero')) return;
    const n = counters.get(el.parentElement) || 0;
    counters.set(el.parentElement, n + 1);
    el.style.setProperty('--d', `${Math.min(n, 6) * 0.09}s`);
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
// Cuenta regresiva a las 12:00 del 23 de octubre de 2026, hora salvadoreña (UTC-06:00).
(() => {
  const date = new Date('2026-10-23T12:00:00-06:00').getTime();
  const ids = ['cd-days', 'cd-hours', 'cd-minutes', 'cd-seconds'];
  const nodes = ids.map(id => document.getElementById(id));
  if (nodes.some(node => !node)) return;
  const message = document.getElementById('countdown-message');
  function renderCountdown() {
    const rest = Math.max(0, date - Date.now());
    const seconds = Math.floor(rest / 1000);
    const values = [Math.floor(seconds / 86400), Math.floor((seconds % 86400) / 3600), Math.floor((seconds % 3600) / 60), seconds % 60];
    nodes.forEach((node, index) => { node.textContent = String(values[index]).padStart(2, '0'); });
    if (rest === 0) { message.textContent = '¡LLEGÓ EL DÍA DE AECOMPU EXPERIENCE!'; return true; }
    return false;
  }
  if (!renderCountdown()) {
    const timer = setInterval(() => { if (renderCountdown()) clearInterval(timer); }, 1000);
  }
})();
