const form = document.querySelector('form.accessible-floating-labels');
const inputs = document.querySelectorAll('input');
const pwdPattern = /^[a-zA-Z]{8,}$/;
const msg = document.querySelector('.msg');

/* Validation
form.addEventListener('submit', e => {
  e.preventDefault();
  const pwd = form.password.value;
  // min 8 characters long, only letters lower or upper case
  if(pwdPattern.test(pwd)) {
    msg.textContent = '';
  } else {
    msg.textContent = 'Votre mot de passe doit contenir au moins 8 caractères.';
  }
});
*/

(function init() {
	// Loop and addEventListeners
	for(let i = 0; i < inputs.length; i++) {
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
	// Handle reset button clicks
	document.querySelectorAll('button[type="reset"]')[0].addEventListener('click', function() {
		clearForm();
	});
})();

// Removes all special classes added to inputs/wrappers
function clearForm() {
	for(let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove('has-input');
		inputs[i].parentNode.classList.remove('has-input');
	}
}