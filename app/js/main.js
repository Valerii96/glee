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
		infinite: false,
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
	starSvg: '<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6772 5.06713L9.25634 6.98194L10.0222 9.94074C10.0574 10.0648 10.0623 10.1948 10.0364 10.3209C10.0105 10.447 9.95448 10.5657 9.87276 10.668C9.79104 10.7703 9.68573 10.8534 9.56495 10.911C9.44416 10.9685 9.3111 10.999 9.176 11C9.01054 10.9993 8.84879 10.9533 8.71004 10.8676L6.00536 9.24306H5.99464L3.48277 10.7556C3.3205 10.8529 3.13138 10.902 2.9396 10.8965C2.74782 10.8911 2.56212 10.8314 2.40625 10.725C2.24566 10.6136 2.12404 10.4588 2.05718 10.2808C1.99032 10.1028 1.98131 9.90979 2.03134 9.72685L2.75437 7.02268L0.322833 5.06713C0.184881 4.95752 0.0846211 4.81114 0.0349814 4.64684C-0.0146583 4.48255 -0.011402 4.30789 0.0443303 4.14537C0.0986022 3.98531 0.202138 3.84441 0.341543 3.74091C0.480948 3.63741 0.649808 3.57607 0.82628 3.56481L3.98621 3.3713L5.18592 0.52963C5.25025 0.374002 5.36224 0.240321 5.50739 0.145895C5.65253 0.0514679 5.82414 0.000643135 6 0C6.17586 0.000643135 6.34747 0.0514679 6.49261 0.145895C6.63776 0.240321 6.74975 0.374002 6.81408 0.52963L7.99236 3.35602L11.1737 3.56481C11.3504 3.57538 11.5196 3.63647 11.6592 3.74007C11.7987 3.84367 11.902 3.98494 11.9557 4.14537C12.0114 4.30789 12.0147 4.48255 11.965 4.64684C11.9154 4.81114 11.8151 4.95752 11.6772 5.06713V5.06713Z"/></svg>'
});
$(".details-item__raiting").rateYo({
	starWidth: "18px",
	readOnly: true,
	normalFill: "#d6d6d6",
	ratedFill: "#ffcc00",
	starSvg: '<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5158 7.83102L13.8845 10.7903L15.0333 15.363C15.0861 15.5546 15.0934 15.7556 15.0545 15.9505C15.0157 16.1453 14.9317 16.3288 14.8091 16.4869C14.6866 16.645 14.5286 16.7735 14.3474 16.8624C14.1662 16.9514 13.9667 16.9984 13.764 17C13.5158 16.9989 13.2732 16.9279 13.0651 16.7954L9.00803 14.2847H8.99197L5.22415 16.6222C4.98075 16.7727 4.69706 16.8485 4.4094 16.8401C4.12174 16.8317 3.84318 16.7394 3.60937 16.575C3.36849 16.4028 3.18605 16.1636 3.08576 15.8885C2.98547 15.6134 2.97197 15.3151 3.04701 15.0324L4.13156 10.8532L0.484249 7.83102C0.277321 7.66163 0.126932 7.43539 0.0524721 7.18149C-0.0219874 6.92758 -0.017103 6.65764 0.0664954 6.40648C0.147903 6.15911 0.303206 5.94137 0.512314 5.78141C0.721422 5.62145 0.974712 5.52665 1.23942 5.50926L5.97932 5.21018L7.77887 0.818518C7.87538 0.578003 8.04337 0.371406 8.26108 0.225473C8.47879 0.0795413 8.73621 0.000993936 9 0C9.26379 0.000993936 9.52121 0.0795413 9.73892 0.225473C9.95663 0.371406 10.1246 0.578003 10.2211 0.818518L11.9885 5.18657L16.7606 5.50926C17.0256 5.52559 17.2794 5.62 17.4887 5.78011C17.698 5.94022 17.8531 6.15855 17.9335 6.40648C18.0171 6.65764 18.022 6.92758 17.9475 7.18149C17.8731 7.43539 17.7227 7.66163 17.5158 7.83102V7.83102Z"/></svg>'
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


