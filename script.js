// =====================================
// MENU MOBILE
// =====================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


// =====================================
// FECHAR MENU AO CLICAR
// =====================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


// =====================================
// BOTÃO GAME ON
// =====================================

const gameButton = document.getElementById("gameButton");
const notification = document.getElementById("notification");

gameButton.addEventListener("click", () => {

    notification.classList.add("show");

    gameButton.textContent = "🔥 GAME ON!";

    setTimeout(() => {

        notification.classList.remove("show");

        gameButton.textContent = "SENTIR A EMOÇÃO 🔥";

    }, 2500);

});


// =====================================
// EFEITO DA BOLA COM O MOUSE
// =====================================

const basketball = document.querySelector(".basketball");

document.addEventListener("mousemove", (event) => {

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    basketball.style.transform =
        `translate(${x}px, ${y}px) rotate(${x}deg)`;

});
