"use strict";

const TOURNAMENT_CONFIG = {
  tournamentName: "AECOMPU SuperLeague",
  game: "FC 27",
  season: "2026",
  organizer: "AECOMPU",
  registrationUrl: "#",
  registrationDeadline: null,
  tournamentDate: null,
  venue: "Universidad Gerardo Barrios - Usulután",
  platform: "POR CONFIRMAR",
  modality: "PRESENCIAL",
  format: "1 VS 1",
  andradeDevUrl: "https://iamsalvadorandrade.netlify.app/",
  aecompuLogo: "assets/img/logos/aecompu.png"
};

const tournamentStages = [
  {
    name: "REGISTRO",
    note: "Inscripción de participantes"
  },
  {
    name: "SORTEO",
    note: "POR CONFIRMAR"
  },
  {
    name: "RONDA INICIAL",
    note: "FORMATO CONFIGURABLE"
  },
  {
    name: "ELIMINATORIAS",
    note: "FORMATO CONFIGURABLE"
  },
  {
    name: "SEMIFINAL",
    note: "FORMATO CONFIGURABLE"
  },
  {
    name: "GRAN FINAL",
    note: "CAMPEONATO"
  }
];

const matches = [
  {
    stage: "CUARTOS DE FINAL",
    status: "FINAL",
    playerA: "JUGADOR 01",
    scoreA: 2,
    playerB: "JUGADOR 02",
    scoreB: 1
  },
  {
    stage: "SEMIFINAL",
    status: "PRÓXIMAMENTE",
    playerA: "JUGADOR 03",
    scoreA: null,
    playerB: "JUGADOR 04",
    scoreB: null
  },
  {
    stage: "SEMIFINAL",
    status: "PRÓXIMAMENTE",
    playerA: "JUGADOR 05",
    scoreA: null,
    playerB: "JUGADOR 06",
    scoreB: null
  }
];

const bracket = [
  {
    title: "CUARTOS",
    matches: [
      ["PLAYER 01", "PLAYER 02"],
      ["PLAYER 03", "PLAYER 04"],
      ["PLAYER 05", "PLAYER 06"],
      ["PLAYER 07", "PLAYER 08"]
    ]
  },
  {
    title: "SEMIFINALES",
    matches: [
      ["POR CONFIRMAR", "POR CONFIRMAR"],
      ["POR CONFIRMAR", "POR CONFIRMAR"]
    ]
  },
  {
    title: "FINAL",
    matches: [
      ["POR CONFIRMAR", "POR CONFIRMAR"]
    ]
  },
  {
    title: "CAMPEÓN",
    champion: "POR CONFIRMAR"
  }
];

const schedule = [
  {
    name: "INSCRIPCIONES",
    date: "POR CONFIRMAR",
    time: "POR CONFIRMAR",
    location: "POR CONFIRMAR",
    status: "PRÓXIMAMENTE"
  },
  {
    name: "SORTEO",
    date: "POR CONFIRMAR",
    time: "POR CONFIRMAR",
    location: "POR CONFIRMAR",
    status: "PRÓXIMAMENTE"
  },
  {
    name: "PRIMERA RONDA",
    date: "POR CONFIRMAR",
    time: "POR CONFIRMAR",
    location: TOURNAMENT_CONFIG.venue,
    status: "PRÓXIMAMENTE"
  },
  {
    name: "ELIMINATORIAS",
    date: "POR CONFIRMAR",
    time: "POR CONFIRMAR",
    location: TOURNAMENT_CONFIG.venue,
    status: "PRÓXIMAMENTE"
  },
  {
    name: "GRAN FINAL",
    date: "POR CONFIRMAR",
    time: "POR CONFIRMAR",
    location: TOURNAMENT_CONFIG.venue,
    status: "PRÓXIMAMENTE"
  }
];

