const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('header ul');

menuButton.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});