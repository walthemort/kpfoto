const items = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carousel = document.querySelector(".carousel");
const indexDisplay = document.getElementById("carousel-index"); // Nyttigt element

let currentIndex = 2; // Start med midterste billede

function updateCarousel() {
  const totalItems = items.length;
  const visibleItems = 5; // Altid vis 5 billeder
  const midIndex = Math.floor(visibleItems / 2); // Midterposition i karusellen

  // Opdater billedeindekset
  indexDisplay.textContent = `${currentIndex + 1}/${totalItems}`;

  items.forEach((item, index) => {
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;

    if (relativeIndex < visibleItems) {
      // Aktivér synlige elementer
      item.style.display = "block";
      item.style.transform = `translateX(${(relativeIndex - midIndex) * 220}px) scale(${
        relativeIndex === midIndex ? 1 : 0.8
      })`;
      item.style.opacity = relativeIndex === midIndex ? "1" : "0.4";
    } else {
      // Skjul usynlige elementer
      item.style.display = "none";
    }
  });
}

// Håndter forrige-knap
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Håndter næste-knap
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Initial opdatering
updateCarousel();
