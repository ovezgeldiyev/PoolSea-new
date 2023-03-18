// swiper start
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  keyboard: {
    enabled: true,
  },
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    snapOnRelease: true,
    dragSize: "auto",
  },
  slidesPerView: 4.5,
  spaceBetween: 0,
  loop: false,
  centeredSlides: false,
  breakpoints: {
    110: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    440: {
      slidesPerView: 2.3,
      spaceBetween: 5,
    },
    540: {
      slidesPerView: 2.7,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3.4,
      spaceBetween: 5,
    },
    800: {
      slidesPerView: 4.1,
      spaceBetween: 5,
    },
    1180: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
    1600: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },
});

var swiperTitle = new Swiper(".mySwiper3", {
  draggable: false,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 42,
  dots: false,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// var swiperItem = new Swiper(".mySwiper4", {
//   speed: 600,
//   // direction: vertical,
//   draggable: true,
//   grabCursor: true,
//   freeMode: true, 
//   allowTouchMove: false,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   slidesPerView: 5,
//   spaceBetween: 24,
//   breakpoints: {
//     110: {
//       slidesPerView: 5,
//       spaceBetween: 24,
//     },
//   },
// });

// swiperTitle.controller.control = this.swiperItem;
// // swiper end
