$(function(){
  $(".menu a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 300);
	});

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
        
        
    });

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="image/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="image/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:false
              }
            },
        ]
    });
    var mixer = mixitup('.portfolio__content');

});