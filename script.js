// Simple example to toggle a menu on click (optional)
const nav = document.querySelector('nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
