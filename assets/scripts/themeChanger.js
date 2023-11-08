let root = document.querySelector(":root");
let themeSwitcher = document.querySelector(".switcher")
let switcherDisplay = document.querySelector(".switcherDisplay")

themeSwitcher.addEventListener("click", () => {
    root.classList.toggle("dark")
    themeSwitcher.classList.toggle("switcher-on");
    switcherDisplay.innerText=="light"?switcherDisplay.innerText="dark":switcherDisplay.innerText="light"
    });