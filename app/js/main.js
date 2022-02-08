(function ($) {
	$(document).ready(function () {

		$(".cross").hide();
		$(".menu").hide();

		$(".hamburger").click(function () {
			console.log(6666)
			$(".menu").slideToggle("slow");
			$(".hamburger").hide();
			$(".cross").show()
		});

		$(".cross").click(function () {
			$(".menu").slideToggle("slow", function () {
				$(".cross").hide();
				$(".hamburger").show();
			});
		});

		// $('.content_toggle').click(function(){
		// 	$('.content_block').slideToggle(300, function(){
		// 		if ($(this).is(':hidden')) {
		// 			$('.content_toggle').html('Показать текст');
		// 			$('.content_toggle').removeClass('open');
		// 		} else {
		// 			$('.content_toggle').html('Скрыть текст');
		// 			$('.content_toggle').addClass('open');
		// 		}							
		// 	});
		// 	return false;
		// });

		$(".services__block").on('click', function () {
			$(this).find(".services__tab_plus").toggleClass('open-tab')
			$(this).parent().find(".tab-content").slideToggle();
		});

		$(".menu").on("click", function () {
			$(".dropdown-menu").slideToggle(300);
			$(this).toggleClass("active");
			$(".navbar").toggleClass('active');
			let x = document.getElementById("myLinks");

			if (x.style.display == "flex") {
				x.style.display = "none";
			} else {
				x.style.display = "flex";
			}
		});
		$('.next').click(function () {
			var currentImage = $('.slide.curry');
			var currentImageIndex = $('.slide.curry').index();
			var nextImageIndex = currentImageIndex + 1;
			var nextImage = $('.slide').eq(nextImageIndex);
			currentImage.fadeOut(1000);
			currentImage.removeClass('curry');
			if (nextImageIndex == ($('.slide:last').index() + 1)) {
				$('.slide').eq(0).fadeIn(1000);
				$('.slide').eq(0).addClass('curry');
			} else {
				nextImage.fadeIn(1000);
				nextImage.addClass('curry');
			}
		});

		$('.prev').click(function () {
			var currentImage = $('.slide.curry');
			var currentImageIndex = $('.slide.curry').index();
			var prevImageIndex = currentImageIndex - 1;
			var prevImage = $('.slide').eq(prevImageIndex);

			currentImage.fadeOut(1000);
			currentImage.removeClass('curry');
			prevImage.fadeIn(1000);
			prevImage.addClass('curry');
		});
		$(".benefits__block-first").click(function () {
			$("this").toggleClass(".benefits__block_text-second ");
		});
		$('.benefits__block-first').hover(
			function () {
				$(this).addClass('.benefits__block_text-second');
			},
			function () {
				$(this).removeClass('benefits__block_text-second');
			}
		);

		$('.testimonials__next').click(function () {
			var currentImage = $('.testimonials__block-second.testimonials__active');
			var currentImageIndex = $('.testimonials__block-second.testimonials__active').index();
			var nextImageIndex = currentImageIndex + 1;
			var nextImage = $('.testimonials__block-second').eq(nextImageIndex);
			currentImage.removeClass('testimonials__active');
			if (nextImageIndex == ($('.testimonials__block-second:last').index() + 1)) {
				$('.testimonials__block-second').eq(0).fadeIn(10);
				$('.testimonials__block-second').eq(0).addClass('testimonials__active');
			} else {
				nextImage.addClass('testimonials__active');
			}
		});

		$('.testimonials__prev').click(function () {
			var currentImage = $('.testimonials__block-second.testimonials__active');
			var currentImageIndex = $('.testimonials__block-second.testimonials__active').index();
			var prevImageIndex = currentImageIndex - 1;
			var prevImage = $('.testimonials__block-second').eq(prevImageIndex);

			currentImage.removeClass('testimonials__active');
			prevImage.addClass('testimonials__active');
		});

		$('#first').click(function () {
			$('.benefits__block_text-first ').toggle();
		});
		$('#second').click(function () {
			$('.benefits__block_text-second ').toggle();
			
		});
		$('#third').click(function () {
			$('.benefits__block_text-third ').toggle();
			
		});
	});
})(jQuery);