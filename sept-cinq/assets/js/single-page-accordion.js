//single product accordion hover script

$(".card-header").parent('.single-card-accordion').hover(
		  function() {
		    $(this).children('.collapse').collapse('show');
		  }, function() {
		    $(this).children('.collapse').collapse('hide');
		  }
		);	