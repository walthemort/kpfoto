document.getElementById('kodeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const kode = document.getElementById('kundeKode').value.trim();
    const billedeproeverSection = document.getElementById('billedeproever');
    const billederContainer = document.getElementById('billeder-container');
    const bestillingsformular = document.getElementById('bestillingsformular');
  
    const koder = {
      'KODE123': ['2.webp', '4.webp', '6.webp'],
      'FOTO2024': ['image4.webp', 'image5.webp', 'image6.webp']
    };
  
    if (koder[kode]) {
      billedeproeverSection.style.display = 'block';
      bestillingsformular.style.display = 'block';
      billederContainer.innerHTML = ''; // Ryd tidligere billeder
  
      // Indsæt billeder med numre
      koder[kode].forEach((src, index) => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const caption = document.createElement('figcaption');
  
        img.src = `assets/img/${src}`;
        img.alt = `Billede ${index + 1}`;
        caption.textContent = `Nr. ${index + 1}`;
  
        figure.appendChild(img);
        figure.appendChild(caption);
        billederContainer.appendChild(figure);
      });
    } else {
      alert('Ugyldig kode. Prøv venligst igen.');
    }
  });
  
  // Tilføj flere billeder
  document.getElementById('tilfoejBillede').addEventListener('click', () => {
    const container = document.getElementById('billedeBestillingContainer');
    const newFieldset = document.querySelector('.billedeBestilling').cloneNode(true);
    container.appendChild(newFieldset);
  });
  