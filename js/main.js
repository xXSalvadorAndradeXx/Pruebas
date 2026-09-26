"use strict";

const TOURNAMENT_CONFIG = {
  tournamentName: "AECOMPU SuperLeague",
  game: "FC 27",
  season: "2026",
  organizer: "AECOMPU",
  registrationUrl: "#",
  registrationDeadline: null,
  tournamentDate: null,
  venue: "Universidad Gerardo Barrios · Centro Regional Usulután",
  platform: "PlayStation 5",
  modality: "PRESENCIAL",
  format: "2 VS 2",
  participants: 64,
  teams: 32,
  groups: 4,
  teamsPerGroup: 8,
  groupMatchesPerTeam: 2,
  qualifyingPerGroup: 4,
  stations: 3,
  kickoff: "9:30 A. M.",
  finish: "5:30 P. M.",
  firstHalfMinutes: 5,
  halftimeMinutes: 5,
  secondHalfMinutes: 5,
  rotationMinutes: 10,
  slotMinutes: 25,
  andradeDevUrl: "https://iamsalvadorandrade.netlify.app/",
  aecompuLogo: "assets/img/logos/aecompu.png"
};

const tournamentStages = [
  {
    name: "FASE DE GRUPOS",
    note: "32 equipos · 4 grupos de 8 · 2 partidos por equipo"
  },
  {
    name: "TOP 16",
    note: "Clasifican los 4 mejores de cada grupo"
  },
  {
    name: "OCTAVOS",
    note: "16 equipos · eliminación directa"
  },
  {
    name: "CUARTOS",
    note: "8 equipos · 4 partidos"
  },
  {
    name: "SEMIFINALES",
    note: "4 equipos · 2 partidos"
  },
  {
    name: "PODIO",
    note: "3.er lugar + gran final · top 3 definido en cancha"
  }
];


/* ======================================================
   GRUPOS

   AQUÍ EDITAS:

   name         = nombre del equipo
   points       = puntos
   goalsFor     = goles a favor
   goalsAgainst = goles en contra

   La posición se calcula automáticamente.

   Orden:
   1. Puntos
   2. Diferencia de goles
   3. Goles a favor
   4. Menos goles en contra
   ====================================================== */

const groups = [

  /* GRUPO A */

  {
    name: "GRUPO A",

    teams: [
      {
        seed: "A1",
        name: "EQUIPO A1",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A2",
        name: "EQUIPO A2",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A3",
        name: "EQUIPO A3",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A4",
        name: "EQUIPO A4",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A5",
        name: "EQUIPO A5",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A6",
        name: "EQUIPO A6",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A7",
        name: "EQUIPO A7",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "A8",
        name: "EQUIPO A8",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      }
    ]
  },


  /* GRUPO B */

  {
    name: "GRUPO B",

    teams: [
      {
        seed: "B1",
        name: "EQUIPO B1",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B2",
        name: "EQUIPO B2",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B3",
        name: "EQUIPO B3",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B4",
        name: "EQUIPO B4",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B5",
        name: "EQUIPO B5",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B6",
        name: "EQUIPO B6",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B7",
        name: "EQUIPO B7",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "B8",
        name: "EQUIPO B8",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      }
    ]
  },


  /* GRUPO C */

  {
    name: "GRUPO C",

    teams: [
      {
        seed: "C1",
        name: "EQUIPO C1",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C2",
        name: "EQUIPO C2",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C3",
        name: "EQUIPO C3",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C4",
        name: "EQUIPO C4",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C5",
        name: "EQUIPO C5",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C6",
        name: "EQUIPO C6",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C7",
        name: "EQUIPO C7",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "C8",
        name: "EQUIPO C8",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      }
    ]
  },


  /* GRUPO D */

  {
    name: "GRUPO D",

    teams: [
      {
        seed: "D1",
        name: "EQUIPO D1",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D2",
        name: "EQUIPO D2",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D3",
        name: "EQUIPO D3",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D4",
        name: "EQUIPO D4",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D5",
        name: "EQUIPO D5",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D6",
        name: "EQUIPO D6",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D7",
        name: "EQUIPO D7",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      },

      {
        seed: "D8",
        name: "EQUIPO D8",
        points: 0,
        goalsFor: 0,
        goalsAgainst: 0
      }
    ]
  }
];


/* ======================================================
   MATCH CENTER / ESTACIONES
   ====================================================== */

const matches = [
  {
    stage: "ESTACIÓN 1",
    status: "LISTA",
    playerA: "EQUIPO POR DEFINIR",
    scoreA: null,
    playerB: "EQUIPO POR DEFINIR",
    scoreB: null,
    footer: "Bloque de 25 min"
  },

  {
    stage: "ESTACIÓN 2",
    status: "LISTA",
    playerA: "EQUIPO POR DEFINIR",
    scoreA: null,
    playerB: "EQUIPO POR DEFINIR",
    scoreB: null,
    footer: "Bloque de 25 min"
  },

  {
    stage: "ESTACIÓN 3",
    status: "LISTA",
    playerA: "EQUIPO POR DEFINIR",
    scoreA: null,
    playerB: "EQUIPO POR DEFINIR",
    scoreB: null,
    footer: "Bloque de 25 min"
  }
];


/* ======================================================
   BRACKET
   ====================================================== */

const bracket = [
  {
    title: "OCTAVOS",

    matches: [
      { teams: ["A1", "B4"] },
      { teams: ["A2", "B3"] },
      { teams: ["B1", "A4"] },
      { teams: ["B2", "A3"] },

      { teams: ["C1", "D4"] },
      { teams: ["C2", "D3"] },
      { teams: ["D1", "C4"] },
      { teams: ["D2", "C3"] }
    ]
  },

  {
    title: "CUARTOS",

    matches: [
      {
        teams: [
          "GANADOR O1",
          "GANADOR O2"
        ]
      },

      {
        teams: [
          "GANADOR O3",
          "GANADOR O4"
        ]
      },

      {
        teams: [
          "GANADOR O5",
          "GANADOR O6"
        ]
      },

      {
        teams: [
          "GANADOR O7",
          "GANADOR O8"
        ]
      }
    ]
  },

  {
    title: "SEMIFINALES",

    matches: [
      {
        teams: [
          "GANADOR C1",
          "GANADOR C2"
        ]
      },

      {
        teams: [
          "GANADOR C3",
          "GANADOR C4"
        ]
      }
    ]
  },

  {
    title: "PODIO",

    matches: [
      {
        label: "3.er LUGAR",

        teams: [
          "PERDEDOR S1",
          "PERDEDOR S2"
        ]
      },

      {
        label: "FINAL",

        teams: [
          "GANADOR S1",
          "GANADOR S2"
        ]
      }
    ]
  },

  {
    title: "CAMPEÓN",
    champion: "POR DEFINIR"
  }
];


