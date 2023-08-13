const emailInput = document.getElementById('nl-input');
const button = document.querySelector('.button');
const newsletterform = document.querySelector('#news-letter-form');

const newsLetterContainer = document.querySelector('.nl-container');
const thankyouContainer = document.querySelector('.nl-thank-container');

thankyouContainer.classList.add('hide-container');

function submitForm() {
  if(validateEmail(emailInput.value)) {
    newsLetterContainer.classList.add('hide-container');
    document.getElementById('nl_email_id').innerHTML = emailInput.value;
    thankyouContainer.classList.remove('hide-container');
  } 
  else {
    newsLetterContainer.classList.remove('hide-container');
    thankyouContainer.classList.add('hide-container');
  }
}
function dismiss_message(){
  newsletterform.reset();
  newsLetterContainer.classList.remove('hide-container');
  thankyouContainer.classList.add('hide-container');
}
// newsletterform.addEventListener('submit', ()=> {})

// On keyup validation on email 
emailInput.addEventListener('keyup',() => {
 
  var emailValue = emailInput.value;
  const res = validateEmail(emailValue);
})

function validateEmail(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var validate = false;
  if(email.length > 0)
    button.classList.add('button-active');
  else
    button.classList.remove('button-active');

  if(email.match(regex) == null) {
    document.querySelector('.error').innerHTML = "Valid Email Required"
    document.querySelector('.nl-input').classList.add('nl-input-error');
  } else {
    validate = true;
    document.querySelector('.error').innerHTML = '';
    document.querySelector('.nl-input').classList.remove('nl-input-error');
  }
  return validate;
}