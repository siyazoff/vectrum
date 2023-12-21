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

  if (window.location.pathname.includes("/product")) {
    $(
      `.header__logo, 
      .header__sandwich_btn, 
      .header__contacts, 
      .header__menu_btn, 
      .year`
    ).addClass("change_blue");
  }
});