/* ======================================================
   HORARIO
   ====================================================== */

const schedule = [
  {
    name: "CHECK-IN DE EQUIPOS",
    date: "DÍA DEL EVENTO",
    time: "9:00 – 9:25 A. M.",
    location: TOURNAMENT_CONFIG.venue,
    status: "PREVIO",
    note: "Acreditación, confirmación de parejas y llamado inicial."
  },

  {
    name: "FASE DE GRUPOS",
    date: "DÍA DEL EVENTO",
    time: "9:30 A. M. – 2:05 P. M.",
    location: "3 estaciones · 32 partidos · 11 tandas",
    status: "KICKOFF",
    note: "Cada equipo juega 2 partidos. No hay pausa general."
  },

  {
    name: "OCTAVOS DE FINAL",
    date: "DÍA DEL EVENTO",
    time: "2:05 – 3:20 P. M.",
    location: "3 estaciones · 8 partidos · 3 tandas",
    status: "TOP 16",
    note: "Comienza la eliminación directa."
  },

  {
    name: "CUARTOS DE FINAL",
    date: "DÍA DEL EVENTO",
    time: "3:20 – 4:10 P. M.",
    location: "3 estaciones · 4 partidos · 2 tandas",
    status: "TOP 8",
    note: "Los cuatro ganadores avanzan a semifinales."
  },

  {
    name: "SEMIFINALES",
    date: "DÍA DEL EVENTO",
    time: "4:10 – 4:35 P. M.",
    location: "2 partidos simultáneos",
    status: "TOP 4",
    note: "Ganadores a la final; perdedores al partido por 3.er lugar."
  },

  {
    name: "PARTIDO POR 3.er LUGAR",
    date: "DÍA DEL EVENTO",
    time: "4:35 – 5:00 P. M.",
    location: "Estación principal",
    status: "PODIO",
    note: "Define oficialmente el tercer puesto."
  },

  {
    name: "GRAN FINAL",
    date: "DÍA DEL EVENTO",
    time: "5:00 – 5:25 P. M.",
    location: "Estación principal",
    status: "FINAL",
    note: "Partido por el campeonato AECOMPU SuperLeague."
  },

  {
    name: "PREMIACIÓN",
    date: "DÍA DEL EVENTO",
    time: "5:25 – 5:30 P. M.",
    location: TOURNAMENT_CONFIG.venue,
    status: "CIERRE",
    note: "Reconocimiento a 1.er, 2.º y 3.er lugar."
  }
];


/* ======================================================
   REGLAS DESTACADAS
   ====================================================== */

const rules = [
  {
    title: "Formato 2 VS 2",
    preview:
      "64 participantes organizados en 32 equipos de dos jugadores."
  },

  {
    title: "Fase de grupos",
    preview:
      "4 grupos de 8; cada equipo juega 2 partidos y clasifican 4."
  },

  {
    title: "Partidos",
    preview:
      "5 min por tiempo, 5 min de descanso y bloques operativos de 25 min."
  },

  {
    title: "Desempates",
    preview:
      "La tabla se ordena por puntos, diferencia de gol y goles a favor."
  },

  {
    title: "Fair Play",
    preview:
      "Respeto obligatorio a rivales, organización, público y equipos."
  },

  {
    title: "Sanciones",
    preview:
      "Advertencia, pérdida administrativa o descalificación según gravedad."
  }
];


/* ======================================================
   REGLAMENTO COMPLETO
   ====================================================== */

