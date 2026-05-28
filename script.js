const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".main-nav a");
const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  statusMessage.textContent =
    "Mensagem registrada. Em um site publicado, este formulário pode ser conectado ao WhatsApp, e-mail ou CRM do escritório.";
  form.reset();
});
