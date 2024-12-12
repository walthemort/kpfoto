// Vælger scroll ikonet
const scrollIndicator = document.querySelector('.scroll-indicator');

// Tilføjer en scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Skjuler ikonet når brugeren scroller
    scrollIndicator.classList.add('hidden');
  } else {
    // Viser ikonet igen når brugeren går til toppen af siden.
    scrollIndicator.classList.remove('hidden');
  }
});
