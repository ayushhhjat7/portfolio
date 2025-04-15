// Get the toggle button and body
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Check localStorage for theme preference
const currentTheme = localStorage.getItem('theme');

// If there is a saved theme, apply it
if (currentTheme) {
  body.classList.add(currentTheme);
  toggleBtn.textContent = currentTheme === 'light-mode' ? '🌙' : '☀️';
} else {
  // Default theme is dark mode
  localStorage.setItem('theme', 'dark-mode');
  toggleBtn.textContent = '🌙';
}

// Toggle dark/light mode on button click
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    toggleBtn.textContent = '☀️'; // Sun emoji for light mode
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    toggleBtn.textContent = '🌙'; // Moon emoji for dark mode
  }
});
// JavaScript to create a custom parallax effect on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.parallax-section');
    
    sections.forEach(section => {
        const speed = section.getAttribute('data-speed') || 1; // Default speed if not specified
        const yOffset = window.pageYOffset;
        const bgPosition = yOffset * speed;
        
        section.style.backgroundPosition = `center ${bgPosition}px`;
    });
});
// Sticky navbar animation on scroll
const navbar = document.querySelector('header');

window.onscroll = () => {
    if (window.scrollY > 50) {  // After scrolling 50px
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