const modalRules = [
  {
    title: "1. Objeto y alcance",

    paragraphs: [
      "La AECOMPU SuperLeague FC 27 es una competencia presencial de eSports organizada por AECOMPU. Este reglamento aplica a todos los participantes desde el registro hasta la premiación.",

      "La participación implica conocer y aceptar estas disposiciones, así como las decisiones operativas de la organización cuando se presenten situaciones no previstas."
    ]
  },

  {
    title: "2. Participantes y equipos",

    bullets: [
      "Participan 64 personas distribuidas en 32 equipos.",

      "Cada equipo está integrado por exactamente 2 jugadores registrados.",

      "Un jugador solo puede pertenecer a un equipo durante toda la competencia.",

      "Los integrantes compiten juntos en modalidad 2 vs. 2."
    ]
  },

  {
    title: "3. Registro de equipos",

    bullets: [
      "Cada pareja deberá registrar nombre del equipo y datos de sus dos integrantes.",

      "El cupo máximo es de 32 equipos.",

      "La fecha límite y el enlace oficial de inscripción serán comunicados por AECOMPU.",

      "Después del cierre de inscripciones no se aceptarán cambios de jugadores salvo autorización excepcional de la organización."
    ]
  },

  {
    title: "4. Check-in y presentación",

    bullets: [
      "El check-in recomendado se realizará de 9:00 a 9:25 a. m.",

      "El kickoff oficial es a las 9:30 a. m.; los equipos deben estar listos antes de esa hora.",

      "Ambos integrantes deben permanecer atentos a los llamados y al orden de estaciones.",

      "La organización podrá llamar al siguiente encuentro mientras el partido anterior está finalizando para evitar retrasos."
    ]
  },

  {
    title: "5. Estructura general",

    bullets: [
      "Fase de grupos: 32 equipos.",

      "Clasificación: 16 equipos.",

      "Octavos: 16 → 8.",

      "Cuartos: 8 → 4.",

      "Semifinales: 4 → 2 finalistas.",

      "Los perdedores de semifinales disputan el 3.er lugar.",

      "Los ganadores de semifinales disputan la gran final."
    ]
  },

  {
    title: "6. Fase de grupos",

    bullets: [
      "Habrá 4 grupos: A, B, C y D.",

      "Cada grupo estará compuesto por 8 equipos.",

      "Cada equipo disputará 2 partidos durante esta fase.",

      "Los rivales se determinan mediante el fixture posterior al sorteo.",

      "La fase de grupos comprende 32 partidos en total."
    ]
  },

  {
    title: "7. Sistema de puntuación",

    bullets: [
      "Victoria: 3 puntos.",

      "Empate: 1 punto por equipo.",

      "Derrota: 0 puntos.",

      "Los resultados son registrados por la mesa de control al terminar cada encuentro."
    ]
  },

  {
    title: "8. Criterios de desempate",

    paragraphs: [
      "Si dos o más equipos terminan igualados en puntos, se aplicarán los criterios en este orden:"
    ],

    bullets: [
      "Mayor diferencia de goles.",

      "Mayor cantidad de goles a favor.",

      "Menor cantidad de goles recibidos.",

      "Resultado directo entre los equipos empatados, cuando se hayan enfrentado.",

      "Si el empate continúa y afecta una posición de clasificación, la organización podrá ordenar un desempate breve o tanda de penales para definir la posición."
    ]
  },

  {
    title: "9. Clasificación a octavos",

    bullets: [
      "Clasifican los equipos ubicados del 1.º al 4.º lugar de cada grupo.",

      "Cada grupo entrega 4 clasificados.",

      "Los puestos 5.º al 8.º quedan eliminados.",

      "En total avanzan 16 equipos a la fase de eliminación directa."
    ]
  },

  {
    title: "10. Cruces de octavos",

    bullets: [
      "A1 vs B4.",

      "A2 vs B3.",

      "B1 vs A4.",

      "B2 vs A3.",

      "C1 vs D4.",

      "C2 vs D3.",

      "D1 vs C4.",

      "D2 vs C3."
    ]
  },

  {
    title: "11. Eliminación directa",

    paragraphs: [
      "Desde octavos de final, cada enfrentamiento debe producir un ganador. El equipo derrotado queda eliminado, salvo los perdedores de semifinales, quienes disputan el partido por el 3.er lugar."
    ]
  },

  {
    title: "12. Empates en eliminación",

    bullets: [
      "Un partido de eliminación directa no puede finalizar empatado.",

      "Si el marcador termina igualado, se utilizará el mecanismo de desempate definido por la organización para FC 27, priorizando una tanda de penales para mantener el horario.",

      "La decisión deberá aplicarse de la misma manera a todos los partidos equivalentes."
    ]
  },

  {
    title: "13. Partido por el 3.er lugar",

    bullets: [
      "Lo disputan los dos equipos perdedores de semifinales.",

      "El ganador obtiene oficialmente el 3.er lugar del torneo.",

      "El partido se programa antes de la gran final."
    ]
  },

  {
    title: "14. Configuración temporal del partido",

    bullets: [
      "Primer tiempo: 5 minutos.",

      "Descanso / entretiempo: 5 minutos.",

      "Segundo tiempo: 5 minutos.",

      "Rotación y preparación entre partidos: hasta 10 minutos.",

      "Cada espacio del cronograma se administra como un bloque de 25 minutos."
    ]
  },

  {
    title: "15. Estaciones de juego",

    bullets: [
      "Se utilizarán 3 estaciones de juego.",

      "Pueden disputarse hasta 3 encuentros simultáneamente.",

      "La organización asigna la estación de cada partido.",

      "Los equipos no pueden exigir una estación específica."
    ]
  },

  {
    title: "16. Plataforma y controles",

    bullets: [
      `Plataforma prevista: ${TOURNAMENT_CONFIG.platform}.`,

      "Antes de iniciar, cada equipo debe verificar botones, joysticks, conexión y configuración del control.",

      "Cualquier falla debe reportarse antes del saque inicial cuando sea posible.",

      "Los periféricos admitidos y la política sobre controles propios serán comunicados por AECOMPU antes del evento."
    ]
  },

  {
    title: "17. Selección de clubes o selecciones",

    paragraphs: [
      "La organización publicará antes del inicio cualquier restricción aplicable a clubes, selecciones, equipos especiales o plantillas. Una vez anunciado el criterio, será uniforme para todos los participantes y no podrá modificarse a conveniencia de un equipo."
    ]
  },

  {
    title: "18. Inicio de cada encuentro",

    bullets: [
      "Los equipos se presentan cuando sean llamados.",

      "Se confirma la estación asignada y el correcto funcionamiento de controles.",

      "Ambas parejas verifican la configuración del partido.",

      "El encuentro inicia cuando la mesa de control o encargado de estación lo autorice."
    ]
  },

  {
    title: "19. Pausas",

    bullets: [
      "Solo se permiten pausas justificadas por problemas técnicos, de control, conexión, salud o indicación de la organización.",

      "No se permite pausar para cortar deliberadamente una jugada, perder tiempo o romper el ritmo del rival.",

      "El abuso de pausas puede ser sancionado."
    ]
  },

  {
    title: "20. Desconexiones y fallas técnicas",

    bullets: [
      "Ante una desconexión, los jugadores deben detener cualquier manipulación adicional y avisar al encargado.",

      "La organización registrará marcador, minuto aproximado y causa aparente de la interrupción.",

      "Según el caso, podrá ordenar reinicio, continuación controlada o resolución administrativa.",

      "Una desconexión provocada deliberadamente puede resultar en pérdida del partido o descalificación."
    ]
  },

  {
    title: "21. Puntualidad y llamados",

    bullets: [
      "Cada equipo debe permanecer localizable durante toda la fase en la que siga con vida.",

      "Se realizarán llamados para presentarse en la estación asignada.",

      "Un retraso que comprometa el cronograma puede generar advertencia o W.O.",

      "La organización priorizará mantener los bloques de 25 minutos."
    ]
  },

  {
    title: "22. Walkover (W.O.)",

    bullets: [
      "Si un equipo no se presenta después de los llamados y la tolerancia indicada por la organización, puede perder por W.O.",

      "Como referencia administrativa, el W.O. podrá registrarse 3-0 para efectos de tabla.",

      "La ausencia reiterada o abandono deliberado puede implicar exclusión del torneo."
    ]
  },

  {
    title: "23. Conducta",

    bullets: [
      "Se exige respeto hacia rivales, compañeros, organizadores y espectadores.",

      "Quedan prohibidos insultos graves, amenazas, agresiones, hostigamiento y daño intencional a equipos o instalaciones.",

      "La celebración competitiva es válida mientras no se convierta en acoso o provocación reiterada."
    ]
  },

  {
    title: "24. Juego limpio",

    bullets: [
      "No se permite explotar deliberadamente errores del juego para obtener una ventaja antideportiva.",

      "Está prohibido manipular conexión, controles, consola o configuración para perjudicar al rival.",

      "No se permiten dispositivos, software o métodos externos no autorizados."
    ]
  },

  {
    title: "25. Espectadores",

    bullets: [
      "Los espectadores deben permanecer fuera del espacio operativo de las estaciones.",

      "No pueden tocar controles, consolas o accesorios durante un encuentro.",

      "No deben interrumpir ni dar indicaciones de manera que afecten el desarrollo del partido.",

      "La organización puede solicitar el retiro de quien altere la competencia."
    ]
  },

  {
    title: "26. Resultados y evidencia",

    bullets: [
      "Al terminar un partido, el resultado debe ser reportado y validado por la mesa de control.",

      "La organización puede utilizar fotografías, videos, capturas, registros del juego y testimonios de encargados para resolver incidencias.",

      "Los equipos deben revisar el resultado antes de abandonar la estación."
    ]
  },

  {
    title: "27. Protestas",

    bullets: [
      "Cualquier protesta debe presentarse inmediatamente después del encuentro afectado.",

      "Debe indicarse el partido, equipos involucrados, situación y evidencia disponible.",

      "Las reclamaciones tardías pueden rechazarse si ya afectan rondas posteriores, salvo situaciones graves."
    ]
  },

  {
    title: "28. Sanciones",

    bullets: [
      "Advertencia verbal o formal para faltas leves.",

      "Penalización administrativa cuando la conducta afecte el desarrollo del evento.",

      "Pérdida del partido cuando una infracción impacte directamente la competencia.",

      "Descalificación por agresión, amenazas, trampa, daño intencional, manipulación técnica o conducta gravemente antideportiva."
    ]
  },

  {
    title: "29. Premios y posiciones",

    bullets: [
      "1.er lugar: ganador de la gran final.",

      "2.º lugar: equipo derrotado en la gran final.",

      "3.er lugar: ganador del partido entre los perdedores de semifinales.",

      "Los premios específicos se anunciarán por AECOMPU cuando estén confirmados."
    ]
  },

  {
    title: "30. Autoridad y aceptación",

    paragraphs: [
      "AECOMPU y el equipo organizador tienen autoridad para aplicar este reglamento, ordenar estaciones, registrar resultados y resolver situaciones excepcionales procurando consistencia y equidad.",

      "Al inscribirse y participar, cada equipo acepta el formato, horarios, reglas de conducta y sanciones aquí descritas."
    ]
  }
];


