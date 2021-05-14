window.onload = () => {

	grecaptcha.ready(function() {
		grecaptcha.execute('6LfK2NEaAAAAAP2vR6unr-w3QNOowHYAQ7yjy-jy', {action: 'homepage'})
		.then(function(token) {
			console.log('token ', token);
			document.getElementById('captchaResponse').value = token;
		});
	});


}