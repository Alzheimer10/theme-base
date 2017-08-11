$(function() {
	// Loading page
	var loaderPage = function() {
		$(window).load(function(){
			$(".ac-loader").fadeOut("slow");
			$('body').removeClass('ac-scroll-loader');
		});
	};

	var goToTop = function() {
		$(window).scroll(function(){
			if ($(window).scrollTop() > 200)
				$('.ac-gototop').addClass('active');
			else
				$('.ac-gototop').removeClass('active');
		});
	};

	loaderPage();
	goToTop();
});