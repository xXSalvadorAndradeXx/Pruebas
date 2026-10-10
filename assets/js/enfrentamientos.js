/* ==========================================================
   AECOMPU TOURNAMENT 2026 · ENFRENTAMIENTOS

   IMPORTANTE:
   DURANTE EL TORNEO SOLO MODIFIQUE "SCORES".

   EJEMPLO NORMAL:
   "r32-1": { score: [2, 0] },

   SI HAY EMPATE Y SE DEFINE POR PENALES:
   "r32-2": { score: [1, 1], winner: 2 },

   winner: 1 = gana jugador de la izquierda
   winner: 2 = gana jugador de la derecha

   Los ganadores avanzan automáticamente.
   Los perdedores de semifinales avanzan automáticamente
   al partido por tercer lugar.
   ========================================================== */


/* ==========================================================
   ÚNICA PARTE QUE DEBE MODIFICAR DURANTE EL TORNEO
   ========================================================== */

const SCORES = {

  /* ========================================================
     16AVOS DE FINAL
     ======================================================== */

  // "r32-1":  { score: [0, 0] },
  // "r32-2":  { score: [0, 0] },
  // "r32-3":  { score: [0, 0] },
  // "r32-4":  { score: [0, 0] },
  // "r32-5":  { score: [0, 0] },
  // "r32-6":  { score: [0, 0] },
  // "r32-7":  { score: [0, 0] },
  // "r32-8":  { score: [0, 0] },
  // "r32-9":  { score: [0, 0] },
  // "r32-10": { score: [0, 0] },
  // "r32-11": { score: [0, 0] },
  // "r32-12": { score: [0, 0] },
  // "r32-13": { score: [0, 0] },
  // "r32-14": { score: [0, 0] },
  // "r32-15": { score: [0, 0] },
  // "r32-16": { score: [0, 0] },


  /* ========================================================
     OCTAVOS DE FINAL
     ======================================================== */

  // "r16-1": { score: [0, 0] },
  // "r16-2": { score: [0, 0] },
  // "r16-3": { score: [0, 0] },
  // "r16-4": { score: [0, 0] },
  // "r16-5": { score: [0, 0] },
  // "r16-6": { score: [0, 0] },
  // "r16-7": { score: [0, 0] },
  // "r16-8": { score: [0, 0] },


  /* ========================================================
     CUARTOS DE FINAL
     ======================================================== */

  // "qf-1": { score: [0, 0] },
  // "qf-2": { score: [0, 0] },
  // "qf-3": { score: [0, 0] },
  // "qf-4": { score: [0, 0] },


  /* ========================================================
     SEMIFINALES
     ======================================================== */

  // "sf-1": { score: [0, 0] },
  // "sf-2": { score: [0, 0] },


  /* ========================================================
     TERCER LUGAR
     ======================================================== */

  // "third-1": { score: [0, 0] },


  /* ========================================================
     GRAN FINAL
     ======================================================== */

  // "final-1": { score: [0, 0] },

};


/* ==========================================================
   PARTICIPANTES

   ESTA PARTE NO NECESITA CAMBIARSE DURANTE EL TORNEO.

   Si ya tiene los nombres reales puede colocarlos aquí.
   ========================================================== */

const NOMBRES = Array.from(
  { length: 32 },
  (_, index) =>
    `Participante ${String(index + 1).padStart(2, "0")}`
);


/*
   

   NOMBRES[0] = "Juan Pérez";
   NOMBRES[1] = "Carlos López";
   NOMBRES[2] = "Fernando Hernández";

   
*/


/* ==========================================================
   CRUCES INICIALES

   Genera automáticamente:

   01 vs 02
   03 vs 04
   05 vs 06
   ...
   31 vs 32
   ========================================================== */

const R32 = Array.from(
  { length: 16 },
  (_, index) => [
    index * 2 + 1,
    index * 2 + 2
  ]
);


/* ==========================================================
   RONDAS
   ========================================================== */

const ROUNDS = [

  {
    key: "r32",
    title: "16avos de final",
    short: "16avos"
  },

  {
    key: "r16",
    title: "Octavos de final",
    short: "Octavos"
  },

  {
    key: "qf",
    title: "Cuartos de final",
    short: "Cuartos"
  },

  {
    key: "sf",
    title: "Semifinales",
    short: "Semifinales"
  },

  {
    key: "third",
    title: "Tercer lugar",
    short: "3er lugar"
  },

  {
    key: "final",
    title: "Gran Final",
    short: "Final"
  }

];


