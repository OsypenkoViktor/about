let btn = document.querySelector(".themeChanger");
let root = document.querySelector(":root");

btn.addEventListener("click", () => {
    root.classList.toggle("dark");
    });