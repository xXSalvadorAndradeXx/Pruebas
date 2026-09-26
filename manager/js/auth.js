"use strict";

const MANAGER_SESSION_KEY = "aecompuManagerAuthorized";
const MANAGER_PASSWORD_HASH = "71847d5b2c05bde4bea6397c9176450bc5f0fc7f5ac8f9b6b0ecd836426b3eb8";

async function hashManagerPassword(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2,"0")).join("");
}

function managerIsAuthorized() {
  return sessionStorage.getItem(MANAGER_SESSION_KEY) === "1";
}

function showManagerDashboard() {
  document.getElementById("loginView").hidden = true;
  document.getElementById("dashboard").hidden = false;
  if (typeof initializeManager === "function") initializeManager();
}

function showManagerLogin() {
  document.getElementById("loginView").hidden = false;
  document.getElementById("dashboard").hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const input = document.getElementById("managerPassword");
  const error = document.getElementById("loginError");
  const toggle = document.getElementById("togglePassword");
  const logout = document.getElementById("logoutButton");

  if (managerIsAuthorized()) showManagerDashboard(); else showManagerLogin();

  toggle?.addEventListener("click", () => {
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    toggle.textContent = showing ? "VER" : "OCULTAR";
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.hidden = true;
    try {
      const hash = await hashManagerPassword(input.value);
      if (hash === MANAGER_PASSWORD_HASH) {
        sessionStorage.setItem(MANAGER_SESSION_KEY, "1");
        input.value = "";
        showManagerDashboard();
      } else {
        error.hidden = false;
        input.select();
      }
    } catch {
      error.textContent = "No se pudo validar el acceso en este navegador.";
      error.hidden = false;
    }
  });

  logout?.addEventListener("click", () => {
    sessionStorage.removeItem(MANAGER_SESSION_KEY);
    location.reload();
  });
});
