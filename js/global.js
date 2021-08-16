/*-------------------------------------------------------------------------------------------------------------------------------*/
/*This is main JS file that contains custom style rules used in this template*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* Template Name: "Title"*/
/* Version: 1.0 Initial Release*/
/* Build Date: 06-02-2016*/
/* Author: Title*/
/* Copyright: (C) 2016 */
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/* 02 - page calculations */
/* 03 - function on document ready */
/* 04 - function on page load */
/* 05 - function on page resize */
/* 06 - function on page scroll */
/* 07 - swiper sliders */
/* 08 - buttons, clicks, hovers */

var _functions = {};

$(function() {

	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, headerH, winScr, footerTop, _isresponsive, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	_functions.pageCalculations = function(){
		winW = $(window).width();
		winH = $(window).height();
	};

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	if(_ismobile) $('body').addClass('mobile');
	_functions.pageCalculations();

	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).on('load', function(){
		_functions.initSwiper();
		$('body').addClass('loaded');
		$('#loader-wrapper').fadeOut();
	});

	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	_functions.resizeCall = function(){
		_functions.pageCalculations();
	};
	if(!_ismobile){
		$(window).resize(function(){
			_functions.resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			_functions.resizeCall();
		}, false);
	}

	/*==============================*/
	/* 06 - function on page scroll */
	/*==============================*/
	$(window).scroll(function(){
		_functions.scrollCall();
	});

	_functions.scrollCall = function(){
		winScr = $(window).scrollTop();
	};

	/*=====================*/
	/* 07 - swiper sliders */
	/*=====================*/
	var initIterator = 0;
	_functions.initSwiper = function(){
		$('.swiper-container').not('.initialized').each(function(){								  
			var $t = $(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index+' initialized').attr('id', index);
			$t.find('.swiper-pagination').addClass('swiper-pagination-'+index);
			$t.find('.swiper-button-prev').addClass('swiper-button-prev-'+index);
			$t.find('.swiper-button-next').addClass('swiper-button-next-'+index);

			var slidesPerViewVar = ($t.data('slides-per-view'))?$t.data('slides-per-view'):1;
			if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				pagination: '.swiper-pagination-'+index,
		        paginationClickable: true,
		        nextButton: '.swiper-button-next-'+index,
		        prevButton: '.swiper-button-prev-'+index,
		        slidesPerView: slidesPerViewVar,
		        autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'), 10):0,
		        loop: ($t.is('[data-loop]'))?parseInt($t.data('loop'), 10):0,
				autoplay: ($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'), 10):0,
		        breakpoints: ($t.is('[data-breakpoints]'))? { 767: { slidesPerView: parseInt($t.attr('data-xs-slides'), 10) }, 991: { slidesPerView: parseInt($t.attr('data-sm-slides'), 10) }, 1199: { slidesPerView: parseInt($t.attr('data-md-slides'), 10) } } : {},
		        initialSlide: ($t.is('[data-ini]'))?parseInt($t.data('ini'), 10):0,
                slidesPerColumn: ($t.is('[data-column]'))?parseInt($t.data('column'), 10):0,
		        speed: ($t.is('[data-speed]'))?parseInt($t.data('speed'), 10):500,
		        keyboardControl: true,
                preloadImages: false,
                lazyLoading: true,
		        mousewheelControl: ($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'), 10):0,
		        mousewheelReleaseOnEdges: true,
		        direction: ($t.is('[data-direction]'))?$t.data('direction'):'horizontal',
		        spaceBetween: ($t.is('[data-space-between]'))?parseInt($t.data('space-between'), 10):0,
                centeredSlides: ($t.is('[data-center]'))?parseInt($t.data('center'), 10):0,
                paginationType: ($t.is('[data-pagination-type]'))?$t.data('pagination-type'):'bullets'			});

			swipers['swiper-'+index].update();
			initIterator++;

		});
		$('.swiper-container.swiper-control-top').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-bottom').attr('id')];
		});
		$('.swiper-container.swiper-control-bottom').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-top').attr('id')];
		});

	};


	$('.custom-arrows-prev').on('click',function(){
		swipers['swiper-'+$(this).siblings('.swiper-container').attr('id')].slidePrev();
	});
	$('.custom-arrows-next').on('click',function(){
		swipers['swiper-'+$(this).siblings('.swiper-container').attr('id')].slideNext();
	});


	/*==============================*/
	/* 08 - buttons, clicks, hovers */
	/*==============================*/
	//menu
	// $('.cmn-toggle-switch').on('click', function(e){
	// 	//$(this).toggleClass('active');
	// 	$(this).parents('header').find('.toggle-block').toggleClass('active');
	// 	e.preventDefault();
	// });
	// $('.main-nav .menu-toggle').on('click', function(e){
	// 	$(this).closest('li').addClass('select').siblings('.select').removeClass('select');
	// 	$(this).closest('li').siblings('.parent').find('ul').slideUp();
	// 	$(this).closest('a').siblings('ul').slideToggle();
	// 	e.preventDefault();
	// });

    $('.simple-select select').SumoSelect();
    
    
    // open and close popup

    $(document).on('click', '.open-popup', function(){
        var popupContent = $('.popup-content[data-rel="'+$(this).data('rel')+'"]');
        $('.popup-content').removeClass('active');
        popupContent.addClass('active');
        popupContent.closest('.popup-wrapper').addClass('active');
        $('html').addClass('overflow-hidden');
        return false;
    });

    $(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function(){
        closePopup();
    });

    var closePopup = function(){
        $('.popup-wrapper, .popup-content').removeClass('active');
        $('html').removeClass('overflow-hidden');
        $('#video-popup .embed-responsive').html('');
        return false;
    };

    $('.video').on('click', function(e){
        e.preventDefault();
        $('#video-popup .embed-responsive').html('<iframe src="'+$(this).data('src')+'"></iframe>');
    });

    //open and close popup
    
    //tabs
    var tabsFinish = 0;
    $('.tab-menu').on('click', function() {
        if($(this).hasClass('active') || tabsFinish) return false;
        tabsFinish = 1;
        var tabsWrapper = $(this).closest('.tabs-block'),
            tabsMenu = tabsWrapper.find('.tab-menu'),
            tabsItem = tabsWrapper.find('.tab-entry'),
            index = tabsMenu.index(this);

        tabsItem.filter(':visible').fadeOut(function(){
            tabsItem.eq(index).fadeIn(function(){
                tabsFinish = 0;
            });
        });
        tabsMenu.removeClass('active');
        $(this).addClass('active');
    });
    //tabs

    
    //gallery
    var i =0;
    var gallery = [];
    $('.gallery_teams').each(function(){	
        gallery[i] = $(this).find('a').simpleLightbox({
            navText:[' ',' '],
            closeText:	' ',
            history: false,
            showCounter: false
        });
        i++;
    });
    //gallery
    

