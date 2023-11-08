document.querySelector('.next').addEventListener('click', function() {
  // Desplazar hacia la derecha
  let carouselWindow = document.querySelector('.carousel-window');
  carouselWindow.scrollBy({ left: 250, behavior: 'smooth' }); // Ajusta 250 al tamaño de tus imágenes o al desplazamiento deseado
});

document.querySelector('.prev').addEventListener('click', function() {
  // Desplazar hacia la izquierda
  let carouselWindow = document.querySelector('.carousel-window');
  carouselWindow.scrollBy({ left: -250, behavior: 'smooth' }); // Ajusta -250 como arriba
});
