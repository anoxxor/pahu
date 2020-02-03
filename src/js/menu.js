$('.menu-nav').append(
  $('.nav__item').clone() 
    .removeClass('nav__item').addClass('menu-nav__item'));

$('.show-menu-button').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.menu').removeClass('hidden');
  $('body').addClass('locked');
});

$('.hide-menu-button').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.menu').addClass('hidden');
  $('body').removeClass('locked');
});