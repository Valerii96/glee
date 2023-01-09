$(function (){

$('.details-tabs__link').on('click', function (e) {
	e.preventDefault();
	$('.details-tabs__link').removeClass('details-tabs__link--active');
	$(this).addClass('details-tabs__link--active');
	$('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
	$($(this).attr('href')).addClass('details-tabs__content-item--active');
	
})




	$('.top-slider__wrapper').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
  	autoplaySpeed: 2000,
		dotsClass: 'top-slider__dots'
	});

	$('.details-slide__thumb').slick({
		asNavFor: '.details-slide__big',
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
		arrows: false,
	});
	$('.details-slide__big').slick({
		asNavFor: '.details-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true
	});

	$('.related__items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		prevArrow: $('.related__btn-prew'),
		nextArrow: $('.related__btn-next'),
	});

$('.details-item__number').styler();



$('.filters-price__input').ionRangeSlider({
	type: "double",
	prefix: "$",
	onStart: function (data){
		$('.filters-price__from').text(data.from);
		$('.filters-price__to').text(data.to);
	},
	onChange: function (data) {
		$('.filters-price__from').text(data.from);
		$('.filters-price__to').text(data.to);
},
});

$(".filters-recent__rate").rateYo({
	starWidth: "12px",
	readOnly: true,
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
});
$(".details-item__raiting").rateYo({
	starWidth: "18px",
	readOnly: true,
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
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


