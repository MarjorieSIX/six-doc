var validations = {
  required: function(value) {
    return value !== '';
  },
  phone: function(value) {
    // return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    return value.match();
  },
  email: function(value) {
    // return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return value.match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/);
  }
}

function validate() {
  const form = document.getElementById('create-account-form'),
        inputsArr = form.querySelectorAll('input'),
        errorMessage = document.querySelector('.error.message');
  
  form.addEventListener('submit', function(e){
    let i = 0;
    while (i < inputsArr.length) {
      let attr = inputsArr[i].getAttribute('data-validation'),
            rules = attr ? attr.split(' ') : '',
            parent = inputsArr[i].closest('.fieldgroup'),
            j = 0;
      while (j < rules.length) {
        if(!validations[rules[j]](inputsArr[i].value)) {
          e.preventDefault();
          errorMessage.className = "error message";
          if (rules[j] == 'required') {
            errorMessage.innerHTML = "Merci de remplir tous les champs obligatoires.";
          } else {
            errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
          }
          parent.classList.add('error');
          return false;
        }
        errorMessage.className = "error message hidden";
        parent.classList.remove('error');
        j++;
      }
      i++;
    }
    e.preventDefault();
    form.outerHTML = "";
    delete form;
  }, false)
}

validate();