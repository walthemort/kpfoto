const images = [
    "assets/img/bryllup1.jpeg",
    "assets/img/bryllup2.jpeg",
    "assets/img/bryllup3.jpeg",
    "assets/img/bryllup2.jpeg"
   
    
  ];
  
  let currentIndex = 0;
  
 // Select DOM elements
const imageElement = document.querySelector(".carousel img");
const prevButton = document.querySelector(".carousel button.prev");
const nextButton = document.querySelector(".carousel button.next");

// Update the displayed image
function updateImage() {
  console.log("Current Index:", currentIndex); // Debug
  imageElement.src = images[currentIndex];
}

// Navigate to the previous image
function showPreviousImage() {
  console.log("Previous button clicked");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Navigate to the next image
function showNextImage() {
  console.log("Next button clicked");
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

// Add event listeners
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

// Initialize the first image
updateImage();