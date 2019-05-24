$(document).ready(function(){

  //collapse other panels when clicked
  var $myGroup = $('#videoGroup');
    $myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
  });

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

  //flip chevron

  var div = $(this).next('.fa-chevron-down');

  $( ".list-panel button" ).click(function() {
    $(this).find( '.fa-chevron-down' ).toggleClass('fa-flip-vertical');

  });


  $('.instructor-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $(".expand-height").click(function(){
    $(this).prev().addClass("height-auto");
    $(this).remove();

  });

});
