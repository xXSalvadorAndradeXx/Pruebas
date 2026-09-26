"use strict";

const MANAGER_STATE_KEY = "aecompuSuperLeagueStateV1";

function managerDefaultFixtures(groupLetter) {
  const p = (n) => `${groupLetter}${n}`;
  const pairings = [[1,8],[2,7],[3,6],[4,5],[1,7],[8,6],[2,5],[3,4]];
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

function createManagerDefaultState() {
  const teams = {};
  const groupMatches = [];
  ["A","B","C","D"].forEach((letter) => {
    teams[letter] = Array.from({length:8}, (_,index) => ({seed:`${letter}${index+1}`, name:`EQUIPO ${letter}${index+1}`}));
    groupMatches.push(...managerDefaultFixtures(letter));
  });
  return {version:1, teams, groupMatches, updatedAt:null};
}

function loadManagerState() {
  const fallback = createManagerDefaultState();
  try {
    const raw = localStorage.getItem(MANAGER_STATE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && parsed.teams && Array.isArray(parsed.groupMatches) ? parsed : fallback;
  } catch { return fallback; }
}

function saveManagerState(state) {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(MANAGER_STATE_KEY, JSON.stringify(state));
}

function calculateManagerStandings(state, groupLetter) {
  const table = new Map();
  (state.teams[groupLetter] || []).forEach((team) => table.set(team.seed, {seed:team.seed,name:team.name,points:0,goalsFor:0,goalsAgainst:0}));
  state.groupMatches.filter((m) => m.group === groupLetter).forEach((m) => {
    const a = Number(m.scoreA), b = Number(m.scoreB);
    if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) return;
    const ta = table.get(m.teamA), tb = table.get(m.teamB);
    if (!ta || !tb) return;
    ta.goalsFor += a; ta.goalsAgainst += b; tb.goalsFor += b; tb.goalsAgainst += a;
    if (a > b) ta.points += 3; else if (b > a) tb.points += 3; else {ta.points += 1; tb.points += 1;}
  });
  return Array.from(table.values()).sort((a,b) => {
    if (b.points !== a.points) return b.points-a.points;
    const da=a.goalsFor-a.goalsAgainst, db=b.goalsFor-b.goalsAgainst;
    if (db !== da) return db-da;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor-a.goalsFor;
    if (a.goalsAgainst !== b.goalsAgainst) return a.goalsAgainst-b.goalsAgainst;
    return a.seed.localeCompare(b.seed,"es",{numeric:true});
  });
}

function managerTeamName(state, seed) {
  const group = seed.charAt(0);
  return state.teams[group]?.find((team) => team.seed === seed)?.name || seed;
}
