window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  // Tilføj/fjern "scrolled"-klasse baseret på scrollY
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Tjek om vi er tæt på bunden af siden
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
    // Tilføj .hidden for at animere nav ud
    nav.classList.add('hidden');
  } else {
    // Fjern .hidden for at animere nav ind
    nav.classList.remove('hidden');
  }
});
