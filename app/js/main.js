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

		$(document).ready(function(){
			$('.benefits__block').click(function(){
				$('.benefits__block_text').slideToggle(300);      
				return false;
			});
		});
		
	});
})(jQuery);