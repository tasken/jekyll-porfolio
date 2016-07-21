jQuery(function ($) {
    $('.slider').sss({
        slideShow: false
    });

		$('.menu-link').click(function() {
   		$('body').toggleClass('no-scroll');
   	});

});
