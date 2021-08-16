$(function(){

	var contentTop = {}, contentOffset = 0, scrollFlag = 0, scrollLinkSelector = '.anchor-link';

	// Stop animated scroll if the user does something
	$('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
		if ( (e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel') && scrollFlag ){

			$('html,body').stop();
			scrollFlag = 0;
			setScrollAnchor();
		}
	});

	// Animate scroll after clicking menu link
	$(scrollLinkSelector).on('click', function(){
		setImmediateAnchor($(this), 800);
		$('.nav-item-link.anchor-link').removeClass('active');
		  $(this).addClass('active');
		
		return false;
	});

	// Set browser bar anchor during scrolling
	var ifInRange = 0;
	function setScrollAnchor(){
		var scrollPositionTop = $(window).scrollTop();
				   if(!scrollFlag){
					   	ifInRange = 0;
					   $(scrollLinkSelector).removeClass('active');
						for(var p in contentTop){
							  if((contentTop[p].top - $('.header').outerHeight())<=scrollPositionTop && (contentTop[p].bottom - $('.header').height())>scrollPositionTop){
								 $('.nav-item-link.anchor-link').removeClass('active');
								 $(scrollLinkSelector+'[href="'+p+'"]').addClass('active');
								  
							}	
						}
				}
	}
	
	// Fill object with scroll blocks data (offset and height)
	function setContentTopObject(){
		contentTop = {};
		$(scrollLinkSelector).each(function(){
			var $this = $( $(this).attr('href'));
			contentTop[$(this).attr('href')] = {'top':$this.offset().top - contentOffset, 'bottom':$this.offset().top  - contentOffset + $this.innerHeight()};
		});
	}
	
	// Set browser bar anchor immediately
	function setImmediateAnchor(anchorObject, time){
		scrollFlag = 1;
		$('html,body').stop().animate({ 'scrollTop' : contentTop[anchorObject.attr('href')].top - $('.header').height()}, time, function(){
			$('.nav-item-link.anchor-link').removeClass('active');
			anchorObject.addClass('active');
		
			scrollFlag = 0;
		});
	}

	$(window).on('load', function(){
		setContentTopObject();
	});

	$(window).scroll(function(){

		 setScrollAnchor();

	});

	$(window).resize(function(){
		setContentTopObject();
	});
});