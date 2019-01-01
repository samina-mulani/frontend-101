$(document).ready(function(event){ 

$('.iconContainer').addClass('disappear');

  $('.item').click(function(){
	$('.active').removeClass('active');
  	$(this).addClass('active');
  }); 


let smallScreen = window.matchMedia("(max-width: 600px)");
if (smallScreen.matches){

	
	$('.org').css("flex-basis", "0");

	$('.item').addClass('disappear');
	$('.iconContainer').removeClass('disappear');	
	$('.item').css({
		"border" : "1px solid white",
		"flex-basis" : "100%"
	});

	$('#nav').css("flex-wrap" , "wrap");

      	$('.iconContainer').toggle(
		function(){
    		$('.item').removeClass('disappear');
				},
		function(){
			$('.item').addClass('disappear');
				});	
  	};
});





















