var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	/* Slider */
	if ($(".main-slider").length) {
		$('.main-slider', '#home-section').owlCarousel({
		items: 1,
		rtl: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>']
	});
	}

	/*  Testimonial */
	if ($(".testimonial-section").length) {
		$('.carousel-simple-testimotional', '.testimonial-section').owlCarousel({
			items: 1,
			rtl: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	}

	if ($(".carousel-simple-testimotional-white").length) {
		$('.carousel-simple-testimotional-white', '.testimonial-section').owlCarousel({
			items: 1,
			rtl: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	}

	if ($(".owl-carousel-testimotional").length) {
		$('.owl-carousel-testimotional', '.testimonial-section-white').owlCarousel({
			items: 1,
			rtl: true,
			loop: true,
			autoplay: true,
			nav: true,
			navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			dots: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	}

	if ($(".owl-carousel-testimotional").length) {
		$('.owl-carousel-testimotional', '.testimonial-section').owlCarousel({
			items: 1,
			rtl: true,
			loop: true,
			autoplay: true,
			nav: true,
			navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
			dots: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	}

	if ($(".carousel-testimotional-2").length) {
		$('.carousel-testimotional-2', '.testimonial-section').owlCarousel({
			rtl: true,
			loop: true,
			autoplay: true,
			nav: false,
			dots: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				}
			}
		})
	}

	if ($(".tsm-carousel").length) {
		var client_carousel = $(".tsm-carousel", '.client-section-small').owlCarousel({
			autoplay: true,
			loop: true,
			autoplayTimeout: 4000,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 4
				},
				1000: {
					items: 6,
				}
			}
		});
	}

	/* News carousel */
	if ($("#owl-news").length) {
		$('#owl-news', '.news-section').owlCarousel({
			responsiveClass: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			responsive: {
				0: {
					items: 1
				},
				500: {
					items: 2
				},
				991: {
					items: 4
				}
			}
		});
	}

	/* Charts */
	if ($(".chart").length) {
		$('.chart').easyPieChart({
			animate: 4000,
			barColor: '#03A9F4',
			trackColor: false,
			scaleColor: false,
			scaleLength: 0, // The color of the scale lines, false to disable rendering.
			size: 130,
			lineWidth: 7,
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}

	if ($('.wow').length > 0) {
		new WOW().init();
	}

	/* Portfolio */
	if ($(".iso-call").length) {

		var winDow = $(window), // Needed variables
		$container = $('.iso-call'),
		$filter = $('.filter');
		$container.imagesLoaded(function() {
			$container.trigger('resize');
			$container.addClass('active');
			$container.isotope({
				filter: '*',
				layoutMode: 'masonry',
				animationOptions: {
					duration: 750,
					easing: 'linear'
				}
			});
		});

		winDow.on('resize', function() {
			var selector = $filter.find('a.active').attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
			return false;
		});

		$filter.find('a').on('click', (function() {
			var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
			return false;
		}));
	}

	var filterItemA = $('.filter li a');
	filterItemA.on('click', function() {
		var $this = $(this);
		if (!$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});

	/* Masonry */
	$('#container').addClass('active');
	if ($("#masonry").length) {
		var masonry = document.querySelector('#masonry');
		var msnry = new Masonry(masonry, {
			itemSelector: '.post-item'
		});
	}

	/*	Progress bar */
	$(function() {
		$(window).resize(function() {
			function progress(percent, $element) {
				var progressBarWidth = percent * $element.width() / 100;
				$element.find('div').animate({
					width: progressBarWidth
				}, 5000).html(percent + "% ");
			}
			progress(80, $('.prog-bar1'));
			progress(91, $('.prog-bar2'));
			progress(94, $('.prog-bar3'));
			progress(84, $('.prog-bar4'));
			progress(90, $('.prog-bar5'));
			progress(97, $('.prog-bar6'));
		}).trigger('resize');
	});

	/*	Flexslider */
	if ($('.flexslider').length > 0) {
		var SliderPost = $('.flexslider');
		SliderPost.flexslider({
			slideshowSpeed: 3000,
			easing: "swing"
		});
	}

	/*	Contact Form */
	var send_message = $('#send_message');
	send_message.on('click', function(e) {
		e.preventDefault();
		var error = false;

		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		if (name.length === 0) {
			var error = true;
			$('#name_error').fadeIn(500);
		} else {
			$('#name_error').fadeOut(500);
		}
		if (email.length === 0 || email.indexOf('@') === -1) {
			var error = true;
			$('#email_error').fadeIn(500);
		} else {
			$('#email_error').fadeOut(500);
		}
		if (message.length === 0) {
			var error = true;
			$('#message_error').fadeIn(500);
		} else {
			$('#message_error').fadeOut(500);
		}
		if (error == false) {
			var formData = {
				'name': name,
				'email': email,
				'message': message
			};
			$.ajax({
				type: 'POST',
				url: 'email.php',
				data: formData,
				success: function() {
					$('#send_message').remove();
					$('#mail_success').fadeIn(500);
				}
			})
		}
	});

	/*	Magnific popup */
	if ($(".zoom").length) {
		// Example with multiple objects
		$('.zoom','.project-wrapper').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	/*	Single product page slider */
	if ($("#Product-Images-Gallery").length) {
		$('#Product-Images-Gallery').lightSlider({
			gallery: true,
			item: 1,
			loop: true,
			thumbItem: 4,
			slideMargin: 0,
			enableDrag: false,
			currentPagerPosition: 'left',
			onSliderLoad: function(el) {
				el.lightGallery({
					selector: '#Product-Images-Gallery .lslide'
				});
			}
		});
	}

	if ($("#Product-Images-Gallery-Center").length) {
		$('#Product-Images-Gallery-Center').lightSlider({
			adaptiveHeight: true,
			item: 1,
			pauseOnHover: true,
			slideMargin: 0,
			loop: true
		});
	}

	/*	Header animate after scroll */
	$(window).on("scroll touchmove", function() {
		$('.navbar-scroll').toggleClass('navbar-tiny', $(document).scrollTop() > 0);
	});
});

jQuery(function($) {
	// custom formatting example
	$('#earth').data('countToOptions', {
		formatter: function(value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});
	// start all the timers
	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
});

jQuery(function($) {
	// custom formatting example
	$('#earth').data('countToOptions', {
		formatter: function(value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	});
	// start all the timers
	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
});

if ($(".zoom").length) {
	// Example with multiple objects
	$('.zoom','.project-wrapper').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
}

/* Contact map */
if ($("#map").length) {
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11, // The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York
			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#0099cc"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
				}, {
					"lightness": 21
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#333333"
				}, {
					"lightness": 40
				}]
			}, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6700, -73.9400),
			map: map,
			title: 'Title!'
		});
	}
}

/*	Tabs */
jQuery(document).ready(function() {
	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});

jQuery(document).ready(function() {
	jQuery('.tabs-v2 .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs-v2 ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});

jQuery(document).ready(function() {
	jQuery('.tabs-v3 .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs-v3 ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});

jQuery(document).ready(function() {
	jQuery('.tabs-v4 .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs-v4 ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});

/* Accordion */
$(document).ready(function() {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}
	$('.accordion-section-title').on('click', (function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		if ($(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}
		e.preventDefault();
	}));
});

$(document).ready(function() {
	function close_accordion_section_multi() {
		$('.accordion-multi .accordion-multi-section-title').removeClass('active');
		$('.accordion-multi .accordion-multi-section-content').slideUp(300).removeClass('open');
	}
	$('.accordion-multi-section-title').on('click', (function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		if ($(e.target).is('.active')) {
			close_accordion_section_multi();
		} else {
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion-multi ' + currentAttrValue).slideDown(300).addClass('open');
		}
		e.preventDefault();
	}));
});

