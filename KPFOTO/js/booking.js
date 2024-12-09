document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("booking-form");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Stop form fra at sende data
  
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const service = document.getElementById("service").value;
  
      confirmation.textContent = `Tak, ${name}! Din booking er registreret for ${service} den ${date} kl. ${time}. Vi sender dig en bekræftelse på din e-mail.`;
      confirmation.classList.remove("hidden");
  
      form.reset(); // Nulstil formularen
    });
  });
  