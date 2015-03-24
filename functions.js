var main = (function() {

	function toggleMenuActiveClass() {
		$('.menu-item').removeClass('active');
		$(this).addClass('active');
	}
	function goToSlide(e) {
		var slide = parseInt($(e.currentTarget).attr('data-slide-to'));
		$('#myCarousel').carousel(slide);
	}

	$('.menu-item').click(toggleMenuActiveClass);
	$('.indicator').click(goToSlide);
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	    var nextSlide = $(e.relatedTarget).index(),
	    	btns = $('.indicators'),
	    	active = btns.find("[data-slide-to='" + nextSlide + "']");

	    $('.indicators li').removeClass('active-slide');
	    active.addClass('active-slide');
	});
});
$(document).ready(main);