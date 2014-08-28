$(document).ready(function(){

	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});


	///responsive tables!!!
	$('table').footable();

	$('#logo-slider .item:first-child').addClass('active');
  $('#testimonial-slider .item:first-child').addClass('active');

	$('.carousel').carousel({
  	interval: 4000
	})

	$(window).scroll(function(){

    var divOffset = $('#mainContents').offset();
    if(window.scrollY > divOffset.top ){
      $('#hidden-menu').fadeIn(400);
    }

   if(window.scrollY < divOffset.top){
      $('#hidden-menu').fadeOut(90);
    }

  });

});
