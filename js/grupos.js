"use strict";

/* =========================================================
   AECOMPU SUPERLEAGUE — ESTADO + GRUPOS PÚBLICOS
   El Manager escribe en la misma clave de localStorage.
   La vista pública calcula PTS, GF y GC a partir de resultados.
   ========================================================= */

const TOURNAMENT_STATE_KEY = "aecompuSuperLeagueStateV1";

function createDefaultFixtures(groupLetter) {
  const p = (n) => `${groupLetter}${n}`;
  const pairings = [
    [1, 8], [2, 7], [3, 6], [4, 5],
    [1, 7], [8, 6], [2, 5], [3, 4]
  ];

  return pairings.map((pair, index) => ({
    id: `${groupLetter}-M${index + 1}`,
    group: groupLetter,
    round: index < 4 ? 1 : 2,
    teamA: p(pair[0]),
    teamB: p(pair[1]),
    scoreA: null,
    scoreB: null
  }));
}

function createDefaultTournamentState() {
  const letters = ["A", "B", "C", "D"];
  const teams = {};
  const groupMatches = [];

  letters.forEach((letter) => {
    teams[letter] = Array.from({ length: 8 }, (_, index) => ({
      seed: `${letter}${index + 1}`,
      name: `EQUIPO ${letter}${index + 1}`
    }));
    groupMatches.push(...createDefaultFixtures(letter));
  });

  return {
    version: 1,
    teams,
    groupMatches,
    updatedAt: null
  };
}

function loadTournamentState() {
  const fallback = createDefaultTournamentState();

  try {
    const raw = localStorage.getItem(TOURNAMENT_STATE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return fallback;

    ["A", "B", "C", "D"].forEach((letter) => {
      if (!Array.isArray(parsed.teams?.[letter]) || parsed.teams[letter].length !== 8) {
        parsed.teams = parsed.teams || {};
        parsed.teams[letter] = fallback.teams[letter];
      }
    });

    if (!Array.isArray(parsed.groupMatches)) {
      parsed.groupMatches = fallback.groupMatches;
    }

    return parsed;
  } catch (error) {
    console.warn("No se pudo leer el estado del torneo:", error);
    return fallback;
  }
}

let tournamentState = loadTournamentState();

const groups = ["A", "B", "C", "D"].map((letter) => ({
  name: `GRUPO ${letter}`,
  letter,
  teams: tournamentState.teams[letter]
}));

function refreshTournamentState() {
  tournamentState = loadTournamentState();
  groups.forEach((group) => {
    group.teams = tournamentState.teams[group.letter];
  });
}

function calculateGroupStandings(groupLetter) {
  const baseTeams = tournamentState.teams[groupLetter] || [];
  const table = new Map();

  baseTeams.forEach((team) => {
    table.set(team.seed, {
      seed: team.seed,
      name: team.name,
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0
    });
  });

  tournamentState.groupMatches
    .filter((match) => match.group === groupLetter)
    .forEach((match) => {
      const scoreA = Number(match.scoreA);
      const scoreB = Number(match.scoreB);
      const valid = Number.isInteger(scoreA) && scoreA >= 0 && Number.isInteger(scoreB) && scoreB >= 0;
      if (!valid) return;

      const teamA = table.get(match.teamA);
      const teamB = table.get(match.teamB);
      if (!teamA || !teamB) return;

      teamA.goalsFor += scoreA;
      teamA.goalsAgainst += scoreB;
      teamB.goalsFor += scoreB;
      teamB.goalsAgainst += scoreA;

      if (scoreA > scoreB) {
        teamA.points += 3;
      } else if (scoreB > scoreA) {
        teamB.points += 3;
      } else {
        teamA.points += 1;
        teamB.points += 1;
      }
    });

  return Array.from(table.values()).sort(compareTeams);
}

function getSortedGroupTeams(group) {
  const letter = group.letter || String(group.name).replace("GRUPO ", "").trim();
  return calculateGroupStandings(letter);
}

function compareTeams(a, b) {
  if (b.points !== a.points) return b.points - a.points;

  const diffA = a.goalsFor - a.goalsAgainst;
  const diffB = b.goalsFor - b.goalsAgainst;
  if (diffB !== diffA) return diffB - diffA;

  if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
  if (a.goalsAgainst !== b.goalsAgainst) return a.goalsAgainst - b.goalsAgainst;

  return String(a.seed).localeCompare(String(b.seed), "es", { numeric: true });
}

function resolveQualifiedSeed(label) {
  const match = /^([A-D])([1-4])$/.exec(String(label).trim().toUpperCase());
  if (!match) return label;

  const [, groupLetter, positionText] = match;
  const position = Number(positionText) - 1;
  const team = calculateGroupStandings(groupLetter)[position];

  return team ? `${groupLetter}${position + 1} · ${team.name}` : label;
}

function renderGroups() {
  const container = document.getElementById("groupsGrid");
  if (!container) return;

  container.innerHTML = groups.map((group, groupIndex) => {
    const sortedTeams = getSortedGroupTeams(group);

    return `
      <article class="group-card reveal fade-up" style="transition-delay:${groupIndex * 70}ms">
        <div class="group-card__header">
          <div>
            <span>GROUP ${String(groupIndex + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(group.name)}</h3>
          </div>
          <strong>TOP 4 AVANZA</strong>
        </div>

        <div class="group-table__head" aria-hidden="true">
          <span>#</span><span>EQUIPO</span><span>GF</span><span>GC</span><span>PTS</span>
        </div>

        <ol class="group-table">
          ${sortedTeams.map((team, index) => `
            <li class="${index < 4 ? "is-qualifying" : ""}">
              <span class="group-table__position">${index + 1}</span>
              <div class="group-table__team">
                <small>${escapeHTML(team.seed)}</small>
                <strong title="${escapeHTML(team.name)}">${escapeHTML(team.name)}</strong>
              </div>
              <span class="group-table__stat">${team.goalsFor}</span>
              <span class="group-table__stat">${team.goalsAgainst}</span>
              <strong class="group-table__points">${team.points}</strong>
            </li>
          `).join("")}
        </ol>

        <div class="group-card__legend">
          <span><i></i> TOP 4 CLASIFICA</span>
          <small>GF · GC · PTS</small>
        </div>
      </article>
    `;
  }).join("");
}

function refreshPublicCompetitionUI() {
  refreshTournamentState();
  if (typeof renderGroups === "function") renderGroups();
  if (typeof renderBracket === "function") renderBracket();
}

window.addEventListener("storage", (event) => {
  if (event.key === TOURNAMENT_STATE_KEY) refreshPublicCompetitionUI();
});

window.addEventListener("focus", () => {
  const latest = loadTournamentState();
  if (JSON.stringify(latest) !== JSON.stringify(tournamentState)) {
    refreshPublicCompetitionUI();
  }
});
