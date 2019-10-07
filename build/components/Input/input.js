const inputs = document.querySelectorAll('input');

(function init() {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('focus', function() {
			inputs[i].classList.add('focus');
			inputs[i].parentNode.classList.add('focus');
		});

		inputs[i].addEventListener('blur', function() {
			inputs[i].classList.remove('focus');
			inputs[i].parentNode.classList.remove('focus');

			if(inputs[i].value !== '') {
				inputs[i].classList.add('has-input');
				inputs[i].parentNode.classList.add('has-input');
			} else {
				inputs[i].classList.remove('has-input');
				inputs[i].parentNode.classList.remove('has-input');
			}
		});	
	}
})();

// Removes all special classes added to inputs/wrappers
function clearForm() {
	for(let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove('has-input');
		inputs[i].parentNode.classList.remove('has-input');
	}
}