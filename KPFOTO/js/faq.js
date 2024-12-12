// Vælg alle spørgsmål
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop genneem hvert spørgsmål
faqQuestions.forEach(question => {
    // Tilføjer em click event listener til hvert spørgsmål
    question.addEventListener('click', () => {
        // Lukker alle de andre spørgsmål, undtagen den der er klikket på
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active'); // Fjerner 'active' klassen for at nulstille pilens orientering.
                item.nextElementSibling.style.maxHeight = null; // Lukker svaret
            }
        });

        // Skifter 'active' klassen til så pilen drejer
        question.classList.toggle('active');

        // Select the corresponding answer section
        // Vælger det rigtige svar
        const answer = question.nextElementSibling;

        // Tjekker om svaret allerede er åbent
        if (answer.style.maxHeight) {
            // Hvis åbent, lukker den her ved at justere maxheight
            answer.style.maxHeight = null;
        } else {
            // Hvis lukket , sætter max-height til scrollHeight for at udvide
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