/* ======================================================
   FAQ
   ====================================================== */

const faq = [
  {
    question: "¿Cuántas personas participan?",

    answer:
      "El torneo está diseñado para 64 participantes, organizados en 32 equipos de dos jugadores."
  },

  {
    question: "¿Es 1 vs. 1 o 2 vs. 2?",

    answer:
      "La modalidad oficial de esta edición es 2 vs. 2. Cada pareja compite como un solo equipo durante todo el torneo."
  },

  {
    question: "¿Cómo funciona la fase de grupos?",

    answer:
      "Hay 4 grupos de 8 equipos. Cada equipo juega 2 partidos. Se otorgan 3 puntos por victoria, 1 por empate y 0 por derrota; clasifican los 4 mejores de cada grupo."
  },

  {
    question: "¿Cuántos equipos pasan a eliminación directa?",

    answer:
      "Avanzan 16 equipos: cuatro por cada grupo. Después se juegan octavos, cuartos, semifinales, tercer lugar y final."
  },

  {
    question: "¿A qué hora comienza y termina?",

    answer:
      "El kickoff oficial está previsto para las 9:30 a. m. y el cierre con premiación alrededor de las 5:30 p. m. El check-in se realiza antes del inicio."
  },

  {
    question: "¿Habrá descanso general para almorzar?",

    answer:
      "El cronograma de 8 horas no contempla una pausa general. Cada equipo tendrá descansos naturales mientras se disputan otros encuentros y deberá estar atento a sus llamados."
  },

  {
    question: "¿Cuánto dura cada partido?",

    answer:
      "Se configuran 5 minutos por tiempo y 5 minutos de entretiempo. Operativamente se reserva un bloque total de 25 minutos por encuentro, incluyendo hasta 10 minutos para rotación y preparación."
  },

  {
    question: "¿Cuántas estaciones habrá?",

    answer:
      "Habrá 3 estaciones, por lo que pueden jugarse hasta 3 partidos simultáneamente."
  },

  {
    question: "¿Cómo se define el tercer lugar?",

    answer:
      "Los dos equipos que pierdan las semifinales juegan un partido específico por el 3.er lugar antes de la gran final."
  },

  {
    question: "¿Dónde se realizará?",

    answer:
      "La sede indicada es la Universidad Gerardo Barrios, Centro Regional Usulután. El espacio exacto dentro del campus será comunicado por AECOMPU."
  },

  {
    question: "¿Debo llevar mi propio control?",

    answer:
      "AECOMPU comunicará antes del evento la política definitiva sobre controles propios y periféricos admitidos."
  },

  {
    question: "¿Dónde consulto todas las reglas?",

    answer:
      "En la sección REGLAS puedes abrir el reglamento completo con formato, puntuación, desempates, horarios, conducta, sanciones y procedimientos técnicos."
  }
];


/* ======================================================
   INICIO
   ====================================================== */

document.addEventListener(
  "DOMContentLoaded",
  init
);


