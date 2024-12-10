document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Toggle display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });