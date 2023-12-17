let swiperMain = null;

function initSwiper() {
  const swiperMainMenu = [
    "Vectrum&nbsp;PRO",
    "Препараты",
    "О&nbsp;компании",
    "Услуги",
    "Новости",
    "Контакты",
  ];

  swiperMain = new Swiper(".swiper-main", {
    direction: "vertical",
    mousewheel: {
      releaseOnEdges: true,
    },
    speed: 1000,
    slidesPerView: 1,
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

    breakpoints: {
      320: {
        freeMode: true,
        slidesPerView: "auto",
        autoHeight: true,
      },
      768: {
        slidesPerView: "auto",
        freeMode: true,
        autoHeight: true,
        slidesPerView: 1,
      },
      1440: {},
    },
  });
}

function destroySwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function handleSwiper() {
  if (window.innerWidth <= 768) {
    destroySwiper();
  } else {
    initSwiper();
  }
}

handleSwiper();

window.addEventListener("resize", function () {
  handleSwiper();
});
