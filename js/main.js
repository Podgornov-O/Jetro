$(function(){
$('.slider__inner-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png" alt=""></img> </button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow.png" alt=""></img> </button>',
  fade: true,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

  responsive: [
    {
      breakpoint: 621,
      settings: {
        arrows: false
        
    }
   
}]


});

$('.slider__inner-nav')
  .on('init', function(event, slick) {
    $('.slider__inner-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 6,
    slidesToScroll: 6,    
    dots: false,
    focusOnSelect: false,
    
    infinite: false,
    responsive: [{
      breakpoint: 1025,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }, {
      breakpoint: 621,
      settings: {              
        slidesToShow: 3,
        slidesToScroll: 3,
     }
    }, {
      breakpoint: 421,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
   }
    }]
  });

$('.slider__inner-top').on('afterChange', function(event, slick, currentSlide) {
  $('.slider__inner-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider__inner-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider__inner-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider__inner-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider__inner-top').slick('slickGoTo', goToSingleSlide);
});

$('.header__menu-btn').on('click', function(){
  $('.header__menu ul').slideToggle();  
});

});