$(document).ready(function() {
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('#boxes, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('#boxes, body').addClass('loaded');
	}, 60000);
});

$(document).ready(function(){
  var loading = $(".loading");
  loading.delay(loading.attr("delay-hide")).slideUp();
});