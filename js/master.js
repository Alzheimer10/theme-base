$(function() {


	// Loading page
	loaderPage = function() {
		$(window).load(function(){
			$(".az-loader").fadeOut("slow");
			$('body').removeClass('scroll-loader');
		});
	};
	loaderPage();
});