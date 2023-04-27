const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

function toggleMenu() {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        close.style.display = "block";
        open.style.display = "none";
    } else {
        menu.classList.add("hidden");
        close.style.display = "none";
        open.style.display = "block";
    }
}

hamburger.addEventListener("click", toggleMenu);
