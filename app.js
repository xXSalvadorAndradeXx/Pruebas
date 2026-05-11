/* ═══════════════════════════════════════════════════════════════
   UGB e-Champions League · app.js
   Vanilla JS — Modular, Clean, Production-Ready
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ─── DATA ────────────────────────────────────────────────────────

const MATCHES = {
  octavos: [
    { id:1,  home:'BR', away:'xJona_YT',                     scoreH:1, scoreA:0, date:'11 Mayo 2026', time:'8:20 AM',   status:'finished',   emoji:['🦁','🐺'] },
    { id:2,  home:'Danflo93', away:'Gaitan_gzz',             scoreH:2, scoreA:3, date:'11 Mayo 2026', time:'8:30 AM',   status:'finished',   emoji:['🦅','🐯'] },
    { id:3,  home:'PabloJZC', away:'Joshua_smith_503',       scoreH:0, scoreA:3, date:'11 Mayo 2026', time:'8:45 AM',   status:'finished',   emoji:['🐲','🦊'] },
    { id:4,  home:'Ramirez123', away:'lemus_17',             scoreH:0, scoreA:0, date:'11 Mayo 2026', time:'8:45 AM',   status:'pending',   emoji:['🐻','🏹'] },
    { id:5,  home:'Oscar10#', away:'Kyburex',                scoreH:0, scoreA:0, date:'11 Mayo 2026', time:'9:00 AM',   status:'pending',   emoji:['🌊','🌪️'] },
    { id:7,  home:'Remi', away:'Noe de Jesús',               scoreH:0, scoreA:0, date:'11 Mayo 2026', time:'9:15 AM',   status:'pending',   emoji:['🏹','⚔️'] },
    { id:8,  home:'MauroLH', away:'Lazo26',                  scoreH:0, scoreA:0, date:'11 Mayo 2026', time:'9:15 AM',   status:'pending',   emoji:['🌟','💥'] },
    { id:9,  home:'CharlyMart', away:'XxLABEStiaXx',         scoreH:0, scoreA:0, date:'11 Mayo 2026', time:'9:50 AM',   status:'pending',   emoji:['⚡','🔥'] },
  ],
  cuartos: [
    { id:9,   home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'12 Mayo 2026', time:'9:00 AM',  status:'pending', emoji:['🦁','🐲'] },
    { id:10,  home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'12 Mayo 2026', time:'9:00 AM',  status:'pending', emoji:['🦁','🐲'] },
    { id:11,  home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'12 Mayo 2026', time:'9:00 AM',  status:'pending', emoji:['🦁','🐲'] },
    { id:12,  home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'12 Mayo 2026', time:'9:00 AM',  status:'pending', emoji:['🦁','🐲'] },

    
  ],
  semis: [
    { id:13, home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'13 Mayo 2026', time:'9:00 AM', status:'pending', emoji:['🏆','🏆'] },
    { id:14, home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'13 Mayo 2026', time:'10:00 AM', status:'pending', emoji:['🏆','🏆'] },
  ],
  tercero: [
    { id:15, home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'15 Mayo 2026', time:'9:00 AM', status:'pending', emoji:['🥉','🥉'] },
  ],
  final: [
    { id:16, home:'Por definir', away:'Por definir', scoreH:0, scoreA:0, date:'15 Mayo 2026', time:'11:00 AM', status:'pending', emoji:['👑','👑'] },
  ],
};

const PHASE_LABELS = {
  octavos:'OCTAVOS',
  cuartos:'CUARTOS DE FINAL',
  semis:'SEMIFINAL',
  tercero:'TERCER LUGAR',
  final:'GRAN FINAL',
};

const STATUS_LABELS = {
  pending:'Pendiente',
  live:'En juego',
  finished:'Finalizado',
};

const REGLAMENTO = [
  {
    icon: '📋',
    name: 'General',
    rules: [
      'El torneo es exclusivo para estudiantes activos de la UGB.',
      'Cada participante debe registrarse con su cuenta oficial institucional.',
      'Los partidos se juegan en FC 26 en las plataformas acordadas.',
      'Cualquier conducta antideportiva podrá resultar en descalificación.',
    ],
  },
  {
    icon: '📐',
    name: 'Formato',
    rules: [
      'Fase de Octavos de Final: eliminación directa, partido unico.',
      'Tercer lugar y Final se juegan el mismo día de cierre.',
    ],
  },
  {
    icon: '⚙️',
    name: 'Configuración',
    rules: [
      'Duración de partido: 5 minutos por tiempo (10 minutos totales).',
      'Dificultad: Leyenda.',
      'Velocidad del juego: Rapida.',
      'Estadio y clima: configuración por defecto del juego.',
    ],
  },
  {
    icon: '👥',
    name: 'Equipos',
    rules: [
      'Cada jugador puede seleccionar cualquier equipo disponible en FC 26.',
      'No se permite cambiar de equipo entre partidos.',
      'No se permiten transferencias ni jugadores editados manualmente.',
      'En la Final, los equipos deben ser confirmados antes del partido.',
    ],
  },
  {
    icon: '⏰',
    name: 'Puntualidad',
    rules: [
      'Los jugadores deben presentarse 5 minutos antes de comenzar el partido.',
      'Si un jugador no se presenta en 5 minutos, pierde el partido por W.O.',
      'Los horarios son en hora local de El Salvador (CST).',
      'Lugar: Centro de Realidad Virtual, Aulas LAN, UGB CRU..',
    ],
  },
  {
    icon: '⚖️',
    name: 'Empates',
    rules: [
      'En eliminatorias: si hay empate, se juegan tiempo extra y penales.',
      'Los jugadores pueden elejir el desempate, ya sea, timepo extra, directo a penales o gol de oro.',
      'El resultado de penales es definitivo e inapelable.',
    ],
  },
  {
    icon: '🤝',
    name: 'Fair Play',
    rules: [
      'Comportamiento respetuoso y la comunicación.',
      'Está prohibido el uso de bugs, glitches o exploits conocidos.',
     
      'Reportes de conducta serán evaluados por el comité organizador.',
    ],
  },
  {
    icon: '🏆',
    name: 'Eliminatorias',
    rules: [
    
    ],
  },
];

// ─── NAVBAR ──────────────────────────────────────────────────────

function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger= document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links    = document.querySelectorAll('.nav-link');

  // Scroll effect
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  // Active section indicator
  const sections = ['inicio','partidos','premios','reglamento'];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.dataset.section === entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ─── PARTICLES ───────────────────────────────────────────────────

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 12}s;
    `;
    container.appendChild(p);
  }
}

// ─── COUNTDOWN ───────────────────────────────────────────────────

function initCountdown() {
  // 11 de mayo de 2026 a las 8:00 AM (El Salvador, UTC-6)
  const target = new Date('2026-05-11T08:20:00-06:00');

  const update = () => {
    const diff = target - Date.now();

    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

// ─── STAT COUNTERS ───────────────────────────────────────────────

function initCounters() {
  const nums = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const inc = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: .5 });
  nums.forEach(el => observer.observe(el));
}

// ─── REVEAL ON SCROLL ────────────────────────────────────────────

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── MATCHES ─────────────────────────────────────────────────────

function renderMatches(phase) {
  const grid = document.getElementById('matchesGrid');
  if (!grid) return;
  const matches = MATCHES[phase] || [];
  const label   = PHASE_LABELS[phase] || '';

  grid.innerHTML = matches.map((m, i) => `
    <div class="match-card" style="animation-delay:${i * .06}s">
      <div class="match-header">
        <span class="match-phase">${label}</span>
        <span class="match-status status-${m.status}">${STATUS_LABELS[m.status]}</span>
      </div>
      <div class="match-teams">
        <div class="team-info">
          <div class="team-avatar">${m.emoji[0]}</div>
          <div class="team-name">${m.home}</div>
        </div>
        <div class="match-score">
          <div class="score-box"><span>${m.status === 'pending' ? '-' : m.scoreH}</span></div>
          <div class="score-vs">VS</div>
          <div class="score-box"><span>${m.status === 'pending' ? '-' : m.scoreA}</span></div>
        </div>
        <div class="team-info">
          <div class="team-avatar">${m.emoji[1]}</div>
          <div class="team-name">${m.away}</div>
        </div>
      </div>
      <div class="match-meta">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          ${m.date}
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          ${m.time}
        </span>
      </div>
    </div>
  `).join('');
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  let active = 'octavos';
  renderMatches(active);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      active = tab.dataset.phase;
      renderMatches(active);
    });
  });
}

// ─── REGLAMENTO ──────────────────────────────────────────────────

function renderReglamento() {
  const grid = document.getElementById('reglamentoGrid');
  if (!grid) return;

  grid.innerHTML = REGLAMENTO.map((cat, i) => `
    <div class="reg-card reveal" style="animation-delay:${i * .05}s">
      <div class="reg-card-header" onclick="toggleReg(this)">
        <div class="reg-title-wrap">
          <div class="reg-icon">${cat.icon}</div>
          <span class="reg-name">${cat.name}</span>
        </div>
        <div class="reg-toggle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
      <div class="reg-body">
        <div class="reg-content">
          ${cat.rules.map(r => `
            <div class="reg-rule">
              <div class="reg-bullet"></div>
              <span>${r}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Re-init reveal for dynamically created cards
  document.querySelectorAll('.reg-card.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    observer.observe(el);
  });
}

window.toggleReg = function(header) {
  const card = header.closest('.reg-card');
  const isOpen = card.classList.contains('open');
  // Close all
  document.querySelectorAll('.reg-card.open').forEach(c => c.classList.remove('open'));
  // Open clicked (if wasn't open)
  if (!isOpen) card.classList.add('open');
};

// ─── SMOOTH SCROLL ───────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ─── INIT ────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initCountdown();
  initReveal();
  initCounters();
  initTabs();
  renderReglamento();
  initSmoothScroll();

  // Hero reveal on load
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 120);
    });
  }, 100);
});