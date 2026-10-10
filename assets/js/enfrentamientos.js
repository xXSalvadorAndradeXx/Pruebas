/* ==========================================================
   AECOMPU TOURNAMENT 2026 · ENFRENTAMIENTOS
   ----------------------------------------------------------
   Para editar el torneo solo se toca la parte de DATOS:
   1) NOMBRES: el nombre de cada participante (01 al 32).
   2) R32: los 16 cruces de 16avos (números de participante).
   3) Marcadores: en SCORES, con el id del partido.
   Los ganadores avanzan solos a la siguiente ronda.
   ========================================================== */

/* ---------- DATOS ---------- */

// Nombre de cada participante. El índice 0 es el participante 01.
const NOMBRES = Array.from({ length: 32 }, (_, i) =>
  `Participante ${String(i + 1).padStart(2, "0")}`
);
// Ejemplo para poner nombres reales:
// NOMBRES[0] = "Juan Pérez";

// Cruces de 16avos [participante A, participante B].
const R32 = [
  [1, 2], [3, 4], [5, 6], [7, 8],
  [9, 10], [11, 12], [13, 14], [15, 16],
  [17, 18], [19, 20], [21, 22], [23, 24],
  [25, 26], [27, 28], [29, 30], [31, 32],
];

// Marcadores jugados: id del partido -> [goles A, goles B].
// Si hay empate (penales), agrega winner: 1 (gana A) o 2 (gana B).
// Ejemplos:
//   r32-1: { score: [2, 1] },
//   r32-2: { score: [1, 1], winner: 2 },
const SCORES = {};

/* ---------- ARMADO DEL CUADRO ---------- */

const ROUNDS = [
  { key: "r32", title: "16avos de final", short: "16avos" },
  { key: "r16", title: "Octavos de final", short: "Octavos" },
  { key: "qf",  title: "Cuartos de final", short: "Cuartos" },
  { key: "sf",  title: "Semifinales", short: "Semifinales" },
  { key: "third", title: "Tercer lugar", short: "3er lugar" },
  { key: "final", title: "Final", short: "Final" },
];

function buildMatches() {
  const matches = [];

  R32.forEach(([a, b], i) => {
    matches.push({
      id: `r32-${i + 1}`, round: "r32", n: i + 1,
      a: { p: a }, b: { p: b },
    });
  });

  const next = (round, prev, count) => {
    for (let i = 0; i < count; i++) {
      matches.push({
        id: `${round}-${i + 1}`, round, n: i + 1,
        a: { from: `${prev}-${i * 2 + 1}`, take: "w" },
        b: { from: `${prev}-${i * 2 + 2}`, take: "w" },
      });
    }
  };

  next("r16", "r32", 8);
  next("qf", "r16", 4);
  next("sf", "qf", 2);

  matches.push({
    id: "third-1", round: "third", n: 1,
    a: { from: "sf-1", take: "l" }, b: { from: "sf-2", take: "l" },
  });
  matches.push({
    id: "final-1", round: "final", n: 1,
    a: { from: "sf-1", take: "w" }, b: { from: "sf-2", take: "w" },
  });

  return matches;
}

function roundTitle(key) {
  return ROUNDS.find(r => r.key === key).short;
}

// Devuelve el ganador (1 o 2) de un partido, o 0 si aún no se define.
function winnerOf(m) {
  const s = SCORES[m.id];
  if (!s || !Array.isArray(s.score)) return 0;
  const [x, y] = s.score;
  if (typeof x !== "number" || typeof y !== "number") return 0;
  if (x > y) return 1;
  if (y > x) return 2;
  return s.winner === 1 || s.winner === 2 ? s.winner : 0;
}

// Resuelve cada lado del partido: participante real o "por definir".
function resolve(matches) {
  const byId = Object.fromEntries(matches.map(m => [m.id, m]));

  const side = (slot) => {
    if (slot.p) return { p: slot.p };
    const src = byId[slot.from];
    const w = winnerOf(src);
    if (w) {
      const winnerSide = w === 1 ? src.a : src.b;
      const loserSide = w === 1 ? src.b : src.a;
      const pick = slot.take === "w" ? winnerSide : loserSide;
      if (pick.p) return { p: pick.p };
    }
    const verb = slot.take === "w" ? "Ganador" : "Perdedor";
    return { label: `${verb} ${roundTitle(src.round)} ${src.n}` };
  };

  // Se resuelve en orden: las rondas anteriores ya tienen p resuelto.
  matches.forEach(m => {
    m.a = Object.assign({}, m.a, side(m.a));
    m.b = Object.assign({}, m.b, side(m.b));
  });
}

/* ---------- RENDER ---------- */

