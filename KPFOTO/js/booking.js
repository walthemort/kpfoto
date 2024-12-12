
/* Giver dig en besked når du trykker send forespørgsel */
document.querySelector('.booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Din forespørgsel er sendt!');
});
