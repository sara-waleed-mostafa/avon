jQuery(function($) {'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if( $('#video-container').length ) {
		$("#video-container").fitVids();
	}

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if( $('.masonery_area').length ) {
			$('.masonery_area').masonry();//Masonry
		}

		var $portfolio_selectors = $('.portfolio-filter >li>a');
		
		if($portfolio_selectors.length) {
			
			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}

	});


	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	// Progress Bar
	$.each($('div.progress-bar'),function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});

	if( $('#gmap').length ) {
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 43.04446,
			lng: -76.130791,
			scrollwheel:false,
			zoom: 16,
			zoomControl : false,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		map.addMarker({
			lat: 43.04446,
			lng: -76.130791,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#3e8bff',
		});
	}
        
   


});


$(document).ready(function(){
    $("#a").click(function(){
        $("#v").slideToggle("slow");
    });
  
    $("#s").click(function(){
        $("#ss").slideToggle("slow");
    });
    $("#y").click(function(){
        $("#yy").slideToggle("slow");
    });
    $("#n").click(function(){
        $("#nn").slideToggle("slow");
    });
    $("#f").click(function(){
        $("#ff").slideToggle("slow");
    });
     $("#oo").click(function(){
        $("#ooo").slideToggle("slow");
    });
     $("#h").click(function(){
        $("#hh").slideToggle("slow");
    });
    $("#w").click(function(){
        $("#ww").slideToggle("slow");
    });
     $("#u").click(function(){
        $("#uuu").slideToggle("slow");
    });
     $("#t").click(function(){
        $("#tt").slideToggle("slow");
    });
     $("#c").click(function(){
        $("#cc").slideToggle("slow");
    });
     $("#e").click(function(){
        $("#ee").slideToggle("slow");
    });
     $("#j").click(function(){
        $("#jj").slideToggle("slow");
    });
     $("#o").click(function(){
        $("#muppetss").animate({
              left: '250px',
            height: '350px',
            width: '550px'
        });
        });
       $("#o").click(function(){
        $("#m").show();
        });
        
   
});

	  