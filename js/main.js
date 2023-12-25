$(document).ready(function () {
  const $sandwichMenu = $(".sandwich_menu");
  const $menuBtn = $(".header__menu_btn");
  const $menuBtnClose = $(".header__menu_btn_close");
  const $telNumberInput = $("input[id='tel-number']");

  function toggleActiveElements() {
    $sandwichMenu.add($menuBtn).add($menuBtnClose).toggleClass("active");
  }

  function addActiveClass() {
    $menuBtn.add($sandwichMenu).add($menuBtnClose).addClass("active");
  }

  function removeActiveClass() {
    $menuBtnClose.add($sandwichMenu).add($menuBtn).removeClass("active");
  }

  $menuBtn.add(".header__sandwich_btn").click(toggleActiveElements);
  $menuBtn.click(addActiveClass);
  $menuBtnClose.click(removeActiveClass);

  $telNumberInput.mask("+7 (999) 999-99-99");

  const pathsToActivateChangeBlue = [
    "/product",
    "/services",
    "/news",
    "/contacts",
    "/thx",
    "/404",
  ];
  const shouldActivateChangeBlue = pathsToActivateChangeBlue.some((path) =>
    window.location.pathname.includes(path)
  );
  const itemsWillBlue = `.header__logo,
                          .swiper-pagination-bullet,
                          .header__sandwich_btn,
                          .header__contacts,
                          .header__menu_btn,
                          .year`;

  if (shouldActivateChangeBlue) {
    $(itemsWillBlue).addClass("change_blue");
  }
});
