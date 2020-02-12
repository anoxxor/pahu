"use strict";

(function () {
  $('.designer').append($('.templates .designer__texture').clone());
})();

(function () {
  var postsData = [{
    image: '/img/dist/blog1-md.jpg',
    header: 'our new workspace'
  }, {
    image: '/img/dist/blog2-md.jpg',
    header: 'modern collection'
  }, {
    image: '/img/dist/blog3-md.jpg',
    header: 'beautiful things'
  }];
  var postTemplate = $('.templates .post');
  var blogContainer = $('.blog__posts');

  for (var _i = 0, _postsData = postsData; _i < _postsData.length; _i++) {
    var postData = _postsData[_i];
    var curPost = postTemplate.clone();
    if (postData.image) curPost.children('.post__image').prop('src', postData.image);
    if (postData.header) curPost.children('.post__content').children('.post__header').text(postData.header);

    if (postData.text) {}

    blogContainer.append(curPost);
  }
})();

function debug() {
  var mode = 'border'; // border | outline

  $('html').prepend('<style>body.debug--border * { border:1px solid red; }body.debug--border div { border:1px solid green; }body.debug--border a { border:1px solid #6A5ACD; }body.debug--border img,body.debug--border svg { border:1px solid #FF0; }body.debug--outline * { outline:1px solid red; }body.debug--outline div { outline:1px solid green; }body.debug--outline a { outline:1px solid #6A5ACD; }body.debug--outline img,body.debug--outline svg { outline:1px solid #FF0; }#debug-button.active { background-color:#2ECC71; }#debug-button { position:fixed; top:0; left:0; z-index:99999; opacity:0.5; outline:none; border:none; }#debug-mode-button { position:fixed; top:20; left:0; z-index:99999; opacity:0.5; outline:none; border:none; }</sytle>');
  var debugButton$ = $('<button id="debug-button">debug</button>');
  $('body').append(debugButton$);
  var switchModeButton$ = $("<button id=\"debug-mode-button\">".concat(mode, "</button>"));
  $('body').append(switchModeButton$);
  debugButton$.click(function () {
    console.log('emit');
    var this$ = $(this);
    this$.toggleClass('active');
    $('body').toggleClass('debug--' + mode);
  });
  switchModeButton$.click(function () {
    $('body').removeClass('debug--' + mode);
    mode === 'border' ? mode = 'outline' : mode = 'border';
    $('body').addClass('debug--' + mode);
    $(this).text(mode);
    debugButton$.addClass('active');
  });
}

(function () {
  $('.header-slider').slick({
    prevArrow: '<div class="header-slider__arrow header-slider__arrow--prev"><i class="fal fa-angle-left"></i></div>',
    nextArrow: '<div class="header-slider__arrow header-slider__arrow--next"><i class="fal fa-angle-right"></i></div>'
  });
})();

$('.menu-nav').append($('.nav__item').clone().removeClass('nav__item').addClass('menu-nav__item'));
$('.show-menu-button').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.menu').removeClass('hidden');
  $('body').addClass('locked');
});
$('.hide-menu-button').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.menu').addClass('hidden');
  $('body').removeClass('locked');
});
$(window).on('load', function () {
  setTimeout(function () {
    $("[data-scroll-target]").each(function () {
      var curItem = $(this);
      var targetOffset = $(curItem.data("scroll-target")).offset().top;
      curItem.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("html, body").stop().animate({
          scrollTop: targetOffset
        }, 1000);
      });
    });
  }, 200);
});

(function () {
  var slidesData = [{
    image: '/img/dist/projects1-orig.jpg',
    imagePosition: 'left bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects2-orig.jpg',
    imagePosition: '25% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects3-orig.jpg',
    imagePosition: '70% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects4-orig.jpg',
    imagePosition: '40% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects2-orig.jpg',
    imagePosition: '25% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects3-orig.jpg',
    imagePosition: '70% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects4-orig.jpg',
    imagePosition: '40% bottom',
    imageSizing: 'cover'
  }, {
    image: '/img/dist/projects3-orig.jpg',
    imagePosition: '70% bottom',
    imageSizing: 'cover'
  }];
  var sliderTemplate = $('.templates .projects-slider__item');

  for (var _i2 = 0, _slidesData = slidesData; _i2 < _slidesData.length; _i2++) {
    var slideData = _slidesData[_i2];
    var curSlide = sliderTemplate.clone();

    if (slideData.image) {
      var position = slideData.imagePosition ? slideData.imagePosition : '';
      var sizing = slideData.imageSizing ? slideData.imageSizing : '';
      var sep = position && sizing ? '/' : '';
      curSlide.css('background', "".concat(position, " ").concat(sep, " ").concat(sizing, " url(\"").concat(slideData.image, "\")"));
    }

    if (slideData.header) {// ...
    }

    if (slideData.category) {// ...
    }

    $('.projects-slider').append(curSlide);
  }

  $('.projects-slider').slick({
    prevArrow: '<div class="projects-slider__arrow projects-slider__arrow--prev"><i class="fal fa-angle-left"></i></div>',
    nextArrow: '<div class="projects-slider__arrow projects-slider__arrow--next"><i class="fal fa-angle-right"></i></div>',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
})();

(function () {
  var productsData = [{
    image: 'img/dist/chair1-orig.jpg',
    isNew: true
  }, {
    image: 'img/dist/chair6-orig.jpg'
  }, {
    image: 'img/dist/chair2-orig.jpg'
  }, {
    image: 'img/dist/chair3-orig.jpg',
    isNew: true
  }, {
    image: 'img/dist/chair4-orig.jpg'
  }, {
    image: 'img/dist/chair5-orig.jpg'
  }, {
    image: 'img/dist/chair6-orig.jpg'
  }, {
    image: 'img/dist/chair1-orig.jpg',
    isNew: true
  }];
  var shopContainer$ = $('.shop__items');
  var template$ = $('.templates .product');

  for (var _i3 = 0, _productsData = productsData; _i3 < _productsData.length; _i3++) {
    var productData = _productsData[_i3];
    var productDist = {};

    for (var productProp in productData) {
      productDist[productProp] = productData[productProp];
    }

    var templateClone$ = template$.clone();
    if (productDist.image) templateClone$.children('.product__image').prop('src', productDist.image);
    if (productDist.header) templateClone$.children('.product__header').text(productDist.header);
    if (productDist.description) templateClone$.children('.product__description').text(productDist.description);
    if (productDist.price) templateClone$.children('.product__price').text(productDist.price);
    if (productDist.isNew) templateClone$.addClass('is-new');
    shopContainer$.append(templateClone$);
  }
})();