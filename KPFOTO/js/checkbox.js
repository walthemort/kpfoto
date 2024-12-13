document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('serviceForm');
    const checkboxes = document.querySelectorAll('input[name="service"]');
    const dateInput = document.querySelector('input[name="date"]');
    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('errorMessage');
    const errorDate = document.getElementById('errorDate');
    const errorName = document.getElementById('errorName');
    const lightbox = document.getElementById('lightbox');
    const closeLightbox = document.getElementById('closeLightbox');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
  
      // Validering for checkbokse
      let isChecked = false;
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          isChecked = true;
        }
      });
  
      if (!isChecked) {
        errorMessage.style.display = 'block';
        isValid = false;
      } else {
        errorMessage.style.display = 'none';
      }
  
      // Validering for dato
      if (!dateInput.value) {
        errorDate.style.display = 'block';
        isValid = false;
      } else {
        errorDate.style.display = 'none';
      }
  
      // Validering for navn
      if (!nameInput.value.trim()) {
        errorName.style.display = 'block';
        isValid = false;
      } else {
        errorName.style.display = 'none';
      }
  
      // Hvis formularen ikke er valid
      if (!isValid) {
        event.preventDefault();
        return;
      }
  
      // Forhindrer formularens standardindsendelse
      event.preventDefault();
  
      // Vis lightbox
      lightbox.style.display = 'flex';
    });
  
    // Luk lightbox, når "Luk" knappen trykkes
    closeLightbox.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  });
  