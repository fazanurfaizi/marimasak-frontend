jQuery(document).ready(function($) {	
	"use strict";		

	//progress line for page loader
	$('body').show();
	NProgress.start();
	setTimeout(function() { 
		NProgress.done(); 
		$('.fade').removeClass('out'); 
	}, 2000);
	
	$('.trigger').on("click", function() {
	    $(this).parent(".menu").toggleClass("active");
	});

	// Sticky Sidebar & header
	if($(window).width() < 769) {
		jQuery(".sidebar").children().removeClass("stick-widget");
	}

	if ($.isFunction($.fn.stick_in_parent)) {
		$('.stick-widget').stick_in_parent({
			parent: '#page-contents',
			offset_top: 60,
		});

		
		$('.stick').stick_in_parent({
			parent: 'body',
			offset_top: 0,
		});
	}
	
	/*--- topbar setting dropdown ---*/	
	$(".we-page-setting").on("click", function() {
		$(".wesetting-dropdown").toggleClass("active");
	});		  
	
	//===== owl carousel  =====//
	if ($.isFunction($.fn.owlCarousel)) {
		$('.sponsor-logo').owlCarousel({
			items: 6,
			loop: true,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 1500,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			nav: false,
			dots: false,
			responsiveClass:true,
				responsive:{
					0:{
						items:3,
					},
					600:{
						items:3,

					},
					1000:{
						items:6,
					}
				}

		});
	}
	
	// slick carousel for detail page
	if ($.isFunction($.fn.slick)) {
		$('.slider-for-gold').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			slide: 'li',
			fade: false,
			asNavFor: '.slider-nav-gold'
		});
		
		$('.slider-nav-gold').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for-gold',
			dots: false,
			arrows: true,
			slide: 'li',
			vertical: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					vertical: false,
					centerMode: true,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					vertical: true,
					centerMode: true,
					dots: false,
					arrows: false
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					vertical: false,
					centerMode: true,
					dots: false,
					arrows: false
				}
			}	
			]
		});
	}
	
	//---- responsive header
	$(function() {

		//	create the menus
		$('#menu').mmenu();
		$('#shoppingbag').mmenu({
			navbar: {
				title: 'General Setting'
			},
			offCanvas: {
				position: 'right'
			}
		});

		//	fire the plugin
		$('.mh-head.first').mhead({
			scroll: {
				hide: 200
			}
			
		});
		$('.mh-head.second').mhead({
			scroll: false
		});		
	});				
	
	//------- offcanvas menu 
	const menu = document.querySelector('#toggle');  
	const menuItems = document.querySelector('#overlay');  
	const menuContainer = document.querySelector('.menu-container');  
	const menuIcon = document.querySelector('.canvas-menu i');  

	function toggleMenu(e) {
		menuItems.classList.toggle('open');
		menuContainer.classList.toggle('full-menu');
		menuIcon.classList.toggle('fa-bars');
		menuIcon.classList.add('fa-times');
		e.preventDefault();
	}

	if( menu ) {
		menu.addEventListener('click', toggleMenu, false);	
	}
		
	// Responsive nav dropdowns
	$('.offcanvas-menu li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');
		return false;
	});

});//document ready end