function init() {

  renderSeason();

  renderQuickInfo();

  renderRoadmap();

  renderGroups();

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


/* ======================================================
   TEMPORADA
   ====================================================== */

function renderSeason() {

  document
    .querySelectorAll(
      "[data-season]"
    )
    .forEach(
      (node) => {

        node.textContent =
          TOURNAMENT_CONFIG.season;

      }
    );
}


/* ======================================================
   INFORMACIÓN RÁPIDA
   ====================================================== */

function renderQuickInfo() {

  const items = [
    [
      "FORMATO",
      TOURNAMENT_CONFIG.format
    ],

    [
      "EQUIPOS",
      String(
        TOURNAMENT_CONFIG.teams
      )
    ],

    [
      "ESTACIONES",
      String(
        TOURNAMENT_CONFIG.stations
      )
    ],

    [
      "KICKOFF",
      TOURNAMENT_CONFIG.kickoff
    ],

    [
      "SEDE",
      "UGB USULUTÁN"
    ]
  ];


  const container =
    document.getElementById(
      "quickInfo"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    items
      .map(
        ([label, value]) => `
          <article class="quick-item">

            <span>
              ${escapeHTML(label)}
            </span>

            <strong>
              ${escapeHTML(value)}
            </strong>

          </article>
        `
      )
      .join("");
}


/* ======================================================
   ROADMAP
   ====================================================== */

function renderRoadmap() {

  const container =
    document.getElementById(
      "roadmap"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    tournamentStages
      .map(
        (stage, index) => `
          <article
            class="road-step reveal fade-up"
            style="
              transition-delay:
              ${Math.min(index * 70, 350)}ms
            "
          >

            <div class="road-step__node">

              <span>
                ${
                  String(index + 1)
                    .padStart(
                      2,
                      "0"
                    )
                }
              </span>

            </div>


            <div>

              <h3>
                ${escapeHTML(stage.name)}
              </h3>

              <p>
                ${escapeHTML(stage.note)}
              </p>

            </div>

          </article>
        `
      )
      .join("");
}


/* ======================================================
   TABLAS DE GRUPOS
   ====================================================== */

function renderGroups() {

  const container =
    document.getElementById(
      "groupsGrid"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    groups
      .map(
        (group, groupIndex) => {

          const sortedTeams =
            getSortedGroupTeams(
              group
            );


          return `
            <article
              class="
                group-card
                reveal
                fade-up
              "
              style="
                transition-delay:
                ${groupIndex * 70}ms
              "
            >

              <div
                class="
                  group-card__header
                "
              >

                <div>

                  <span>
                    GROUP ${
                      String(
                        groupIndex + 1
                      )
                        .padStart(
                          2,
                          "0"
                        )
                    }
                  </span>

                  <h3>
                    ${
                      escapeHTML(
                        group.name
                      )
                    }
                  </h3>

                </div>


                <strong>
                  TOP 4 AVANZA
                </strong>

              </div>


              <div
                class="
                  group-table__head
                "
                aria-hidden="true"
              >

                <span>
                  #
                </span>

                <span>
                  EQUIPO
                </span>

                <span>
                  GF
                </span>

                <span>
                  GC
                </span>

                <span>
                  PTS
                </span>

              </div>


              <ol
                class="
                  group-table
                "
              >

                ${
                  sortedTeams
                    .map(
                      (
                        team,
                        index
                      ) => `
                        <li
                          class="${
                            index <
                            TOURNAMENT_CONFIG
                              .qualifyingPerGroup
                              ? "is-qualifying"
                              : ""
                          }"
                        >

                          <span
                            class="
                              group-table__position
                            "
                          >
                            ${index + 1}
                          </span>


                          <div
                            class="
                              group-table__team
                            "
                          >

                            <small>
                              ${
                                escapeHTML(
                                  team.seed
                                )
                              }
                            </small>

                            <strong
                              title="${
                                escapeHTML(
                                  team.name
                                )
                              }"
                            >
                              ${
                                escapeHTML(
                                  team.name
                                )
                              }
                            </strong>

                          </div>


                          <span
                            class="
                              group-table__stat
                            "
                          >
                            ${
                              Number(
                                team.goalsFor
                              ) || 0
                            }
                          </span>


                          <span
                            class="
                              group-table__stat
                            "
                          >
                            ${
                              Number(
                                team.goalsAgainst
                              ) || 0
                            }
                          </span>


                          <strong
                            class="
                              group-table__points
                            "
                          >
                            ${
                              Number(
                                team.points
                              ) || 0
                            }
                          </strong>

                        </li>
                      `
                    )
                    .join("")
                }

              </ol>


              <div
                class="
                  group-card__legend
                "
              >

                <span>

                  <i></i>

                  TOP 4 CLASIFICA

                </span>

                <small>
                  GF · GC · PTS
                </small>

              </div>

            </article>
          `;
        }
      )
      .join("");
}


/* ======================================================
   OBTENER GRUPO ORDENADO
   ====================================================== */

function getSortedGroupTeams(
  group
) {

  return [
    ...group.teams
  ]
    .sort(
      compareTeams
    );
}


/* ======================================================
   ORDEN DE CLASIFICACIÓN
   ====================================================== */

function compareTeams(
  a,
  b
) {

  const pointsA =
    Number(
      a.points
    ) || 0;


  const pointsB =
    Number(
      b.points
    ) || 0;


  /* 1. PUNTOS */

  if (
    pointsB !==
    pointsA
  ) {

    return (
      pointsB -
      pointsA
    );
  }


  /* 2. DIFERENCIA DE GOLES */

  const differenceA =
    (
      Number(
        a.goalsFor
      ) || 0
    ) -
    (
      Number(
        a.goalsAgainst
      ) || 0
    );


  const differenceB =
    (
      Number(
        b.goalsFor
      ) || 0
    ) -
    (
      Number(
        b.goalsAgainst
      ) || 0
    );


  if (
    differenceB !==
    differenceA
  ) {

    return (
      differenceB -
      differenceA
    );
  }


  /* 3. GOLES A FAVOR */

  const goalsForA =
    Number(
      a.goalsFor
    ) || 0;


  const goalsForB =
    Number(
      b.goalsFor
    ) || 0;


  if (
    goalsForB !==
    goalsForA
  ) {

    return (
      goalsForB -
      goalsForA
    );
  }


  /* 4. MENOS GOLES EN CONTRA */

  const goalsAgainstA =
    Number(
      a.goalsAgainst
    ) || 0;


  const goalsAgainstB =
    Number(
      b.goalsAgainst
    ) || 0;


  if (
    goalsAgainstA !==
    goalsAgainstB
  ) {

    return (
      goalsAgainstA -
      goalsAgainstB
    );
  }


  return String(
    a.seed
  )
    .localeCompare(
      String(
        b.seed
      ),
      "es",
      {
        numeric: true
      }
    );
}


/* ======================================================
   CONVERTIR A1, A2... EN NOMBRE REAL
   ====================================================== */

function resolveQualifiedSeed(
  label
) {

  const match =
    /^([A-D])([1-4])$/
      .exec(
        String(label)
          .trim()
          .toUpperCase()
      );


  if (!match) {

    return label;

  }


  const [
    ,
    groupLetter,
    positionText
  ] = match;


  const position =
    Number(
      positionText
    ) - 1;


  const group =
    groups.find(
      (item) =>
        item.name.endsWith(
          groupLetter
        )
    );


  if (!group) {

    return label;

  }


  const team =
    getSortedGroupTeams(
      group
    )[position];


  if (!team) {

    return label;

  }


  return `${
    groupLetter
  }${
    position + 1
  } · ${
    team.name
  }`;
}


/* ======================================================
   MATCH CENTER
   ====================================================== */

function renderMatches() {

  const container =
    document.getElementById(
      "matchGrid"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    matches
      .map(
        (
          match,
          index
        ) => `

          <article
            class="
              match-card
              reveal
              fade-up
            "
            style="
              transition-delay:
              ${
                Math.min(
                  index * 80,
                  240
                )
              }ms
            "
          >

            <div
              class="
                match-card__top
              "
            >

              <span
                class="
                  match-card__stage
                "
              >
                ${
                  escapeHTML(
                    match.stage
                  )
                }
              </span>


              <span
                class="
                  status
                  ${
                    getStatusClass(
                      match.status
                    )
                  }
                "
              >
                ${
                  escapeHTML(
                    match.status
                  )
                }
              </span>

            </div>


            <div
              class="
                match-card__body
              "
            >

              <div
                class="
                  match-player
                "
              >

                <strong>
                  ${
                    escapeHTML(
                      match.playerA
                    )
                  }
                </strong>

                <span>
                  —
                </span>

              </div>


              <div
                class="
                  match-vs
                "
              >
                VS
              </div>


              <div
                class="
                  match-player
                "
              >

                <strong>
                  ${
                    escapeHTML(
                      match.playerB
                    )
                  }
                </strong>

                <span>
                  —
                </span>

              </div>


              <div
                class="
                  match-card__footer
                "
              >
                ${
                  escapeHTML(
                    match.footer
                  )
                }
              </div>

            </div>

          </article>
        `
      )
      .join("");
}


/* ======================================================
   BRACKET
   ====================================================== */

function renderBracket() {

  const container =
    document.getElementById(
      "bracket"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    bracket
      .map(
        (
          column,
          columnIndex
        ) => {


          if (
            column.champion
          ) {

            return `
              <section
                class="
                  bracket-column
                  bracket-column--champion
                "
              >

                <div
                  class="
                    bracket-column__title
                  "
                >
                  ${
                    escapeHTML(
                      column.title
                    )
                  }
                </div>


                <div
                  class="
                    bracket-champion
                  "
                >

                  <div>

                    <span>
                      CHAMPION
                    </span>

                    <strong>
                      ${
                        escapeHTML(
                          column.champion
                        )
                      }
                    </strong>

                  </div>

                </div>

              </section>
            `;
          }


          const gapClass =

            columnIndex === 1
              ? "bracket-gap-sm"

              : columnIndex === 2
                ? "bracket-gap-lg"

                : columnIndex === 3
                  ? "bracket-gap-xl"

                  : "";


          return `
            <section
              class="
                bracket-column
                ${gapClass}
              "
            >

              <div
                class="
                  bracket-column__title
                "
              >
                ${
                  escapeHTML(
                    column.title
                  )
                }
              </div>


              ${
                column.matches
                  .map(
                    (match) => `

                      <div
                        class="
                          bracket-match
                          ${
                            match.label ===
                            "FINAL"
                              ? "bracket-match--final"
                              : ""
                          }
                        "
                      >

                        ${
                          match.label
                            ? `
                              <div
                                class="
                                  bracket-match__label
                                "
                              >
                                ${
                                  escapeHTML(
                                    match.label
                                  )
                                }
                              </div>
                            `
                            : ""
                        }


                        <div
                          class="
                            bracket-player
                          "
                        >

                          <span>
                            ${
                              escapeHTML(
                                resolveQualifiedSeed(
                                  match.teams[0]
                                )
                              )
                            }
                          </span>

                          <strong>
                            —
                          </strong>

                        </div>


                        <div
                          class="
                            bracket-player
                          "
                        >

                          <span>
                            ${
                              escapeHTML(
                                resolveQualifiedSeed(
                                  match.teams[1]
                                )
                              )
                            }
                          </span>

                          <strong>
                            —
                          </strong>

                        </div>

                      </div>
                    `
                  )
                  .join("")
              }

            </section>
          `;
        }
      )
      .join("");
}


/* ======================================================
   REGLAS
   ====================================================== */

function renderRules() {

  const preview =
    document.getElementById(
      "rulesPreview"
    );


  const modalContent =
    document.getElementById(
      "rulesModalContent"
    );


  if (preview) {

    preview.innerHTML =
      rules
        .map(
          (
            rule,
            index
          ) => `

            <article
              class="
                rule-card
              "
            >

              <span>
                ${
                  String(
                    index + 1
                  )
                    .padStart(
                      2,
                      "0"
                    )
                }
              </span>


              <h3>
                ${
                  escapeHTML(
                    rule.title
                      .toUpperCase()
                  )
                }
              </h3>


              <p>
                ${
                  escapeHTML(
                    rule.preview
                  )
                }
              </p>

            </article>
          `
        )
        .join("");
  }


  if (modalContent) {

    modalContent.innerHTML = `

      <div
        class="
          rules-summary
        "
      >

        <strong>
          64 JUGADORES ·
          32 EQUIPOS ·
          2 VS 2 ·
          4 GRUPOS ·
          TOP 16 ·
          3 ESTACIONES
        </strong>

        <span>
          KICKOFF 9:30 A. M.
          ·
          CIERRE ESTIMADO
          5:30 P. M.
        </span>

      </div>


      ${
        modalRules
          .map(
            (rule) => `

              <section
                class="
                  modal-rule
                "
              >

                <h3>
                  ${
                    escapeHTML(
                      rule.title
                    )
                  }
                </h3>


                ${
                  (
                    rule.paragraphs ||
                    []
                  )
                    .map(
                      (
                        paragraph
                      ) => `

                        <p>
                          ${
                            escapeHTML(
                              paragraph
                            )
                          }
                        </p>
                      `
                    )
                    .join("")
                }


                ${
                  rule.bullets
                    ? `

                      <ul>

                        ${
                          rule.bullets
                            .map(
                              (
                                bullet
                              ) => `

                                <li>
                                  ${
                                    escapeHTML(
                                      bullet
                                    )
                                  }
                                </li>
                              `
                            )
                            .join("")
                        }

                      </ul>
                    `
                    : ""
                }

              </section>
            `
          )
          .join("")
      }
    `;
  }
}


/* ======================================================
   CALENDARIO
   ====================================================== */

function renderSchedule() {

  const container =
    document.getElementById(
      "schedule"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    schedule
      .map(
        (
          event,
          index
        ) => `

          <article
            class="
              schedule-item
              reveal
              fade-up
            "
          >

            <div
              class="
                schedule-item__num
              "
            >
              ${
                String(
                  index + 1
                )
                  .padStart(
                    2,
                    "0"
                  )
              }
            </div>


            <div
              class="
                schedule-item__content
              "
            >

              <h3>
                ${
                  escapeHTML(
                    event.name
                  )
                }
              </h3>

              <p>
                ${
                  escapeHTML(
                    event.location
                  )
                }
              </p>

              <small>
                ${
                  escapeHTML(
                    event.note
                  )
                }
              </small>

            </div>


            <div
              class="
                schedule-item__meta
              "
            >

              <span>
                ${
                  escapeHTML(
                    event.date
                  )
                }

                ·

                ${
                  escapeHTML(
                    event.time
                  )
                }
              </span>


              <span
                class="
                  status
                  ${
                    getStatusClass(
                      event.status
                    )
                  }
                "
              >
                ${
                  escapeHTML(
                    event.status
                  )
                }
              </span>

            </div>

          </article>
        `
      )
      .join("");
}


/* ======================================================
   FAQ
   ====================================================== */

function renderFAQ() {

  const container =
    document.getElementById(
      "faqAccordion"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    faq
      .map(
        (
          item,
          index
        ) => {

          const buttonId =
            `faq-button-${index}`;


          const panelId =
            `faq-panel-${index}`;


          return `

            <article
              class="
                accordion-item
              "
            >

              <button
                class="
                  accordion-trigger
                "
                id="${buttonId}"
                type="button"
                aria-expanded="false"
                aria-controls="${panelId}"
              >

                <span>
                  ${
                    escapeHTML(
                      item.question
                    )
                  }
                </span>

                <span
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div
                class="
                  accordion-panel
                "
                id="${panelId}"
                role="region"
                aria-labelledby="${buttonId}"
              >

                <div>

                  <p>
                    ${
                      escapeHTML(
                        item.answer
                      )
                    }
                  </p>

                </div>

              </div>

            </article>
          `;
        }
      )
      .join("");
}


/* ======================================================
   REGISTRO
   ====================================================== */

function setupRegistration() {

  const button =
    document.getElementById(
      "registrationButton"
    );


  const deadline =
    document.getElementById(
      "registrationDeadline"
    );


  const andradeLink =
    document.getElementById(
      "andradeDevLink"
    );


  if (deadline) {

    deadline.textContent =
      formatConfiguredDate(
        TOURNAMENT_CONFIG
          .registrationDeadline
      );
  }


  if (button) {

    if (
      TOURNAMENT_CONFIG
        .registrationUrl === "#"
    ) {

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
        "INSCRIBIR EQUIPO";


      button.href =
        TOURNAMENT_CONFIG
          .registrationUrl;


      button.target =
        "_blank";


      button.rel =
        "noopener noreferrer";
    }
  }


  if (andradeLink) {

    andradeLink.href =
      TOURNAMENT_CONFIG
        .andradeDevUrl ||
      "#";
  }
}


/* ======================================================
   COUNTDOWN
   ====================================================== */

function setupCountdown() {

  const countdown =
    document.getElementById(
      "countdown"
    );


  const empty =
    document.getElementById(
      "countdownEmpty"
    );


  if (
    !countdown ||
    !empty
  ) {

    return;
  }


  if (
    !TOURNAMENT_CONFIG
      .tournamentDate
  ) {

    countdown.hidden =
      true;


    empty.hidden =
      false;


    empty.textContent =
      `FECHA POR CONFIRMAR · KICKOFF ${TOURNAMENT_CONFIG.kickoff}`;


    return;
  }


  const target =
    new Date(
      TOURNAMENT_CONFIG
        .tournamentDate
    );


  if (
    Number.isNaN(
      target.getTime()
    )
  ) {

    return;
  }


  countdown.hidden =
    false;


  empty.hidden =
    true;


  const update = () => {

    const distance =
      target.getTime() -
      Date.now();


    if (
      distance <= 0
    ) {

      countdown.hidden =
        true;


      empty.hidden =
        false;


      empty.textContent =
        "EL TORNEO HA COMENZADO";


      return false;
    }


    setText(
      "days",

      Math.floor(
        distance /
        86400000
      )
    );


    setText(
      "hours",

      Math.floor(
        (
          distance %
          86400000
        ) /
        3600000
      )
    );


    setText(
      "minutes",

      Math.floor(
        (
          distance %
          3600000
        ) /
        60000
      )
    );


    setText(
      "seconds",

      Math.floor(
        (
          distance %
          60000
        ) /
        1000
      )
    );


    return true;
  };


  update();


  const interval =
    window.setInterval(
      () => {

        if (
          !update()
        ) {

          window.clearInterval(
            interval
          );
        }

      },

      1000
    );
}


/* ======================================================
   NAVBAR
   ====================================================== */

function setupNavbar() {

  const header =
    document.getElementById(
      "siteHeader"
    );


  if (!header) {
    return;
  }


  const update =
    () =>
      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 20
      );


  update();


  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );
}


/* ======================================================
   MENÚ MÓVIL
   ====================================================== */

function setupMobileMenu() {

  const button =
    document.getElementById(
      "menuToggle"
    );


  const panel =
    document.getElementById(
      "navMenu"
    );


  if (
    !button ||
    !panel
  ) {

    return;
  }


  const close = () => {

    button.classList.remove(
      "is-open"
    );


    panel.classList.remove(
      "is-open"
    );


    button.setAttribute(
      "aria-expanded",
      "false"
    );


    panel.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "menu-open"
    );
  };


  button.addEventListener(
    "click",

    () => {

      const opening =
        !panel.classList.contains(
          "is-open"
        );


      button.classList.toggle(
        "is-open",
        opening
      );


      panel.classList.toggle(
        "is-open",
        opening
      );


      button.setAttribute(
        "aria-expanded",
        String(opening)
      );


      panel.setAttribute(
        "aria-hidden",
        String(!opening)
      );


      document.body.classList.toggle(
        "menu-open",
        opening
      );
    }
  );


  panel
    .querySelectorAll(
      "a"
    )
    .forEach(
      (link) => {

        link.addEventListener(
          "click",
          close
        );

      }
    );


  window.addEventListener(
    "resize",

    () => {

      if (
        window.innerWidth >
        1120
      ) {

        close();

      }
    }
  );
}


/* ======================================================
   MODAL REGLAMENTO
   ====================================================== */

function setupModal() {

  const modal =
    document.getElementById(
      "rulesModal"
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
    !openButton ||
    !closeButton
  ) {

    return;
  }


  const dialog =
    modal.querySelector(
      ".modal__dialog"
    );


  let lastFocused =
    null;


  const open = () => {

    lastFocused =
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


    requestAnimationFrame(
      () => {

        modal.classList.add(
          "is-visible"
        );


        dialog?.focus();

      }
    );
  };


  const close = () => {

    modal.classList.remove(
      "is-visible"
    );


    window.setTimeout(
      () => {

        modal.classList.remove(
          "is-open"
        );


        modal.setAttribute(
          "aria-hidden",
          "true"
        );


        document.body.classList.remove(
          "modal-open"
        );


        if (
          lastFocused
          instanceof HTMLElement
        ) {

          lastFocused.focus();

        }

      },

      220
    );
  };


  openButton.addEventListener(
    "click",
    open
  );


  closeButton.addEventListener(
    "click",
    close
  );


  modal
    .querySelectorAll(
      "[data-modal-close]"
    )
    .forEach(
      (node) => {

        node.addEventListener(
          "click",
          close
        );

      }
    );


  document.addEventListener(
    "keydown",

    (event) => {

      if (
        event.key ===
          "Escape" &&

        modal.classList.contains(
          "is-open"
        )
      ) {

        close();

      }
    }
  );
}


/* ======================================================
   FAQ ACORDEÓN
   ====================================================== */

function setupAccordion() {

  document
    .querySelectorAll(
      ".accordion-trigger"
    )
    .forEach(
      (trigger) => {

        trigger.addEventListener(
          "click",

          () => {

            const expanded =
              trigger.getAttribute(
                "aria-expanded"
              ) === "true";


            const panel =
              document.getElementById(
                trigger.getAttribute(
                  "aria-controls"
                )
              );


            trigger.setAttribute(
              "aria-expanded",
              String(!expanded)
            );


            trigger.classList.toggle(
              "is-open",
              !expanded
            );


            if (panel) {

              panel.classList.toggle(
                "is-open",
                !expanded
              );

            }


            const icon =
              trigger.lastElementChild;


            if (icon) {

              icon.textContent =
                expanded
                  ? "+"
                  : "−";

            }
          }
        );

      }
    );
}


/* ======================================================
   ANIMACIONES
   ====================================================== */

function setupRevealAnimations() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    items.forEach(
      (item) => {

        item.classList.add(
          "is-visible"
        );

      }
    );


    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer.unobserve(
                entry.target
              );
            }
          }
        );

      },

      {
        threshold: 0.12
      }
    );


  items.forEach(
    (item) => {

      observer.observe(
        item
      );

    }
  );
}