//    skillbar
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },4000);
        });
//    skillbar



    setTimeout(function() {
        $('.btnGallery.is-checked').trigger('click');//resolve problem with gallery sizing on page loading
    },10);

    $('.list').on('click', function(){
        $(this).addClass('active');
        $('.spusok').removeClass('active');
        $('.productsWrapper').addClass('list_class').removeClass('center');
        $('.productsWrapper').find('.flex').addClass('flex_center');
        $('.btnGallery.is-checked').click();
    });
    
 
    $('.spusok').on('click', function(){
        $(this).addClass('active');
        $('.list').removeClass('active');
        $('.productsWrapper').addClass('center').removeClass('list_class');
        $('.productsWrapper').find('.flex').removeClass('flex_center');
        $('.btnGallery.is-checked').click();
    });


    /*slider range*/
    $(".slider-range" ).each(function(index) {
        var from = parseInt($(this).data('from'),10),
            to = parseInt($(this).data('to'),10),     	     	
            min = parseInt($(this).data('min'),10),     	     	
            max = parseInt($(this).data('max'),10);     	     	
        $(this).find(".range").attr("id","slider-range-"+index);
        $(this).find(".amount-start").attr("id","amount-start-"+index);
        $(this).find(".amount-end").attr("id","amount-end-"+index);
        $(this).find(".count-start").attr("data-slider","#slider-range-"+index);
        $(this).find(".count-end").attr("data-slider","#slider-range-"+index);       	   	
        $("#slider-range-"+index).slider({
            range: true,
            min: min,
            max: max,
            values: [ from , to ],
            slide: function( event, ui ) {
                $("#amount-start-"+index).text('$' + ui.values[ 0 ]);
                $("#amount-end-"+index).text('$' +ui.values[ 1 ]);
            }
        });
        $("#amount-start-"+index).text('$' + $("#slider-range-"+index).slider("values",0));
        $("#amount-end-"+index).text('$' + $("#slider-range-"+index).slider("values",1));
    });

    
    $('.cattegory').on('click', function(){
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('rotate');
    });
    
    
        if($('.grid').length){
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'masonry'
            });

            var filterFns = {
                ium: function() {
                    var name = $(this).find('.name').text();
                    return name.match( /ium$/ );
                }
            };
            $('.filters-button-group').on( 'click', '.btn_isotop', function() {
                var filterValue = $( this ).attr('data-filter');
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', '.btn_isotop', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $( this ).addClass('is-checked');
                });
            });
        }


    $('.minus-btn').on('click', function() {
        var $this = $(this);
        var $input = $this.parent().find('input');
        var value = parseInt($input.val(),10);
        if (value != 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });

    $('.plus-btn').on('click', function() {
        var $this = $(this);
        var $input = $this.parent().find('input');
        var value = parseInt($input.val(),10);
        $input.val(value + 1);
    });


    $('.shopping_cart').find('.button-close').one('click', function() {
        var shoppingCart = $(this).closest('.shopping_cart');

        shoppingCart.slideUp();

        setTimeout(function() {
            shoppingCart.remove();
            },500);
    });


    $('.portfolioImg').on('click', function(){
        var $this = $(this),
            activeElement = $(this).closest('.portfolioWrapp').find('.portfolioBigImg'),
            activeElementBg = $this.attr('style');

        $this.siblings().removeClass('active');
        $this.addClass('active');

        activeElement.removeClass('active');
        setTimeout(function() {
            activeElement.attr('style', activeElementBg);
        },150);
        setTimeout(function() {
            activeElement.addClass('active');
        },300);
    });
    

    $('.controlTopSwiper img').on('click', function(){
        var inde_swipe = $('.controlTopSwiper img').index($(this));
        swipers['swiper-'+$(this).closest('.swipers-couple-wrapper').find('.swiper-container').attr('id')].slideTo(inde_swipe);
        return false;
    });
   
   
    if( $('.grid').length ){
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item'
        });

        $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });

        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });
    };


    
    if( $('.gridMasonry').length ){
        var $gridMasonry = $('.gridMasonry').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: 1
        });

        $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // filterValue = filterFns[ filterValue ] || filterValue;
            $gridMasonry.isotope({ filter: filterValue });
        });

        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

    };

    // updates
    $('.therapist-thumb').on('click', function(){
        var inde_swipe = $('.therapist-thumb').index($(this));
        swipers['swiper-'+$(this).closest('.therapist-block').find('.swiper-container').attr('id')].slideTo(inde_swipe);
        return false;
    });

    //mobile menu

    $('.menu-mobile-wrap').on('click', function (){
        $('.menu-mobile').toggleClass('active');
        $('.header').toggleClass('active');
        if (window.matchMedia('(max-width: 1199px)').matches) {
            $(this).siblings('.header-content').slideToggle();
        }
        return false;
    });

    //one page with anchors (mobile)
    if (window.matchMedia('(max-width: 1199px)').matches) {
        $('.nav-item-link.anchor-link').on('click', function () {
            $('.header-content').slideUp();
            $('.menu-mobile, .header').removeClass('active');
        });
    }

    if (window.matchMedia('(min-width: 1200px)').matches) {
        $(window).on("scroll", function () {
            winScr = $(window).scrollTop();
            var headerVertical = $('.header.vertical');
            var headerNoShad = $('.header.no-shadow');
            var headerTransparent = $('.header.transparent');
            if (winScr > 850) {
                headerVertical.addClass('scrolled');
            } else {
                headerVertical.removeClass('scrolled');
            }

            if (winScr > 70) {
                headerNoShad.addClass('scrolled');
                headerTransparent.addClass('scrolled');
            } else {
                headerNoShad.removeClass('scrolled');
                headerTransparent.removeClass('scrolled');
            }

        });
    }

    $('.header.half').find('.menu-mobile-wrap').on('click', function () {
        if (window.matchMedia('(min-width: 1200px)').matches) {
            $(this).siblings('.header-content').slideToggle();
        }
        return false;
    });

    if (window.matchMedia('(max-width: 1200px)').matches) {
        $('.sub-menu-item .nav-item-link').on('click', function () {
            event.preventDefault();
            $(this).parent().toggleClass('act');
        });
    }

    if (window.matchMedia('(min-width: 1200px)').matches) {
        $('.header.half .sub-menu-item .nav-item-link').on('click', function () {
            event.preventDefault();
            $(this).parent().toggleClass('act');
        });
    }

    //slide count
    $('.ourTeam_3_1').each(function () {
        var slideAmount = $(this).find('.swiper-slide').length;
        $(this).find('.swiper-slide').each(function () {
            var slideNumber = $(this).index() + 1;
            $(this).find('.slide-count b').html(('0' + slideNumber).slice(-2));
        });

        $(this).find('.slide-count i').html(('0' + slideAmount).slice(-2));
    });

    //    init FullCalendar
    if( $('#calendar').length ) {
        $('#calendar').fullCalendar({
            titleFormat: 'MMMM / YYYY',
            header: {
                left: '',
                right: 'title, prev, next'
            },
            columnHeader: false,
            showNonCurrentDates: false,
            unselectAuto: false,
            contentHeight: 350,
            fixedWeekCount: false,
            dayClick: function(date, jsEvent, view) {
                $('.fc-day-number.active').removeClass('active');
                $(jsEvent.target).addClass('active');
            }
        });

    }

});



















