/* ==========================================================
   CONSTRUCCIÓN DEL TORNEO
   ========================================================== */

function buildMatches() {

  const matches = [];


  /* --------------------------------------------------------
     16AVOS
     -------------------------------------------------------- */

  R32.forEach(
    ([participantA, participantB], index) => {

      matches.push({

        id: `r32-${index + 1}`,

        round: "r32",

        n: index + 1,

        a: {
          p: participantA
        },

        b: {
          p: participantB
        }

      });

    }
  );


  /* --------------------------------------------------------
     FUNCIÓN PARA CREAR SIGUIENTES RONDAS
     -------------------------------------------------------- */

  function createNextRound(
    currentRound,
    previousRound,
    totalMatches
  ) {

    for (
      let index = 0;
      index < totalMatches;
      index++
    ) {

      matches.push({

        id: `${currentRound}-${index + 1}`,

        round: currentRound,

        n: index + 1,

        a: {

          from:
            `${previousRound}-${index * 2 + 1}`,

          take: "winner"

        },

        b: {

          from:
            `${previousRound}-${index * 2 + 2}`,

          take: "winner"

        }

      });

    }

  }


  /* --------------------------------------------------------
     OCTAVOS
     -------------------------------------------------------- */

  createNextRound(
    "r16",
    "r32",
    8
  );


  /* --------------------------------------------------------
     CUARTOS
     -------------------------------------------------------- */

  createNextRound(
    "qf",
    "r16",
    4
  );


  /* --------------------------------------------------------
     SEMIFINALES
     -------------------------------------------------------- */

  createNextRound(
    "sf",
    "qf",
    2
  );


  /* --------------------------------------------------------
     TERCER LUGAR

     Los perdedores de las semifinales avanzan aquí.
     -------------------------------------------------------- */

  matches.push({

    id: "third-1",

    round: "third",

    n: 1,

    a: {

      from: "sf-1",

      take: "loser"

    },

    b: {

      from: "sf-2",

      take: "loser"

    }

  });


  /* --------------------------------------------------------
     GRAN FINAL

     Los ganadores de semifinales avanzan aquí.
     -------------------------------------------------------- */

  matches.push({

    id: "final-1",

    round: "final",

    n: 1,

    a: {

      from: "sf-1",

      take: "winner"

    },

    b: {

      from: "sf-2",

      take: "winner"

    }

  });


  return matches;

}


/* ==========================================================
   UTILIDADES
   ========================================================== */

function roundTitle(key) {

  const round =
    ROUNDS.find(
      item =>
        item.key === key
    );

  return round
    ? round.short
    : "";

}


/* ----------------------------------------------------------
   Número con cero adelante.

   1  → 01
   2  → 02
   12 → 12
   ---------------------------------------------------------- */

function pad(number) {

  return String(number)
    .padStart(
      2,
      "0"
    );

}


/* ----------------------------------------------------------
   Evita que nombres puedan romper el HTML.
   ---------------------------------------------------------- */

