// Fixed navigation script

var num = 20; //number of pixels before modifying styles

		$(window).bind('scroll', function () {
		    if ($(window).scrollTop() > 20) {
		        $('.head-navigation').addClass('fixed-nav');
		    } else {
		        $('.head-navigation').removeClass('fixed-nav');
		    }
		});