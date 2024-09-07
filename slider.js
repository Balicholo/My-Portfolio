// SLIDER
new Swiper('.designs-wrapper', {
    loop: true,
    spaceBetween: 20,
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive break points
    breakpoints: {
    0: {
        slidesPerView: 2
    },
    767: {
        slidesPerView: 3
    },
    768: {
        slidesPerView: 4
    },
    1024: {
        slidesPerView: 5
    },
  }
  })