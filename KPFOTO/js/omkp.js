
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");
  let currentIndex = 1;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 20; // Include gap between items
    const offset = (carousel.offsetWidth - itemWidth) / 2 - currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Initial call to center carousel
  window.addEventListener("resize", updateCarousel);
  updateCarousel();
