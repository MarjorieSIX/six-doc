const form = document.getElementById('create-account-form'),
      container = document.querySelector('.container'),
      requiredFields = document.querySelectorAll('[required]'),          
      inputFirstname = document.getElementById('firstname'),
      spanFirstnameErr = inputFirstname.nextSibling.nextSibling,
      inputLastname = document.getElementById('lastname'),
      spanLastnameErr = inputLastname.nextSibling.nextSibling,
      inputEmail = document.getElementById('email'),
      spanEmailErr = inputEmail.nextSibling.nextSibling,
      inputPhone = document.getElementById('phone'),
      spanPhoneErr = inputPhone.nextSibling.nextSibling;

function isEmail(email) { 
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

function isPhone(phone) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
}

// Check si les champs obligatoires sont vides, disabler le btn continuer
inputFirstname.addEventListener('keyup', e => {
  if (inputFirstname.value == '') {
    btnContinue.disabled = true;
    inputFirstname.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanFirstnameErr.classList.remove('visibility-hidden');
    spanFirstnameErr.classList.add('error');
    spanFirstnameErr.innerHTML = 'Veuillez entrer votre prénom.';
  } else {
    inputFirstname.parentNode.classList.remove('error');
    spanFirstnameErr.classList.remove('error');
    spanFirstnameErr.classList.add('visibility-hidden');
    if ( (inputFirstname.value != '') 
      && (inputLastname.value != '') 
      && (inputEmail.value != '') 
      && (inputPhone.value != '')
      && (isEmail(inputEmail.value)) 
      && (isPhone(inputPhone.value)) ) {
      btnContinue.disabled = false;
    }
  }
});

inputLastname.addEventListener('keyup', e => {
  if (inputLastname.value == '') {
    btnContinue.disabled = true;
    inputLastname.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanLastnameErr.classList.remove('visibility-hidden');
    spanLastnameErr.classList.add('error');
    spanLastnameErr.innerHTML = 'Veuillez entrer votre nom.';
  } else {
    inputLastname.parentNode.classList.remove('error');
    spanLastnameErr.classList.remove('error');
    spanLastnameErr.classList.add('visibility-hidden');
    if ( (inputFirstname.value != '') 
      && (inputLastname.value != '') 
      && (inputEmail.value != '') 
      && (inputPhone.value != '')
      && (isEmail(inputEmail.value))
      && (isPhone(inputPhone.value)) ) {
      btnContinue.disabled = false;
    }
  }
});

inputEmail.addEventListener('keyup', e => {
  if (inputEmail.value == '') {
    btnContinue.disabled = true;
    inputEmail.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanEmailErr.classList.remove('visibility-hidden');
    spanEmailErr.classList.add('error');
    spanEmailErr.innerHTML = 'Veuillez entrer votre adresse courriel.';
  } else if (!isEmail(inputEmail.value)) {
    btnContinue.disabled = true;
    inputEmail.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanEmailErr.classList.remove('visibility-hidden');
    spanEmailErr.classList.add('error');
    spanEmailErr.innerHTML = 'Veuillez entrer une adresse courriel valide.';
  } else {
    inputEmail.parentNode.classList.remove('error');
    spanEmailErr.classList.remove('error');
    spanEmailErr.classList.add('visibility-hidden');
    if ( (inputFirstname.value != '') 
      && (inputLastname.value != '') 
      && (inputEmail.value != '') 
      && (inputPhone.value != '')
      && (isEmail(inputEmail.value))
      && (isPhone(inputPhone.value)) ) {
      btnContinue.disabled = false;
    }
  }
});

inputPhone.addEventListener('keyup', e => {
  if (inputPhone.value == '') {
    btnContinue.disabled = true;
    inputPhone.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanPhoneErr.classList.remove('visibility-hidden');
    spanPhoneErr.classList.add('error');
    spanPhoneErr.innerHTML = 'Veuillez entrer votre numéro de téléphone.';
  } else if (!isPhone(inputPhone.value)) {
    btnContinue.disabled = true;
    inputPhone.parentNode.classList.add('error'); // ajoute une class sur le div fieldgroup
    spanPhoneErr.classList.remove('visibility-hidden');
    spanPhoneErr.classList.add('error');
    spanPhoneErr.innerHTML = 'Veuillez entrer un numéro de téléphone valide. Format: 514 555-5555';
  } else {
    inputPhone.parentNode.classList.remove('error');
    spanPhoneErr.classList.remove('error');
    spanPhoneErr.classList.add('visibility-hidden');
    if ( (inputFirstname.value != '') 
      && (inputLastname.value != '') 
      && (inputEmail.value != '') 
      && (inputPhone.value != '')
      && (isEmail(inputEmail.value))
      && (isPhone(inputPhone.value)) ) {
      btnContinue.disabled = false;
    }
  }
});

// Si les champs obligatoires ne sont pas remplis et si l'email ou le telephone ne sont pas valides
if ( (inputFirstname.value == '')
  || (inputLastname.value == '') 
  || (inputEmail.value == '') 
  || (inputPhone.value == '') 
  || (!isEmail(inputEmail.value))
  && (!isPhone(inputPhone.value)) ) {
  btnContinue.disabled = true;
}


form.addEventListener('submit', e => {
  // Au click du bouton, si tous les champs sont bien remplis
  delete form;
  container.innerHTML = `
    <img src="../placeholders/etapes-03.gif" alt="">
    <h2 class="heading5">Étape 3 - Informations complémentaires</h2>
  `;
});