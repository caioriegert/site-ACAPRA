// Seleciona o botão e o menu
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-bar');

// Alterna a classe "open" ao clicar no menu-icon
menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('open');
});