$(document).ready(function(){

	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip();

	///responsive tables!!!
	$('table').footable();

	$('#testimonial-slider .item:first-child').addClass('active');

	$('.carousel').carousel({
  	interval: 4000
	})

});
