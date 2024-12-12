document.addEventListener('DOMContentLoaded', () => {
    // Tilføjer en fade-in effekt til siden, når den indlæses
    document.body.classList.add('fade-in');
  
    // Find alle links
    const links = document.querySelectorAll('a');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href');
  
        // Ignorer links, der:
        // 1. Starter med #
        // 2. Har 'target' attribut (eksterne links)
        if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
          event.preventDefault(); // Forhindrer standard linknavigation
  
          // Start fade-out animation
          document.body.classList.remove('fade-in');
          document.body.classList.add('fade-out');
  
          // Naviger efter transition
          setTimeout(() => {
            window.location.href = href;
          }, 500); // Matcher CSS-transitionens varighed
        }
      });
    });
  });
  