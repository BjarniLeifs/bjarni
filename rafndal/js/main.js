$(document).ready(function(){
	var top = $('#about-rames-container').offset().top;
	$(window).on('scroll', function(){
		if(($('#uxinn-nav').offset().top +150) > top){
			$('#uxinn-nav').addClass('uxinn-nav-low');
		} else {
			$('#uxinn-nav').removeClass('uxinn-nav-low');
		}
	});

	$('#contact-button').on('click', function(){
		var data = {
			name : $('#form-name').val(),
			email : $('#form-email').val(),
			subject : $('#form-subject').val(),
			message : $('#form-message').val()
		};

		$.post('/contact', data, function(res){
			console.log('res', res);
		});

	});
});