function escapeHtml(value) {

  return String(value)
    .replace(
      /[&<>"']/g,
      character => (

        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[character]

      )
    );

}


/* ==========================================================
   OBTENER GANADOR
   ========================================================== */

function winnerOf(match) {

  const result =
    SCORES[match.id];


  /*
     El partido todavía
     no tiene marcador.
  */

  if (
    !result ||
    !Array.isArray(result.score)
  ) {

    return 0;

  }


  const [
    scoreA,
    scoreB
  ] = result.score;


  /*
     Marcador inválido.
  */

  if (
    typeof scoreA !== "number" ||
    typeof scoreB !== "number"
  ) {

    return 0;

  }


  /*
     Gana jugador izquierdo.
  */

  if (
    scoreA > scoreB
  ) {

    return 1;

  }


  /*
     Gana jugador derecho.
  */

  if (
    scoreB > scoreA
  ) {

    return 2;

  }


  /*
     EMPATE.

     Debe indicarse winner
     porque se definió por penales.

     winner: 1
     winner: 2
  */

  if (
    result.winner === 1 ||
    result.winner === 2
  ) {

    return result.winner;

  }


  /*
     Sigue sin ganador.
  */

  return 0;

}


/* ==========================================================
   RESOLVER PARTICIPANTES
   ========================================================== */

function resolveMatches(matches) {

  const byId =
    Object.fromEntries(

      matches.map(
        match => [

          match.id,

          match

        ]
      )

    );


  /* --------------------------------------------------------
     Resolver cada lado del partido.
     -------------------------------------------------------- */

  function resolveParticipant(slot) {


    /*
       Si ya sabemos exactamente
       quién es el participante.
    */

    if (slot.p) {

      return {

        p: slot.p

      };

    }


    /*
       Buscar partido anterior.
    */

    const previousMatch =
      byId[slot.from];


    if (!previousMatch) {

      return {

        label: "Por definir"

      };

    }


    /*
       Saber quién ganó
       el partido anterior.
    */

    const winner =
      winnerOf(previousMatch);


    /*
       Aún no se jugó.
    */

    if (!winner) {

      const participantType =
        slot.take === "winner"
          ? "Ganador"
          : "Perdedor";


      return {

        label:
          `${participantType} ${roundTitle(previousMatch.round)} ${pad(previousMatch.n)}`

      };

    }


    /*
       Determinar ganador
       y perdedor.
    */

    const winnerSide =
      winner === 1
        ? previousMatch.a
        : previousMatch.b;


    const loserSide =
      winner === 1
        ? previousMatch.b
        : previousMatch.a;


    /*
       Seleccionar el que corresponde.
    */

    const selectedSide =
      slot.take === "winner"
        ? winnerSide
        : loserSide;


    /*
       Ya tenemos participante real.
    */

    if (selectedSide.p) {

      return {

        p: selectedSide.p

      };

    }


    return {

      label: "Por definir"

    };

  }


  /*
     IMPORTANTE:

     Se ejecutan en orden:

     16avos
       ↓
     Octavos
       ↓
     Cuartos
       ↓
     Semifinales
       ↓
     Final / 3er lugar
  */

  matches.forEach(
    match => {


      match.a = {

        ...match.a,

        ...resolveParticipant(
          match.a
        )

      };


      match.b = {

        ...match.b,

        ...resolveParticipant(
          match.b
        )

      };


    }
  );

}


/* ==========================================================
   FOTOS
   ========================================================== */

function photoBox(side) {


  /* --------------------------------------------------------
     PARTICIPANTE AÚN NO DEFINIDO
     -------------------------------------------------------- */

  if (!side.p) {

    return `

      <div
        class="versus-photo versus-photo--tbd"
        aria-hidden="true"
      >

        <span>?</span>

        <small>
          POR DEFINIR
        </small>

      </div>

    `;

  }


  /* --------------------------------------------------------
     PARTICIPANTE DEFINIDO
     -------------------------------------------------------- */

  const id =
    pad(side.p);


  const name =
    escapeHtml(
      NOMBRES[
        side.p - 1
      ]
    );


  /*
     RUTAS GENERADAS:

     participante-01-01.jpg
     participante-01-02.jpg
     participante-01-03.jpg

     participante-02-01.jpg
     participante-02-02.jpg
     participante-02-03.jpg
  */

  const images = [
    1,
    2,
    3
  ]
    .map(
      pose => `

        <img
          class="participant-photo${pose === 1 ? " is-active" : ""}"
          src="assets/img/participantes/participante-${id}-0${pose}.jpg"
          alt="${name}, pose ${pose}"
          loading="lazy"
          decoding="async"
        >

      `
    )
    .join("");


  return `

    <div
      class="versus-photo"
      aria-label="Fotos de ${name}"
    >


      <div
        class="versus-photo__fallback"
        aria-hidden="true"
      >

        <span>
          ${id}
        </span>

      </div>


      ${images}


      <div
        class="versus-photo__dots"
        aria-hidden="true"
      >

        <i class="is-active"></i>

        <i></i>

        <i></i>

      </div>


    </div>

  `;

}


/* ==========================================================
   NOMBRE
   ========================================================== */

function nameHtml(
  side,
  extraClass = ""
) {


  /*
     Participante todavía
     no definido.
  */

  if (!side.p) {

    return `

      <span
        class="
          versus-name
          versus-name--tbd
          ${extraClass}
        "
      >

        ${escapeHtml(
          side.label ||
          "Por definir"
        )}

      </span>

    `;

  }


  /*
     Participante real.
  */

  return `

    <span
      class="
        versus-name
        ${extraClass}
      "
    >

      ${escapeHtml(
        NOMBRES[
          side.p - 1
        ]
      )}

    </span>

  `;

}


/* ==========================================================
   TARJETA DE PARTIDO
   ========================================================== */

function matchHtml(match) {

  const result =
    SCORES[match.id];


  const played =
    Boolean(
      result &&
      Array.isArray(
        result.score
      )
    );


  /*
     Si todavía no se juega:
     — - —
  */

  const [
    scoreA,
    scoreB
  ] =
    played
      ? result.score
      : ["—", "—"];


  const winner =
    winnerOf(match);


  /*
     Detectar empate
     resuelto por penales.
  */

  const decidedByPenalties =
    played &&
    scoreA === scoreB &&
    (
      result.winner === 1 ||
      result.winner === 2
    );


  return `

    <article
      class="
        versus-card
        ${played ? "is-played" : ""}
      "
      id="${match.id}"
    >


      <!-- CABECERA -->

      <header
        class="versus-card__head"
      >


        <span>

          ${roundTitle(
            match.round
          )}

          ·

          Partido ${pad(
            match.n
          )}

        </span>


        <span
          class="
            versus-card__status
            ${played ? "is-finished" : ""}
          "
        >

          ${
            played
              ? "FINALIZADO"
              : "PENDIENTE"
          }

        </span>


      </header>


      <!-- FOTOS -->

      <div
        class="versus-card__photos"
      >

        ${photoBox(
          match.a
        )}

        ${photoBox(
          match.b
        )}

      </div>


      <!-- RESULTADO -->

      <div
        class="versus-card__score"
      >


        ${nameHtml(
          match.a,

          winner === 1
            ? "is-winner"
            : ""
        )}


        <span
          class="versus-result"
        >

          ${
            played
              ? `(${scoreA} - ${scoreB})`
              : "(— - —)"
          }

        </span>


        ${nameHtml(
          match.b,

          winner === 2
            ? "is-winner"
            : ""
        )}


      </div>


      <!-- PENALES -->

      ${
        decidedByPenalties

          ? `

            <div
              class="versus-card__penalties"
            >

              DEFINIDO POR PENALES

            </div>

          `

          : ""
      }


    </article>

  `;

}


/* ==========================================================
   RENDERIZAR TORNEO
   ========================================================== */

function renderTournament() {


  /*
     Construimos todos
     los partidos.
  */

  const matches =
    buildMatches();


  /*
     Resolvemos automáticamente
     quién avanza.
  */

  resolveMatches(
    matches
  );


  /*
     Buscar contenedor.
  */

  const root =
    document.getElementById(
      "enfrentamientos"
    );


  if (!root) {

    console.warn(
      'No se encontró el elemento #enfrentamientos'
    );

    return;

  }


  /*
     Generar cada ronda.
  */

  root.innerHTML =
    ROUNDS
      .map(
        round => {


          const matchesInRound =
            matches.filter(
              match =>
                match.round ===
                round.key
            );


          return `

            <section
              class="
                versus-round
                versus-round--${round.key}
              "
              id="ronda-${round.key}"
            >


              <div
                class="versus-round__head"
              >


                <h2>

                  ${round.title}

                </h2>


                <span>

                  ${matchesInRound.length}

                  ${
                    matchesInRound.length === 1
                      ? "partido"
                      : "partidos"
                  }

                </span>


              </div>


              <div
                class="
                  versus-grid
                  versus-grid--${round.key}
                "
              >

                ${
                  matchesInRound
                    .map(
                      matchHtml
                    )
                    .join("")
                }

              </div>


            </section>

          `;

        }
      )
      .join("");


  /*
     Crear navegación
     entre rondas.
  */

  const tabs =
    document.getElementById(
      "versus-tabs"
    );


  if (tabs) {

    tabs.innerHTML =
      ROUNDS
        .map(
          round => `

            <a
              href="#ronda-${round.key}"
            >

              ${round.short}

            </a>

          `
        )
        .join("");

  }

}


/* ==========================================================
   ROTACIÓN DE FOTOS
   ========================================================== */

function startPhotoRotation() {


  const boxes = [

    ...document.querySelectorAll(
      ".versus-photo:not(.versus-photo--tbd)"
    )

  ];


  /*
     Respetar usuarios que
     desactivan animaciones.
  */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  boxes.forEach(
    (
      box,
      boxIndex
    ) => {


      const photos = [

        ...box.querySelectorAll(
          ".participant-photo"
        )

      ];


      const dots = [

        ...box.querySelectorAll(
          ".versus-photo__dots i"
        )

      ];


      /*
         Detectar imágenes
         que no existen.
      */

      photos.forEach(
        (
          image,
          imageIndex
        ) => {


          function markAsMissing() {

            image.classList.add(
              "is-missing"
            );


            image.classList.remove(
              "is-active"
            );


            if (
              dots[
                imageIndex
              ]
            ) {

              dots[
                imageIndex
              ].classList.add(
                "is-missing"
              );


              dots[
                imageIndex
              ].classList.remove(
                "is-active"
              );

            }

          }


          image.addEventListener(
            "error",
            markAsMissing
          );


          /*
             Si la imagen ya falló
             antes de agregar listener.
          */

          if (
            image.complete &&
            image.naturalWidth === 0
          ) {

            markAsMissing();

          }


        }
      );


      /*
         Si el usuario no quiere
         animaciones, dejamos
         la primera foto.
      */

      if (
        reducedMotion
      ) {

        return;

      }


      let currentIndex = 0;


      /* ------------------------------------------------------
         ROTAR FOTO
         ------------------------------------------------------ */

      function rotate() {


        const availableIndexes =
          photos
            .map(
              (
                photo,
                index
              ) => {

                if (
                  photo.classList.contains(
                    "is-missing"
                  )
                ) {

                  return null;

                }

                return index;

              }
            )
            .filter(
              index =>
                index !== null
            );


        /*
           Ninguna foto disponible.
        */

        if (
          availableIndexes.length === 0
        ) {

          return;

        }


        /*
           Solo hay una.
        */

        if (
          availableIndexes.length === 1
        ) {


          photos.forEach(
            photo =>
              photo.classList.remove(
                "is-active"
              )
          );


          dots.forEach(
            dot =>
              dot.classList.remove(
                "is-active"
              )
          );


          currentIndex =
            availableIndexes[0];


          photos[
            currentIndex
          ].classList.add(
            "is-active"
          );


          if (
            dots[
              currentIndex
            ]
          ) {

            dots[
              currentIndex
            ].classList.add(
              "is-active"
            );

          }


          return;

        }


        /*
           Buscar posición actual.
        */

        let currentPosition =
          availableIndexes.indexOf(
            currentIndex
          );


        /*
           Si la foto actual
           ya no existe.
        */

        if (
          currentPosition === -1
        ) {

          currentPosition = 0;

        }


        /*
           Siguiente foto.
        */

        currentPosition =
          (
            currentPosition + 1
          ) %
          availableIndexes.length;


        currentIndex =
          availableIndexes[
            currentPosition
          ];


        /*
           Desactivar anteriores.
        */

        photos.forEach(
          photo =>

            photo.classList.remove(
              "is-active"
            )

        );


        dots.forEach(
          dot =>

            dot.classList.remove(
              "is-active"
            )

        );


        /*
           Activar nueva.
        */

        photos[
          currentIndex
        ].classList.add(
          "is-active"
        );


        if (
          dots[
            currentIndex
          ]
        ) {

          dots[
            currentIndex
          ].classList.add(
            "is-active"
          );

        }


      }


      /*
         Diferente inicio para
         cada tarjeta.

         Evita que todas las fotos
         cambien al mismo tiempo.
      */

      const initialDelay =
        800 +
        (
          boxIndex % 8
        ) * 210;


      setTimeout(
        () => {


          rotate();


          setInterval(
            rotate,
            3000
          );


        },
        initialDelay
      );


    }
  );

}


/* ==========================================================
   INICIALIZACIÓN
   ========================================================== */

function initTournament() {


  /*
     Primero generamos
     todo el HTML.
  */

  renderTournament();


  /*
     Esperamos un frame.

     Así garantizamos que las fotos
     ya existan dentro del DOM.
  */

  requestAnimationFrame(
    () => {

      startPhotoRotation();

    }
  );

}


/*
   Funciona tanto si el JS
   se carga con defer como si
   se carga al final del HTML.
*/

if (
  typeof document !==
  "undefined"
) {


  if (
    document.readyState ===
    "loading"
  ) {


    document.addEventListener(
      "DOMContentLoaded",
      initTournament
    );


  } else {


    initTournament();


  }

}


/* ==========================================================
   SOPORTE PARA NODE / PRUEBAS
   ========================================================== */

if (
  typeof module !==
  "undefined"
) {


  module.exports = {

    SCORES,

    NOMBRES,

    ROUNDS,

    buildMatches,

    resolveMatches,

    winnerOf

  };


}