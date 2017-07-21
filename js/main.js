$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('nav');
	var offset = startchange.offset();
	$('.slider').slider({
    height: 600,
    indicators: false
    });
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('nav').css('background-color', 'white');
          $('.nav-wrapper ul li a').css('color', 'gray');
       } else {
          $('nav').css('background-color', 'transparent');
          $('.nav-wrapper ul li a').css('color', 'white');
       }
   });
});
