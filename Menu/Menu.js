// Toggle the "menu--open" class on your menu reference
// Also Added Menu Slide-in From the Left

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  TweenMax.from(menu, 1, {left: -350});
  TweenMax.to(menu, 1, {left: 0});
  // TweenMax.to(menu, 1, {left: -350, delay: 0.5});
}

// Start Here: Create a reference to the ".menu" class

const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu()
});

