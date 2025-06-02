//  const carousels = document.getElementsByClassName('carousel');

//  for (const carousel of carousels){
//   const images = carousel.children;
//   let index = 0;

//   function updateCarousel() {
//     const width = images[0].clientWidth;
//     index = (index + 1) % images.length;
//     carousel.style.transform = `translateX(-${index * width}px)`;
//   }

//   setInterval(updateCarousel, 3000);
//  }

const carousels = document.getElementsByClassName('carousel');

for (const carousel of carousels) {
  const images = carousel.children;
  let index = 0;

  function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
  }

  function nextImage() {
    index = (index + 1) % images.length;
    updateCarousel();
  }

  function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  }

  // Auto slide
  let interval = setInterval(nextImage, 3000);

  // Controls
  document.getElementById('nextBtn').addEventListener('click', () => {
    nextImage();
    resetInterval();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    prevImage();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 12000);
  }

  // Resize support
  window.addEventListener('resize', updateCarousel);
}
