"use strict";

let managerState = loadManagerState();
let managerInitialized = false;
let selectedResultGroup = "A";

function initializeManager() {
  if (!managerInitialized) {
    setupManagerEvents();
    managerInitialized = true;
  }
  managerState = loadManagerState();
  renderManager();
}

function setupManagerEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach((b) => b.classList.toggle("is-active", b === button));
      document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === button.dataset.tab));
    });
  });

  document.getElementById("resultGroupFilter")?.addEventListener("change", (event) => {
    selectedResultGroup = event.target.value;
    renderResultManager();
  });

  document.getElementById("teamEditor")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-save-group]");
    if (!button) return;
    const group = button.dataset.saveGroup;
    document.querySelectorAll(`[data-team-group="${group}"]`).forEach((input) => {
      const team = managerState.teams[group].find((item) => item.seed === input.dataset.seed);
      if (team) team.name = input.value.trim() || team.seed;
    });
    saveAndRefresh(`Nombres del Grupo ${group} guardados.`);
  });

  document.getElementById("resultManager")?.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save-result]");
    const clearButton = event.target.closest("[data-clear-result]");
    if (!saveButton && !clearButton) return;
    const id = (saveButton || clearButton).dataset.saveResult || (saveButton || clearButton).dataset.clearResult;
    const match = managerState.groupMatches.find((item) => item.id === id);
    if (!match) return;

    if (clearButton) {
      match.scoreA = null;
      match.scoreB = null;
      saveAndRefresh(`Resultado ${id} eliminado.`);
      return;
    }

    const scoreAInput = document.querySelector(`[data-score-a="${id}"]`);
    const scoreBInput = document.querySelector(`[data-score-b="${id}"]`);
    const scoreA = Number(scoreAInput.value);
    const scoreB = Number(scoreBInput.value);
    if (!Number.isInteger(scoreA) || scoreA < 0 || !Number.isInteger(scoreB) || scoreB < 0) {
      showToast("Ingresa marcadores válidos (0 o más).", true);
      return;
    }
    match.scoreA = scoreA;
    match.scoreB = scoreB;
    saveAndRefresh(`${managerTeamName(managerState, match.teamA)} ${scoreA}–${scoreB} ${managerTeamName(managerState, match.teamB)} guardado.`);
  });

  document.getElementById("resetTournament")?.addEventListener("click", () => {
    if (!confirm("¿Restablecer TODOS los nombres y resultados de grupos? Esta acción no se puede deshacer.")) return;
    managerState = createManagerDefaultState();
    saveManagerState(managerState);
    renderManager();
    showToast("Torneo restablecido.");
  });
}

function saveAndRefresh(message) {
  saveManagerState(managerState);
  renderManager();
  showToast(message);
}

function renderManager() {
  renderManagerSummary();
  renderTeamEditor();
  renderResultManager();
  renderManagerStandings();
  const status = document.getElementById("managerStatus");
  if (status) status.textContent = managerState.updatedAt ? `ACTUALIZADO ${new Date(managerState.updatedAt).toLocaleTimeString("es-SV", {hour:"2-digit",minute:"2-digit"})}` : "LISTO";
}

function renderManagerSummary() {
  const completed = managerState.groupMatches.filter((m) => Number.isInteger(Number(m.scoreA)) && Number.isInteger(Number(m.scoreB))).length;
  const container = document.getElementById("summaryGrid");
  if (!container) return;
  const cards = [["EQUIPOS","32"],["PARTIDOS DE GRUPO",`${completed}/32`],["GRUPOS","4"],["CLASIFICAN","16"]];
  container.innerHTML = cards.map(([label,value]) => `<article class="summary-card"><span>${label}</span><strong>${value}</strong></article>`).join("");
}

function renderTeamEditor() {
  const container = document.getElementById("teamEditor");
  if (!container) return;
  container.innerHTML = ["A","B","C","D"].map((group) => `
    <article class="team-editor-card">
      <div class="team-editor-card__head"><h3>GRUPO ${group}</h3><span>8 equipos</span></div>
      <div class="team-fields">
        ${managerState.teams[group].map((team) => `
          <label class="team-field"><span>${team.seed}</span><input data-team-group="${group}" data-seed="${team.seed}" value="${escapeManagerHTML(team.name)}" maxlength="36"></label>
        `).join("")}
      </div>
      <div class="team-editor-card__actions"><button class="save-group" data-save-group="${group}" type="button">GUARDAR GRUPO ${group}</button></div>
    </article>
  `).join("");
}

function renderResultManager() {
  const container = document.getElementById("resultManager");
  if (!container) return;
  const select = document.getElementById("resultGroupFilter");
  if (select) select.value = selectedResultGroup;
  const matches = managerState.groupMatches.filter((m) => m.group === selectedResultGroup);
  container.innerHTML = `<div class="fixture-list">${matches.map((match) => {
    const hasResult = Number.isInteger(Number(match.scoreA)) && Number.isInteger(Number(match.scoreB));
    return `
      <div class="fixture-row">
        <span class="fixture-meta">R${match.round} · ${match.id}</span>
        <span class="fixture-team">${escapeManagerHTML(managerTeamName(managerState, match.teamA))}</span>
        <input class="score-input" data-score-a="${match.id}" type="number" min="0" step="1" value="${hasResult ? match.scoreA : ""}" aria-label="Goles ${match.teamA}">
        <span class="vs">VS</span>
        <input class="score-input" data-score-b="${match.id}" type="number" min="0" step="1" value="${hasResult ? match.scoreB : ""}" aria-label="Goles ${match.teamB}">
        <span class="fixture-team">${escapeManagerHTML(managerTeamName(managerState, match.teamB))}</span>
        <button class="save-result" data-save-result="${match.id}" type="button">${hasResult ? "ACTUALIZAR" : "GUARDAR"}</button>
        <button class="clear-result" data-clear-result="${match.id}" type="button">LIMPIAR</button>
      </div>`;
  }).join("")}</div>`;
}

function renderManagerStandings() {
  const container = document.getElementById("managerStandings");
  if (!container) return;
  container.innerHTML = ["A","B","C","D"].map((group) => {
    const standings = calculateManagerStandings(managerState, group);
    return `<article class="standing-card">
      <div class="standing-card__head"><h3>GRUPO ${group}</h3><span>TOP 4</span></div>
      <table class="standing-table"><thead><tr><th>#</th><th>EQUIPO</th><th>GF</th><th>GC</th><th>PTS</th></tr></thead><tbody>
      ${standings.map((team,index) => `<tr class="${index<4?"qualifying":""}"><td class="pos">${index+1}</td><td>${escapeManagerHTML(team.name)}</td><td>${team.goalsFor}</td><td>${team.goalsAgainst}</td><td><strong>${team.points}</strong></td></tr>`).join("")}
      </tbody></table>
    </article>`;
  }).join("");
}

function showToast(message, error = false) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  if (error) toast.style.borderColor = "rgba(255,107,107,.55)";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function escapeManagerHTML(value) {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