/* ======================================================
   CONTADORES
   ====================================================== */

function setupCounters() {

  const counters =
    document.querySelectorAll(
      "[data-count]"
    );


  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

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
              node.dataset.format ||
              "";


            const duration =
              800;


            const start =
              performance.now();


            const animate =
              (now) => {

                const progress =
                  Math.min(
                    (
                      now -
                      start
                    ) /
                    duration,

                    1
                  );


                const value =
                  Math.round(
                    target *
                    (
                      1 -
                      Math.pow(
                        1 -
                        progress,
                        3
                      )
                    )
                  );


                node.textContent =
                  `${
                    format === "02"
                      ? String(value)
                          .padStart(
                            2,
                            "0"
                          )
                      : value
                  }${suffix}`;


                if (
                  progress < 1
                ) {

                  requestAnimationFrame(
                    animate
                  );

                }
              };


            requestAnimationFrame(
              animate
            );


            observer.unobserve(
              node
            );
          }
        );

      },

      {
        threshold: 0.55
      }
    );


  counters.forEach(
    (counter) => {

      observer.observe(
        counter
      );

    }
  );
}


/* ======================================================
   NAVEGACIÓN ACTIVA
   ====================================================== */

function setupActiveNavigation() {

  const links = [
    ...document.querySelectorAll(
      "[data-nav]"
    )
  ];


  const pairs =
    links
      .map(
        (link) => ({

          link,

          section:
            document.querySelector(
              link.getAttribute(
                "href"
              )
            )

        })
      )
      .filter(
        (item) =>
          item.section
      );


  if (
    !(
      "IntersectionObserver"
      in window
    ) ||
    !pairs.length
  ) {

    return;
  }


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


        links.forEach(
          (link) => {

            link.classList.remove(
              "is-active"
            );

          }
        );


        const match =
          pairs.find(
            (item) =>
              item.section ===
              visible.target
          );


        match?.link
          .classList
          .add(
            "is-active"
          );

      },

      {
        rootMargin:
          "-25% 0px -60% 0px",

        threshold: [
          0.01,
          0.2,
          0.5
        ]
      }
    );


  pairs.forEach(
    (item) => {

      observer.observe(
        item.section
      );

    }
  );
}