const pad = (n) => String(n).padStart(2, "0");

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function photoBox(side) {
  if (!side.p) {
    return `
      <div class="versus-photo versus-photo--tbd" aria-hidden="true">
        <span>?</span>
        <small>POR DEFINIR</small>
      </div>`;
  }
  const id = pad(side.p);
  const name = escapeHtml(NOMBRES[side.p - 1]);
  const imgs = [1, 2, 3].map(k => `
        <img class="participant-photo${k === 1 ? " is-active" : ""}"
             src="assets/img/participantes/participante-${id}-0${k}.jpg"
             alt="${name}, pose ${k}" loading="lazy">`).join("");
  return `
      <div class="versus-photo" aria-label="Fotos de ${name}">
        <div class="versus-photo__fallback" aria-hidden="true"><span>${id}</span></div>${imgs}
        <div class="versus-photo__dots" aria-hidden="true"><i class="is-active"></i><i></i><i></i></div>
      </div>`;
}

function nameHtml(side, extraClass = "") {
  if (!side.p) {
    return `<span class="versus-name versus-name--tbd ${extraClass}">${escapeHtml(side.label)}</span>`;
  }
  return `<span class="versus-name ${extraClass}">${escapeHtml(NOMBRES[side.p - 1])}</span>`;
}

function matchHtml(m) {
  const s = SCORES[m.id];
  const played = s && Array.isArray(s.score);
  const [x, y] = played ? s.score : [0, 0];
  const w = winnerOf(m);

  return `
    <article class="versus-card${played ? " is-played" : ""}" id="${m.id}">
      <header class="versus-card__head">
        <span>${roundTitle(m.round)} · Partido ${pad(m.n)}</span>
        <span class="versus-card__status">${played ? "Finalizado" : "Pendiente"}</span>
      </header>
      <div class="versus-card__photos">
        ${photoBox(m.a)}
        ${photoBox(m.b)}
      </div>
      <div class="versus-card__score">
        ${nameHtml(m.a, w === 1 ? "is-winner" : "")}
        <span class="versus-result">(${x} - ${y})</span>
        ${nameHtml(m.b, w === 2 ? "is-winner" : "")}
      </div>
    </article>`;
}

function render() {
  const matches = buildMatches();
  resolve(matches);

  const root = document.getElementById("enfrentamientos");
  root.innerHTML = ROUNDS.map(r => {
    const list = matches.filter(m => m.round === r.key);
    return `
      <section class="versus-round" id="ronda-${r.key}">
        <div class="versus-round__head">
          <h2>${r.title}</h2>
          <span>${list.length} ${list.length === 1 ? "partido" : "partidos"}</span>
        </div>
        <div class="versus-grid versus-grid--${r.key}">
          ${list.map(matchHtml).join("")}
        </div>
      </section>`;
  }).join("");

  const tabs = document.getElementById("versus-tabs");
  if (tabs) {
    tabs.innerHTML = ROUNDS.map(r =>
      `<a href="#ronda-${r.key}">${r.short}</a>`
    ).join("");
  }
}

/* ---------- ROTACIÓN DE FOTOS (cada 3 segundos) ---------- */

function startPhotoRotation() {
  const boxes = [...document.querySelectorAll(".versus-photo:not(.versus-photo--tbd)")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  boxes.forEach((box, boxIndex) => {
    const photos = [...box.querySelectorAll(".participant-photo")];
    const dots = [...box.querySelectorAll(".versus-photo__dots i")];

    photos.forEach((img) => {
      img.addEventListener("error", () => img.classList.add("is-missing"));
    });

    if (reducedMotion) return;

    let index = 0;
    const rotate = () => {
      const available = photos.filter(img => !img.classList.contains("is-missing"));
      if (available.length < 2) return;

      photos.forEach(img => img.classList.remove("is-active"));
      dots.forEach(dot => dot.classList.remove("is-active"));

      index = (index + 1) % photos.length;
      let safety = 0;
      while (photos[index].classList.contains("is-missing") && safety < photos.length) {
        index = (index + 1) % photos.length;
        safety++;
      }

      photos[index].classList.add("is-active");
      if (dots[index]) dots[index].classList.add("is-active");
    };

    // Desfase inicial para que no cambien todas al mismo tiempo.
    setTimeout(() => {
      rotate();
      setInterval(rotate, 3000);
    }, 900 + (boxIndex % 8) * 240);
  });
}

/* ---------- INICIO ---------- */

if (typeof document !== "undefined") {
  render();
  startPhotoRotation();
}

// Permite probar la lógica con Node sin navegador.
if (typeof module !== "undefined") {
  module.exports = { buildMatches, resolve, winnerOf, SCORES, NOMBRES, ROUNDS };
}