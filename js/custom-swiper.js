const swiperMainMenu = [
  "Vectrum&nbsp;PRO",
  "Препараты",
  "О&nbsp;компании",
  "Услуги",
  "Новости",
  "Контакты",
];

const swiperMain = new Swiper(".swiper-main", {
  direction: "vertical",
  mousewheel: {
    releaseOnEdges: true,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, "-100%", 0],
    },
    next: {
      translate: [0, "200%", 0],
    },
  },
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' + className + '">' + swiperMainMenu[index] + "</div>"
      );
    },
  },

  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex;
      let changeBlueItems = `.header__logo,
                            .swiper-pagination-bullet,
                            .header__sandwich_btn,
                            .header__contacts,
                            .header__menu_btn,
                            .year`;

      if ([1, 3, 4, 5].includes(activeIndex)) {
        $(changeBlueItems).addClass("change_blue");
      } else {
        $(changeBlueItems).removeClass("change_blue");
      }
    },
  },
});
