const form = document.querySelector('form.floating-labels');
const fieldgroupPwd = document.querySelector('.pwd');
const iconPwd = document.querySelector('.pwd svg');
const inputs = document.querySelectorAll('input');
const pwdPattern = /^[a-zA-Z]{8,}$/;
const msgPwd = document.querySelector('.pwd .msg');

// Validation
form.addEventListener('submit', e => {
  e.preventDefault();
  const pwd = form.password.value;
  // min 8 characters long, only letters lower or upper case
  if(pwdPattern.test(pwd)) {
    msgPwd.textContent = '';
  } else {
    msgPwd.textContent = 'Votre mot de passe doit contenir au moins 8 caractères.';
    fieldgroupPwd.classList.add('error');
    iconPwd.innerHTML = iconPwd.innerHTML.replace('fill-contenu-visible', 'fill-alertes-avertissement');
  }
});
