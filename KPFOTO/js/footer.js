document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.querySelector('.placeholder')
    const footer = document.querySelector('footer')
  
    // Ved DOMContentLoaded, sætter den placeholder height til at matche footer height
    updateHeight()
  
    window.addEventListener('resize', onResize)
  
    // On window resize, update placeholder height to be equal to footer height
    function onResize() {
      updateHeight()
    }
  
    function updateHeight() {
      // Placeholder should always match footer height
      placeholder.style.height = `${footer.offsetHeight}px`
    }
  })
  