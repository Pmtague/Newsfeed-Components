/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Select Header
const menuSelector = document.querySelector('.header');

// Add New Menu Function to the Header
menuSelector.appendChild(newMenu());

function newMenu (array) {

  // Select Menu Button
  const menuButton = document.querySelector('.menu-button');

  // Add Click Handler
  menuButton.addEventListener('click', event => {
    console.log('clicked', event.target);
    menu.classList.toggle('menu--open');
  });

  // Define Elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  const listItems = document.createElement('li');

  // Setup Structure
  menu.appendChild(list);
  list.appendChild(listItems);

  // Set Class Names
  menu.classList.add('menu');

  // Set Text Content - Add List Items
  const liCount = menuItems.length;

  for (var i = 0; i < liCount; i++) {
    const listItems = document.createElement('li');
    listItems.textContent = menuItems[i];
    list.appendChild(listItems)
  }

  // menuItems.forEach(i => {
  //   // const listItems = document.createElement('li');
  //   listItems.textContent = menuItems[i];
  //   list.appendChild(listItems);
  // });

  return menu;

}