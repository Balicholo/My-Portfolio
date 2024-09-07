// SLIDER 2
new Swiper('.tools-wrapper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 5,

// If you want to enable autoplay
autoplay: {
  delay: 1500, // seconds
  disableOnInteraction: false, // Keeps autoplay running even after user interaction
},

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // Responsive break points
  breakpoints: {
  0: {
      slidesPerView: 3
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