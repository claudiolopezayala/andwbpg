const carouselSections = document.querySelectorAll('.carousel');

carouselSections.forEach((carousel, idx) => {
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

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 12000);
  }

  // Find the corresponding buttons (assumes order in HTML matches)
  const carouselWrapper = carousel.parentElement;
  const nextBtn = carouselWrapper.querySelector('.carousel-next');
  const prevBtn = carouselWrapper.querySelector('.carousel-prev');

  nextBtn.addEventListener('click', () => {
    nextImage();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevImage();
    resetInterval();
  });

  // Update on resize
  window.addEventListener('resize', updateCarousel);
});
