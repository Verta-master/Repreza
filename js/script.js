//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

//Slider
var mySwiper = new Swiper ('.author__slider', {
  pagination: {
    el: '.author__pagination',
    clickable: true,
  },
  preventClicks: false,
  preventClicksPropagation: false,
});

//Lessons
$('.lesson__btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('lesson__btn--opened');
});
