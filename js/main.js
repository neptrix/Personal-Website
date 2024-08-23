// Select DOM Elements
const menuBtn = document.querySelector('.menu-btn'); // The menu button
const menu = document.querySelector('.menu'); // The menu container
const menuNav = document.querySelector('.menu-nav'); // Navigation items container
const menuBranding = document.querySelector('.menu-branding'); // Branding section
const navItems = document.querySelectorAll('.nav-item'); // All navigation items

// Initial State of Menu
let showMenu = false; // Menu is initially not shown

// Add click event listener to the menu button
menuBtn.addEventListener('click', toggleMenu);

// Toggle menu visibility
function toggleMenu() {
  if (!showMenu) {
    // Show menu
    menuBtn.classList.add('close'); // Change button appearance
    menu.classList.add('show'); // Show the menu
    menuNav.classList.add('show'); // Show navigation items
    menuBranding.classList.add('show'); // Show branding
    navItems.forEach(item => item.classList.add('show')); // Show all nav items

    showMenu = true; // Update state to menu shown
  } else {
    // Hide menu
    menuBtn.classList.remove('close'); // Change button appearance back
    menu.classList.remove('show'); // Hide the menu
    menuNav.classList.remove('show'); // Hide navigation items
    menuBranding.classList.remove('show'); // Hide branding
    navItems.forEach(item => item.classList.remove('show')); // Hide all nav items

    showMenu = false; // Update state to menu hidden
  }
}

// Function to toggle themes
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const icon = document.querySelector('#theme-toggle i');
  // Change icon based on theme
  if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
}

// Add event listener to the button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);



