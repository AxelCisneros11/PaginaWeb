function ocultarElementoEnPantallaPequena() {
    var elemento = document.querySelector('.d-flex');
    if (window.matchMedia("(max-width: 768px)").matches) {
      elemento.classList.add('oculto');
    } else {
      elemento.classList.remove('oculto');
    }
  }
  
  // Ejecutar la función al cargar la página y cuando se cambie el tamaño de la ventana
  window.addEventListener('DOMContentLoaded', ocultarElementoEnPantallaPequena);
  window.addEventListener('resize', ocultarElementoEnPantallaPequena);