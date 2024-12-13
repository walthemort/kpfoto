document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');
  
    hamburger.addEventListener('click', function() {
      console.log('Hamburger clicked'); // Debugging linje
      nav.classList.toggle('active');
    });
  });
  