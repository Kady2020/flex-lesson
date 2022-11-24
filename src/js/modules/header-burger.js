$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__burger,.header__menu,.header__link,.header__button").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.header__link').click(function (event) {
    $(".header,.header__burger,.header__menu,.header__link,.header__button").removeClass('active');
    $('body').removeClass('lock');
  });
});
