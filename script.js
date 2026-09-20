
/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeIcon.textContent = "🌙";
} else {
    themeIcon.textContent = "☀️";
}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});

