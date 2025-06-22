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


const toggleButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleButton.addEventListener('click', () => {
      if (mobileMenu.classList.contains('scale-y-0')) {
        requestAnimationFrame(() => {
          mobileMenu.classList.remove('scale-y-0');
          mobileMenu.classList.add('scale-y-100', 'flex');
        });
      } else {
        mobileMenu.classList.remove('scale-y-100');
        mobileMenu.classList.add('scale-y-0');
        setTimeout(() => {
          mobileMenu.classList.remove('flex');
        }, 300);
      }
    });