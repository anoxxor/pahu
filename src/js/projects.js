(() => {

  let slidesData = [
    {
      image: '/img/dist/projects1-orig.jpg',
      imagePosition: 'left bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects2-orig.jpg',
      imagePosition: '25% bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects3-orig.jpg',
      imagePosition: '70% bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects4-orig.jpg',
      imagePosition: '40% bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects2-orig.jpg',
      imagePosition: '25% bottom',
      imageSizing: 'cover'
    },  
    {
      image: '/img/dist/projects3-orig.jpg',
      imagePosition: '70% bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects4-orig.jpg',
      imagePosition: '40% bottom',
      imageSizing: 'cover'
    },
    {
      image: '/img/dist/projects3-orig.jpg',
      imagePosition: '70% bottom',
      imageSizing: 'cover'
    },
  ];

  let sliderTemplate = $('.templates .projects-slider__item');

  for (let slideData of slidesData) {
    let curSlide = sliderTemplate.clone();
    if (slideData.image) {
      let position = slideData.imagePosition ? slideData.imagePosition : '';
      let sizing = slideData.imageSizing ? slideData.imageSizing : '';
      let sep = position && sizing ? '/' : '';
      curSlide.css('background', `${position} ${sep} ${sizing} url("${slideData.image}")`);
    }
    if (slideData.header) {
      // ...
    }
    if (slideData.category) {
      // ...
    }
    $('.projects-slider').append(curSlide);
  }

  $('.projects-slider').slick({
    prevArrow: '<div class="projects-slider__arrow projects-slider__arrow--prev"><i class="fal fa-angle-left"></i></div>',
    nextArrow: '<div class="projects-slider__arrow projects-slider__arrow--next"><i class="fal fa-angle-right"></i></div>',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

})();
