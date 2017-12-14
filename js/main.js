$( document ).ready(function() { 

	$(document).scroll(function(event){
		var top = $(document).scrollTop();
		console.log(top);
	
	if( top >= 811 ){
		$('#main-nav').css({top:('0')});


	}

	else {
		$('#main-nav').css({top:('-65px')});
	}

	});




});

