document.getElementById('kodeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const kode = document.getElementById('kundeKode').value.trim().toUpperCase();
    const billedeproeverSection = document.getElementById('billedeproever');
    const billederContainer = document.getElementById('billeder-container');
  
    // Definer mulige koder og tilhørende billeder
    const kodeData = {
      'KODE123': ['assets/img/2.png', 'assets/img/3.png'],
      'FOTO2024': ['assets/img/sample3.jpg', 'assets/img/sample4.jpg']
    };
  
    if (kodeData[kode]) {
      // Vis billedeprøver sektion
      billedeproeverSection.style.display = 'block';
      billederContainer.innerHTML = '';
  
      // Indsæt billeder for den kode
      kodeData[kode].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Billede prøve';
        billederContainer.appendChild(img);
      });
  
    } else {
      // Hvis koden ikke findes, skjul sektionen og giv evt. en besked
      billedeproeverSection.style.display = 'none';
      alert('Koden er ikke gyldig. Prøv venligst igen.');
    }
  });
  