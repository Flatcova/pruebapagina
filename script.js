$(document).ready(function(){
  	$('.nav li').hover(
    	function(){
        	$(this).addClass('active');
    	},
    	function(){
        	$(this).removeClass('active');
    	}
  	);

    $('.sub-nav').hide('fast');

    $('.pull-left').click(function(){
        $('.sub-nav').toggle();
      });
});