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

		$(".services__block").on('click', function () {
			$(this).find(".services__tab_plus").toggleClass('open-tab')
			$(this).parent().find(".tab-content").slideToggle();
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
		
		
		$('.testimonials__next').click(function () {
			var currentImage = $('.testimonials__block-second.testimonials__active');
			var currentImageIndex = $('.testimonials__block-second.testimonials__active').index();
			var nextImageIndex = currentImageIndex + 1;
			var nextImage = $('.testimonials__block-second').eq(nextImageIndex);
			currentImage.fadeOut();
			currentImage.removeClass('testimonials__active');
			if (nextImageIndex == ($('.testimonials__block-second:last').index() + 1)) {
				$('.testimonials__block-second').eq(0).fadeIn();
				$('.testimonials__block-second').eq(0).addClass('testimonials__active');
			} else {
				nextImage.fadeIn();
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
			if( $('.benefits__block_text-second').hasClass('benefits__block_text-second-show')
			){
				console.log(1236666)
				$('.benefits__block_text-second').removeClass('benefits__block_text-second-show');
			} 
			if ($('.benefits__block_text-third').hasClass('benefits__block_text-third-show') ) {
				$('.benefits__block_text-third').removeClass('benefits__block_text-third-show');

			}
				
				$('.benefits__block_text-first').addClass('benefits__block_text-first-show');
			

		});

		$('#second').click(function () {
			if( $('.benefits__block_text-first').hasClass('benefits__block_text-first-show')
			){
				console.log(1236666)
				$('.benefits__block_text-first').removeClass('benefits__block_text-first-show');
			} 
			if ($('.benefits__block_text-third').hasClass('benefits__block_text-third-show') ) {
				$('.benefits__block_text-third').removeClass('benefits__block_text-third-show');

			}
				
				$('.benefits__block_text-second').addClass('benefits__block_text-second-show');
			

		});

		$('#third').click(function () {
			if( $('.benefits__block_text-first').hasClass('benefits__block_text-first-show')
			){
				console.log(1236666)
				$('.benefits__block_text-first').removeClass('benefits__block_text-first-show');
			} 
			if ($('.benefits__block_text-second').hasClass('benefits__block_text-second-show') ) {
				$('.benefits__block_text-second').removeClass('benefits__block_text-second-show');

			}
				
				$('.benefits__block_text-third').addClass('benefits__block_text-third-show');
			

		});


	});
})(jQuery);