/* ======================================================
   LOGO
   ====================================================== */

function setupLogoFallback() {

  const image =
    document.getElementById(
      "aecompuLogo"
    );


  const placeholder =
    document.getElementById(
      "aecompuLogoPlaceholder"
    );


  if (
    !image ||
    !placeholder
  ) {

    return;
  }


  image.addEventListener(
    "load",

    () => {

      image.hidden =
        false;


      placeholder.hidden =
        true;

    }
  );


  image.addEventListener(
    "error",

    () => {

      image.hidden =
        true;


      placeholder.hidden =
        false;

    }
  );


  if (
    TOURNAMENT_CONFIG
      .aecompuLogo
  ) {

    image.src =
      TOURNAMENT_CONFIG
        .aecompuLogo;

  }
}


/* ======================================================
   PARALLAX
   ====================================================== */

function setupParallax() {

  const art =
    document.querySelector(
      ".hero__art"
    );


  if (
    !art ||
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches
  ) {

    return;
  }


  window.addEventListener(
    "pointermove",

    (event) => {

      if (
        window.innerWidth <
        900
      ) {

        return;
      }


      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 8;


      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * 8;


      art.style.transform =
        `translate3d(${x}px, ${y}px, 0)`;

    },

    {
      passive: true
    }
  );
}


/* ======================================================
   ESTADOS
   ====================================================== */

function getStatusClass(
  status
) {

  const normalized =
    String(status)
      .toUpperCase();


  if (
    [
      "FINAL",
      "CIERRE"
    ]
      .includes(
        normalized
      )
  ) {

    return "status--final";
  }


  if (
    [
      "LIVE",
      "EN JUEGO",
      "KICKOFF",
      "LISTA"
    ]
      .includes(
        normalized
      )
  ) {

    return "status--live";
  }


  return "status--upcoming";
}


/* ======================================================
   FECHAS
   ====================================================== */

function formatConfiguredDate(
  value
) {

  if (!value) {

    return "POR CONFIRMAR";

  }


  const date =
    new Date(
      value
    );


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
  )
    .format(date)
    .toUpperCase();
}


/* ======================================================
   UTILIDADES
   ====================================================== */

function setText(
  id,
  value
) {

  const node =
    document.getElementById(
      id
    );


  if (node) {

    node.textContent =
      String(value)
        .padStart(
          2,
          "0"
        );

  }
}


/* ======================================================
   ESCAPAR HTML
   ====================================================== */

function escapeHTML(
  value
) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );
}