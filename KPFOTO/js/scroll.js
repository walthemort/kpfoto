// Select the scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Hide the scroll indicator when the user scrolls down
    scrollIndicator.classList.add('hidden');
  } else {
    // Show the scroll indicator if back at the top
    scrollIndicator.classList.remove('hidden');
  }
});
