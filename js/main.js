let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () => {
  menu.classList.toggle("fa-times")
  navbar.classList.toggle("active")
}


window.onscroll = () => {
  menu.classList.remove("fa-times")
  navbar.classList.remove("active")
}

// año actual
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});


// Mostrar/Ocultar el botón de desplazamiento hacia arriba con transición
window.onscroll = function () {
  var scrollTopButton = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
};

// Función para desplazarse hacia arriba
document.getElementById("scrollTopButton").onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


// DARK MODE

let currentTheme = getDefaultTheme();
setTheme(currentTheme);

addButtonThemeListener();

/**
 * Listens for the click of the button and execute the theme change
**/
function addButtonThemeListener() {
  const buttonToggler = document.querySelector("[data-theme-toggle]");
  buttonToggler.addEventListener("click", () => {
    const newTheme = getNewTheme(currentTheme);
    setTheme(newTheme);
    currentTheme = newTheme;
    saveTheme(newTheme);
  });
}

/**
 * Get the default theme for the user
 * @return {String} theme - the theme of the user
 *
**/
function getDefaultTheme() {
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  const systemSettingTheme = systemSettingDark.matches ? "dark" : "light";
  const savedTheme = getSavedTheme();
  return savedTheme ? savedTheme : systemSettingTheme;
}


/**
 * Returns the new theme
 * @param {String} theme - the current app theme, dark or light
 *
**/
function getNewTheme(theme) {
  return theme === "dark" ? "light" : "dark";
}

/**
 * Sets the theme globally
 * @param {String} theme - dark or light
 *
**/
function setTheme(theme) {
  const html = document.querySelector("html");
  html.setAttribute("data-theme", theme);

  const logo1 = document.querySelector(".logo1");
  const logo2 = document.querySelector(".logo2");
  const logoFooter1 = document.querySelector(".logo1-footer");
  const logoFooter2 = document.querySelector(".logo2-footer");

  if (theme === "light") {
    logo1.classList.add("active");
    logo2.classList.remove("active");
    logoFooter1.classList.add("active");
    logoFooter2.classList.remove("active");
  } else {
    logo1.classList.remove("active");
    logo2.classList.add("active");
    logoFooter1.classList.remove("active");
    logoFooter2.classList.add("active");
  }
}

/**
 * Returns the theme saved in memory
 * @return {String} theme - the saved theme
 *
**/
function getSavedTheme() {
  return localStorage.getItem("theme");
}

/**
 * Saves theme in memory
 * @return {String} theme - the theme to save
 *
**/
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

