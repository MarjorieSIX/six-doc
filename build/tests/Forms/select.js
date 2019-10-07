const selects = document.querySelectorAll('select');

(function init() {
	for (let i = 0; i < selects.length; i++) {
		selects[i].addEventListener('focus', function() {
			selects[i].classList.add('focus');
			selects[i].parentNode.classList.add('focus');
		});

		selects[i].addEventListener('blur', function() {
			selects[i].classList.remove('focus');
			selects[i].parentNode.classList.remove('focus');

			if(selects[i].value !== '') {
				selects[i].classList.add('has-input');
				selects[i].parentNode.classList.add('has-input');
			} else {
				selects[i].classList.remove('has-input');
				selects[i].parentNode.classList.remove('has-input');
			}
		});	
	}
})();

// Removes all special classes added to selects/wrappers
function clearForm() {
	for(let i = 0; i < selects.length; i++) {
		selects[i].classList.remove('has-input');
		selects[i].parentNode.classList.remove('has-input');
	}
}