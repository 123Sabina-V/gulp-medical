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
		// $(document).ready(function(){
		// 	$('.services__tab_plus').click(function(){
		// 		$('.services__block_accordion').slideToggle(300);      
		// 		return false;
		// 	});
		// });
		$( ".services__block" ).on('click', function() {
			$(this).find(".services__tab_plus").toggleClass('open-tab')
			$( this ).parent().find( ".tab-content" ).slideToggle( );
		  });
		  $(".menu").on("click", function () {
			$(".dropdown-menu").slideToggle(300);
			$(this).toggleClass("active");
			// $(".navbar").toggleClass('active');
			let x = document.getElementById("myLinks");
	  
			if (x.style.display == "flex") {
			  x.style.display = "none";
			} else {
			  x.style.display = "flex";
			}
		  });
	});
})(jQuery);