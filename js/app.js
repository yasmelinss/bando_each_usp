// Debounce do Lodash
debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function () {
	var $target = $('.im'),
		animationClass = 'anime-start',
		offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();

//login

function Login() {
	var usuario = document.getElementsByName('username')[0].value.toLowerCase();
	var senha = document.getElementsByName('password')[0].value;

	var usuarios = [
		{ "login": "aspira", "senha": "esquelético" },
	];

	for (var u in usuarios) {
		var us = usuarios[u];
		if (us.login === usuario && us.senha === senha) {

			try { window.location.replace("https://wa.me/35997573322?text=Desvendei%20o%20enigma%20do%20contrabando"); 
				
			}
			catch (e) {
				window.location = "https://wa.me/35997573322?text=Desvendei%20o%20enigma%20do%20contrabando";
				return true;
			}
		}
	}
	
	alert("Dados incorretos, tente novamente.");
	return false;
}