const rules = [
  {
    title: "Formato",
    preview: "Formato competitivo 1 VS 1.",
    detail:
      "El torneo se plantea en modalidad 1 VS 1. La estructura definitiva de rondas y emparejamientos queda POR CONFIRMAR."
  },
  {
    title: "Partidos",
    preview: "Duración y configuración POR CONFIRMAR.",
    detail:
      "La duración de los partidos, dificultad, velocidad de juego, condiciones y demás parámetros específicos de FC 27 están POR CONFIRMAR."
  },
  {
    title: "Controles",
    preview: "Uso de controles POR CONFIRMAR.",
    detail:
      "La organización todavía debe confirmar si los participantes deberán llevar su propio control, qué modelos serán admitidos y cómo se gestionarán los periféricos."
  },
  {
    title: "Puntualidad",
    preview: "Horarios oficiales POR CONFIRMAR.",
    detail:
      "Los márgenes de llegada, tolerancia y consecuencias por retraso están POR CONFIRMAR."
  },
  {
    title: "Fair Play",
    preview: "Competencia respetuosa y organizada.",
    detail:
      "Se espera una conducta respetuosa entre participantes, organización y público. Los criterios formales de conducta se publicarán en el reglamento definitivo."
  },
  {
    title: "Sanciones",
    preview: "Sistema disciplinario POR CONFIRMAR.",
    detail:
      "Las faltas, advertencias, descalificaciones y sanciones específicas están POR CONFIRMAR."
  }
];

const modalRules = [
  {
    title: "Formato",
    detail: rules[0].detail
  },
  {
    title: "Configuración",
    detail: "Parámetros específicos de FC 27: POR CONFIRMAR."
  },
  {
    title: "Equipos",
    detail:
      "Selección de clubes, selecciones, restricciones o criterios de uso: POR CONFIRMAR."
  },
  {
    title: "Pausas",
    detail:
      "Número, duración y condiciones para realizar pausas: POR CONFIRMAR."
  },
  {
    title: "Desempates",
    detail:
      "Procedimiento de tiempo extra, penales u otros mecanismos: POR CONFIRMAR."
  },
  {
    title: "Puntualidad",
    detail: rules[3].detail
  },
  {
    title: "Conducta",
    detail: rules[4].detail
  },
  {
    title: "Sanciones",
    detail: rules[5].detail
  }
];

const faq = [
  {
    question: "¿Quién puede participar?",
    answer:
      "Los requisitos definitivos de participación están POR CONFIRMAR. AECOMPU publicará la información oficial antes de abrir el registro."
  },
  {
    question: "¿Qué necesito para competir?",
    answer:
      "Los requisitos técnicos y de registro están POR CONFIRMAR. La página se actualizará cuando la organización los defina."
  },
  {
    question: "¿Debo llevar mi propio control?",
    answer:
      "POR CONFIRMAR. La organización indicará si cada participante debe llevar su control y qué dispositivos serán compatibles."
  },
  {
    question: "¿Dónde se realizará?",
    answer:
      "La sede general indicada es Universidad Gerardo Barrios, Centro Regional Usulután. El espacio específico dentro del campus está POR CONFIRMAR."
  },
  {
    question: "¿Cómo conoceré mi rival?",
    answer:
      "El mecanismo del sorteo y la publicación de emparejamientos están POR CONFIRMAR. El bracket de esta web quedará preparado para mostrarlo."
  },
  {
    question: "¿Qué sucede si llego tarde?",
    answer:
      "La tolerancia y las sanciones por retraso están POR CONFIRMAR y se publicarán en el reglamento oficial."
  },
  {
    question: "¿Cuándo será el sorteo?",
    answer: "La fecha y hora del sorteo están POR CONFIRMAR."
  },
  {
    question: "¿Dónde puedo consultar las reglas?",
    answer:
      "Puedes abrir el reglamento desde la sección de reglas. Los puntos pendientes aparecerán como POR CONFIRMAR hasta que AECOMPU publique la versión definitiva."
  }
];

document.addEventListener("DOMContentLoaded", init);

function init() {
  renderSeason();
  renderQuickInfo();
  renderRoadmap();
  renderMatches();
  renderBracket();
  renderRules();
  renderSchedule();
  renderFAQ();

  setupRegistration();
  setupCountdown();
  setupNavbar();
  setupMobileMenu();
  setupModal();
  setupAccordion();
  setupRevealAnimations();
  setupCounters();
  setupActiveNavigation();
  setupLogoFallback();
  setupParallax();
}

function renderSeason() {
  document.querySelectorAll("[data-season]").forEach((node) => {
    node.textContent = TOURNAMENT_CONFIG.season;
  });
}

function renderQuickInfo() {
  const items = [
    ["FORMATO", TOURNAMENT_CONFIG.format],
    ["PLATAFORMA", TOURNAMENT_CONFIG.platform],
    ["MODALIDAD", TOURNAMENT_CONFIG.modality],
    ["SEDE", "UGB USULUTÁN"],
    [
      "INSCRIPCIÓN",
      TOURNAMENT_CONFIG.registrationUrl === "#"
        ? "PRÓXIMAMENTE"
        : "ABIERTA"
    ]
  ];

  const container = document.getElementById("quickInfo");

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      ([label, value]) => `
        <article class="quick-item">
          <span>${escapeHTML(label)}</span>
          <strong>${escapeHTML(value)}</strong>
        </article>
      `
    )
    .join("");
}

