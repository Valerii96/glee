$(function (){
	$('.top-slider__wrapper').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
  	autoplaySpeed: 2000,
		dotsClass: 'top-slider__dots'
	});




var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
	controls: {
		scope: 'local'
	}
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);




});


