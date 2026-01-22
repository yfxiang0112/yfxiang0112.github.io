const toggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
}

/* Restore theme */
const saved = localStorage.getItem("theme");
if (saved) {
  setTheme(saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
}

toggle.addEventListener("click", toggleTheme);