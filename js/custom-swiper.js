let swiperMain = null;
let swiperVaccine = null;

function initSwiperPage() {
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
  });

  const swiperVaccineMenu = [
    "Для&nbsp;птиц",
    "Иммунокомплексная",
    "Векторные",
    "Живые",
    "Инактивированные",
    "Контакты",
  ];

  swiperVaccine = new Swiper(".swiper-main-vaccine", {
    direction: "vertical",
    mousewheel: {
      releaseOnEdges: true,
    },
    freeMode: false,
    speed: 1000,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '">' +
          swiperVaccineMenu[index] +
          "</div>"
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

        if ([1].includes(activeIndex)) {
          $(changeBlueItems).addClass("change_blue");
        } else if ([0].includes(activeIndex)) {
          $(changeBlueItems).removeClass("change_blue");
        } else {
          $(changeBlueItems).addClass("change_blue");
        }
      },
    },
  });
}

function destroySwiperPage() {
  if (swiperMain !== null) {
    swiperMain.destroy(true, true);
    swiperMain = null;
  }

  if (swiperVaccine !== null) {
    swiperVaccine.destroy(true, true);
    swiperVaccine = null;
  }
}

function handleSwiper() {
  if (window.innerWidth <= 768) {
    destroySwiperPage();
  } else {
    initSwiperPage();
  }
}

handleSwiper();

window.addEventListener("resize", function () {
  handleSwiper();
});

const buildSwiperSlider = (sliderElm) => {
  let sliderIdentifier = sliderElm.dataset.id;

  return new Swiper(`.swiper-immunocomplex-${sliderIdentifier}`, {
    slidesPerView: 3,
    direction: "horizontal",
    grid: {
      rows: 3,
      fill: "row",
    },
    grabCursor: true,
    spaceBetween: 0,
    pagination: {
      el: `.swiper-immunocomplex-pagination-${sliderIdentifier}`,
      type: "progressbar",
    },
    navigation: {
      nextEl: `.swiper-immunocomplex-button-next-${sliderIdentifier}`,
      prevEl: `.swiper-immunocomplex-button-prev-${sliderIdentifier}`,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.25,
        grid: false,
      },
      768: {},
      1440: {},
    },
  });
};

// Get all of the swipers on the page
const allSliders = document.querySelectorAll(".swiper-immunocomplex");

// Loop over all of the fetched sliders and apply Swiper on each one.
allSliders.forEach((slider) => buildSwiperSlider(slider));
