$(window).load(function(){$(".loader").fadeOut(1e3,function(){});});$(document).ready(function(){jQuery('header nav').meanmenu();$(window).scroll(function(){var scroll=$(window).scrollTop();var windowwidth=$(window).width();if((scroll>=600)&&(windowwidth>900)){$(".headerPanel").addClass("fixedheader").stop();$(".headerPanel").css("top","0");}
else{$(".headerPanel").removeClass("fixedheader").stop();$(".headerPanel").css("top","-100px");}});});

$(document).ready(function(){
	
	$('ul.main-category-list li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.main-category-list li').removeClass('current');
		$('.tab-link').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
if($(window).width() <800 ) {
    $(document).ready(function() {
      $(".click").click(function() {
        if ($('.footer-ac').is(':visible')) {
          $(".footer-ac").slideUp(300);
          $(".plusminus").text('+');
        }
        if ($(this).next(".footer-ac").is(':visible')) {
          $(this).next(".footer-ac").slideUp(300);
          $(this).children(".plusminus").text('+');
        } else {
          $(this).next(".footer-ac").slideDown(300);
          $(this).children(".plusminus").text('-');
        }
      });
    });
}