document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const closeLightboxButton = document.getElementById('closeLightbox');
    const form = document.getElementById('serviceForm');

    // Lukker lightbox ved klik på "LUK"
    closeLightboxButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Forhindrer andre javascripts i at afbryde "luk"-handlingen
        event.preventDefault(); // Forhindrer standardadfærd
        console.log("Luk-knappen blev trykket"); // Til at se i konsol
        lightbox.style.display = 'none';
    });

    // Viser lightbox ved korrekt formularindsendelse
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const servicesChecked = Array.from(form.elements['service']).some(input => input.checked);
        const dateSelected = form.elements['date'].value.trim() !== '';
        const nameEntered = form.elements['name'].value.trim() !== '';

        // Validering
        if (!servicesChecked || !dateSelected || !nameEntered) {
            alert('Udfyld alle felter korrekt, før du sender forespørgslen.');
            return;
        }

        // Viser lightboxen
        lightbox.style.display = 'flex';
    });
});