function renderRoadmap() {
  const container = document.getElementById("roadmap");

  if (!container) {
    return;
  }

  container.innerHTML = tournamentStages
    .map(
      (stage, index) => `
        <article
          class="road-step reveal fade-up"
          style="transition-delay:${Math.min(index * 70, 350)}ms"
        >
          <div class="road-step__node">
            <span>${String(index + 1).padStart(2, "0")}</span>
          </div>

          <div>
            <h3>${escapeHTML(stage.name)}</h3>
            <p>${escapeHTML(stage.note)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderMatches() {
  const container = document.getElementById("matchGrid");

  if (!container) {
    return;
  }

  container.innerHTML = matches
    .map((match, index) => {
      const statusClass = getStatusClass(match.status);

      const scoreA = Number.isFinite(match.scoreA)
        ? match.scoreA
        : "—";

      const scoreB = Number.isFinite(match.scoreB)
        ? match.scoreB
        : "—";

      return `
        <article
          class="match-card reveal fade-up"
          style="transition-delay:${Math.min(index * 80, 240)}ms"
        >
          <div class="match-card__top">

            <span class="match-card__stage">
              ${escapeHTML(match.stage)}
            </span>

            <span class="status ${statusClass}">
              ${escapeHTML(match.status)}
            </span>

          </div>

          <div class="match-card__body">

            <div class="match-player">
              <strong>${escapeHTML(match.playerA)}</strong>
              <span>${scoreA}</span>
            </div>

            <div class="match-vs">
              ${match.status === "FINAL" ? "FINAL" : "VS"}
            </div>

            <div class="match-player">
              <strong>${escapeHTML(match.playerB)}</strong>
              <span>${scoreB}</span>
            </div>

          </div>
        </article>
      `;
    })
    .join("");
}

function renderBracket() {
  const container = document.getElementById("bracket");

  if (!container) {
    return;
  }

  container.innerHTML = bracket
    .map((column, columnIndex) => {
      if (column.champion) {
        return `
          <section class="bracket-column">

            <div class="bracket-column__title">
              ${escapeHTML(column.title)}
            </div>

            <div class="bracket-champion">
              <div>

                <span>CHAMPION</span>

                <strong>
                  ${escapeHTML(column.champion)}
                </strong>

              </div>
            </div>

          </section>
        `;
      }

      const gapClass =
        columnIndex === 1
          ? "bracket-gap-lg"
          : columnIndex === 2
          ? "bracket-gap-xl"
          : "";

      return `
        <section class="bracket-column ${gapClass}">

          <div class="bracket-column__title">
            ${escapeHTML(column.title)}
          </div>

          ${column.matches
            .map(
              (players) => `
                <div class="bracket-match">

                  <div class="bracket-player">
                    <span>${escapeHTML(players[0])}</span>
                    <strong>—</strong>
                  </div>

                  <div class="bracket-player">
                    <span>${escapeHTML(players[1])}</span>
                    <strong>—</strong>
                  </div>

                </div>
              `
            )
            .join("")}

        </section>
      `;
    })
    .join("");
}

function renderRules() {
  const preview = document.getElementById("rulesPreview");

  const modalContent = document.getElementById(
    "rulesModalContent"
  );

  if (preview) {
    preview.innerHTML = rules
      .map(
        (rule, index) => `
          <article class="rule-card">

            <span>
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              ${escapeHTML(rule.title.toUpperCase())}
            </h3>

            <p>
              ${escapeHTML(rule.preview)}
            </p>

          </article>
        `
      )
      .join("");
  }

  if (modalContent) {
    modalContent.innerHTML = modalRules
      .map(
        (rule, index) => `
          <section class="modal-rule">

            <span>
              ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
              ${escapeHTML(rule.title)}
            </h3>

            <p>
              ${escapeHTML(rule.detail)}
            </p>

          </section>
        `
      )
      .join("");
  }
}

function renderSchedule() {
  const container = document.getElementById("schedule");

  if (!container) {
    return;
  }

  container.innerHTML = schedule
    .map(
      (event, index) => `
        <article class="schedule-item reveal fade-up">

          <div class="schedule-item__num">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <div class="schedule-item__content">

            <h3>
              ${escapeHTML(event.name)}
            </h3>

            <p>
              ${escapeHTML(event.location)}
            </p>

          </div>

          <div class="schedule-item__meta">

            <span>
              ${escapeHTML(event.date)}
              ·
              ${escapeHTML(event.time)}
            </span>

            <span
              class="status ${getStatusClass(event.status)}"
            >
              ${escapeHTML(event.status)}
            </span>

          </div>

        </article>
      `
    )
    .join("");
}

function renderFAQ() {
  const container = document.getElementById("faqAccordion");

  if (!container) {
    return;
  }

  container.innerHTML = faq
    .map((item, index) => {
      const buttonId = `faq-button-${index}`;
      const panelId = `faq-panel-${index}`;

      return `
        <article class="accordion-item">

          <button
            class="accordion-trigger"
            id="${buttonId}"
            type="button"
            aria-expanded="false"
            aria-controls="${panelId}"
          >

            <span>
              ${escapeHTML(item.question)}
            </span>

            <span aria-hidden="true">
              +
            </span>

          </button>

          <div
            class="accordion-panel"
            id="${panelId}"
            role="region"
            aria-labelledby="${buttonId}"
          >

            <div>

              <p>
                ${escapeHTML(item.answer)}
              </p>

            </div>

          </div>

        </article>
      `;
    })
    .join("");
}

function setupRegistration() {
  const button = document.getElementById(
    "registrationButton"
  );

  const deadline = document.getElementById(
    "registrationDeadline"
  );

  const andradeLink = document.getElementById(
    "andradeDevLink"
  );

  if (deadline) {
    deadline.textContent = formatConfiguredDate(
      TOURNAMENT_CONFIG.registrationDeadline
    );
  }

  if (button) {
    if (TOURNAMENT_CONFIG.registrationUrl === "#") {
      button.textContent =
        "INSCRIPCIONES PRÓXIMAMENTE";

      button.setAttribute(
        "aria-disabled",
        "true"
      );

      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
        }
      );
    } else {
      button.textContent =
        "INSCRIBIRME AHORA";

      button.href =
        TOURNAMENT_CONFIG.registrationUrl;

      button.target = "_blank";

      button.rel =
        "noopener noreferrer";
    }
  }

  if (andradeLink) {
    andradeLink.href =
      TOURNAMENT_CONFIG.andradeDevUrl || "#";
  }
}

function setupCountdown() {
  const countdown = document.getElementById(
    "countdown"
  );

  const empty = document.getElementById(
    "countdownEmpty"
  );

  if (!countdown || !empty) {
    return;
  }

  if (!TOURNAMENT_CONFIG.tournamentDate) {
    countdown.hidden = true;
    empty.hidden = false;

    empty.textContent =
      "FECHA POR CONFIRMAR";

    return;
  }

  const target = new Date(
    TOURNAMENT_CONFIG.tournamentDate
  );

  if (Number.isNaN(target.getTime())) {
    countdown.hidden = true;
    empty.hidden = false;

    empty.textContent =
      "FECHA POR CONFIRMAR";

    return;
  }

  countdown.hidden = false;
  empty.hidden = true;

  const update = () => {
    const distance =
      target.getTime() - Date.now();

    if (distance <= 0) {
      countdown.hidden = true;
      empty.hidden = false;

      empty.textContent =
        "EL TORNEO HA COMENZADO";

      return false;
    }

    const days = Math.floor(
      distance / 86400000
    );

    const hours = Math.floor(
      (distance % 86400000) / 3600000
    );

    const minutes = Math.floor(
      (distance % 3600000) / 60000
    );

    const seconds = Math.floor(
      (distance % 60000) / 1000
    );

    setText(
      "days",
      String(days).padStart(2, "0")
    );

    setText(
      "hours",
      String(hours).padStart(2, "0")
    );

    setText(
      "minutes",
      String(minutes).padStart(2, "0")
    );

    setText(
      "seconds",
      String(seconds).padStart(2, "0")
    );

    return true;
  };

  update();

  const timer = window.setInterval(() => {
    if (!update()) {
      window.clearInterval(timer);
    }
  }, 1000);
}

function setupNavbar() {
  const header = document.getElementById(
    "siteHeader"
  );

  if (!header) {
    return;
  }

  const update = () => {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 18
    );
  };

  update();

  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );
}

function setupMobileMenu() {
  const toggle = document.getElementById(
    "menuToggle"
  );

  const panel = document.getElementById(
    "navMenu"
  );

  if (!toggle || !panel) {
    return;
  }

  const closeMenu = () => {
    toggle.classList.remove(
      "is-open"
    );

    panel.classList.remove(
      "is-open"
    );

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    toggle.setAttribute(
      "aria-label",
      "Abrir menú"
    );

    panel.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "menu-open"
    );
  };

  const openMenu = () => {
    toggle.classList.add(
      "is-open"
    );

    panel.classList.add(
      "is-open"
    );

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

    toggle.setAttribute(
      "aria-label",
      "Cerrar menú"
    );

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );
  };

  toggle.addEventListener(
    "click",
    () => {
      if (
        toggle.getAttribute(
          "aria-expanded"
        ) === "true"
      ) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  );

  panel.addEventListener(
    "click",
    (event) => {
      if (
        event.target.closest("a")
      ) {
        closeMenu();
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (
        window.innerWidth > 1120
      ) {
        closeMenu();
      }
    }
  );
}

function setupModal() {
  const modal = document.getElementById(
    "rulesModal"
  );

  const dialog =
    modal?.querySelector(
      ".modal__dialog"
    );

  const openButton =
    document.getElementById(
      "openRules"
    );

  const closeButton =
    document.getElementById(
      "closeRules"
    );

  if (
    !modal ||
    !dialog ||
    !openButton ||
    !closeButton
  ) {
    return;
  }

  let lastFocusedElement = null;

  const getFocusable = () => {
    return [
      ...dialog.querySelectorAll(
        `
          button,
          [href],
          input,
          select,
          textarea,
          [tabindex]:not([tabindex="-1"])
        `
      )
    ].filter(
      (node) =>
        !node.hasAttribute("disabled")
    );
  };

  const openModal = () => {
    lastFocusedElement =
      document.activeElement;

    modal.classList.add(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    window.requestAnimationFrame(
      () => {
        modal.classList.add(
          "is-visible"
        );

        dialog.focus();
      }
    );
  };

  const closeModal = () => {
    modal.classList.remove(
      "is-visible"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    window.setTimeout(
      () => {
        modal.classList.remove(
          "is-open"
        );

        if (
          lastFocusedElement instanceof
          HTMLElement
        ) {
          lastFocusedElement.focus();
        }
      },
      240
    );
  };

  openButton.addEventListener(
    "click",
    openModal
  );

  closeButton.addEventListener(
    "click",
    closeModal
  );

  modal.addEventListener(
    "click",
    (event) => {
      if (
        event.target.matches(
          "[data-modal-close]"
        )
      ) {
        closeModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        !modal.classList.contains(
          "is-open"
        )
      ) {
        return;
      }

      if (event.key === "Escape") {
        closeModal();

        return;
      }

      if (event.key === "Tab") {
        const focusable =
          getFocusable();

        if (!focusable.length) {
          return;
        }

        const first =
          focusable[0];

        const last =
          focusable[
            focusable.length - 1
          ];

        if (
          event.shiftKey &&
          document.activeElement ===
            first
        ) {
          event.preventDefault();

          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement ===
            last
        ) {
          event.preventDefault();

          first.focus();
        }
      }
    }
  );
}

function setupAccordion() {
  const accordion =
    document.getElementById(
      "faqAccordion"
    );

  if (!accordion) {
    return;
  }

  accordion.addEventListener(
    "click",
    (event) => {
      const trigger =
        event.target.closest(
          ".accordion-trigger"
        );

      if (!trigger) {
        return;
      }

      const currentItem =
        trigger.closest(
          ".accordion-item"
        );

      const isOpen =
        trigger.getAttribute(
          "aria-expanded"
        ) === "true";

      accordion
        .querySelectorAll(
          ".accordion-item"
        )
        .forEach((item) => {
          item.classList.remove(
            "is-open"
          );

          item
            .querySelector(
              ".accordion-trigger"
            )
            ?.setAttribute(
              "aria-expanded",
              "false"
            );
        });

      if (!isOpen) {
        currentItem?.classList.add(
          "is-open"
        );

        trigger.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    }
  );
}

function setupRevealAnimations() {
  const nodes =
    document.querySelectorAll(
      ".reveal"
    );

  if (
    !(
      "IntersectionObserver" in
      window
    )
  ) {
    nodes.forEach((node) => {
      node.classList.add(
        "is-visible"
      );
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      (
        entries,
        revealObserver
      ) => {
        entries.forEach(
          (entry) => {
            if (
              !entry.isIntersecting
            ) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );
          }
        );
      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -6% 0px"
      }
    );

  nodes.forEach((node) => {
    observer.observe(node);
  });
}

function setupCounters() {
  const counters =
    document.querySelectorAll(
      "[data-count]"
    );

  if (
    !(
      "IntersectionObserver" in
      window
    )
  ) {
    return;
  }

  const observer =
    new IntersectionObserver(
      (
        entries,
        counterObserver
      ) => {
        entries.forEach(
          (entry) => {
            if (
              !entry.isIntersecting
            ) {
              return;
            }

            const node =
              entry.target;

            const target =
              Number(
                node.dataset.count ||
                  0
              );

            const suffix =
              node.dataset.suffix ||
              "";

            const format =
              node.dataset.format;

            const duration = 900;

            const startTime =
              performance.now();

            const tick = (now) => {
              const progress =
                Math.min(
                  (now -
                    startTime) /
                    duration,
                  1
                );

              const eased =
                1 -
                Math.pow(
                  1 - progress,
                  3
                );

              const value =
                Math.round(
                  target * eased
                );

              const rendered =
                format === "02"
                  ? String(
                      value
                    ).padStart(
                      2,
                      "0"
                    )
                  : String(value);

              node.textContent =
                rendered + suffix;

              if (progress < 1) {
                requestAnimationFrame(
                  tick
                );
              }
            };

            requestAnimationFrame(
              tick
            );

            counterObserver.unobserve(
              node
            );
          }
        );
      },
      {
        threshold: 0.6
      }
    );

  counters.forEach(
    (counter) => {
      observer.observe(counter);
    }
  );
}

function setupActiveNavigation() {
  const sections =
    document.querySelectorAll(
      ".section-anchor"
    );

  const links = [
    ...document.querySelectorAll(
      "[data-nav]"
    )
  ];

  if (
    !sections.length ||
    !links.length ||
    !(
      "IntersectionObserver" in
      window
    )
  ) {
    return;
  }

  const linkMap = new Map(
    links.map((link) => [
      link
        .getAttribute("href")
        ?.replace("#", ""),
      link
    ])
  );

  const observer =
    new IntersectionObserver(
      (entries) => {
        const visible =
          entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            )[0];

        if (!visible) {
          return;
        }

        links.forEach((link) => {
          link.classList.remove(
            "is-active"
          );
        });

        linkMap
          .get(
            visible.target.id
          )
          ?.classList.add(
            "is-active"
          );
      },
      {
        rootMargin:
          "-30% 0px -55% 0px",

        threshold: [
          0.01,
          0.2,
          0.5
        ]
      }
    );

  sections.forEach(
    (section) => {
      observer.observe(section);
    }
  );
}

function setupLogoFallback() {
  const img =
    document.getElementById(
      "aecompuLogo"
    );

  const placeholder =
    document.getElementById(
      "aecompuLogoPlaceholder"
    );

  if (
    !img ||
    !placeholder ||
    !TOURNAMENT_CONFIG.aecompuLogo
  ) {
    return;
  }

  const probe = new Image();

  probe.onload = () => {
    img.src =
      TOURNAMENT_CONFIG.aecompuLogo;

    img.hidden = false;

    placeholder.hidden = true;
  };

  probe.onerror = () => {
    img.hidden = true;

    placeholder.hidden = false;
  };

  probe.src =
    TOURNAMENT_CONFIG.aecompuLogo;
}

function setupParallax() {
  const heroNumber =
    document.querySelector(
      ".hero__number"
    );

  if (!heroNumber) {
    return;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (reduceMotion) {
    return;
  }

  let ticking = false;

  const update = () => {
    const offset = Math.min(
      window.scrollY * 0.035,
      28
    );

    heroNumber.style.transform =
      `translate3d(0, ${offset}px, 0)`;

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      ticking = true;

      requestAnimationFrame(
        update
      );
    },
    {
      passive: true
    }
  );
}

function getStatusClass(status) {
  const normalized =
    String(status || "")
      .toUpperCase();

  if (
    normalized === "FINAL" ||
    normalized === "FINALIZADO"
  ) {
    return "status--final";
  }

  if (
    normalized === "EN VIVO"
  ) {
    return "status--live";
  }

  return "status--upcoming";
}

function formatConfiguredDate(value) {
  if (!value) {
    return "POR CONFIRMAR";
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "POR CONFIRMAR";
  }

  return new Intl.DateTimeFormat(
    "es-SV",
    {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  ).format(date);
}

function setText(id, value) {
  const node =
    document.getElementById(id);

  if (node) {
    node.textContent = value;
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}