const myForm = document.getElementById("form");
const inputFirstName = document.getElementById("first-name");
const spanFirstName = document.getElementById("first-name-error");
const inputLastName = document.getElementById("last-name");
const spanLastName = document.getElementById("last-name-error");
const inputEmail = document.getElementById("email");
const spanEmail = document.getElementById("email-error");
const inputPhone = document.getElementById("phone");
const spanPhone = document.getElementById("phone-error");
const inputPass = document.getElementById("password");
const inputPassConfirm = document.getElementById("password-confirm");
const pswStrength = document.getElementById("password_strength-msg");

const levels = {
  0: {
    color: '#E0E0DE',
    msg: "Too shoot"
  },
  1: {
    color: '#C92E28',
    msg: "weak"
  },
  2: {
    color: '#F1C74F',
    msg: "Fair"
  },
  3: {
    color: '#7A9CBF',
    msg: "Good"
  },
  4: {
    color: '#1F6C1E',
    msg: "Strong"
  }
}

const validar = (e) => {
  e = e || window.event;
  let target = e.target || e.srcElement;
  console.log(target.id);
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  check_first_name();

  return false;
});

const check_input = (input, span, regex, errorMsg) => {

  if (!regex.test(input.value)) {
    span.innerText = errorMsg;
    input.classList.add('input_invalid');
    input.classList.remove('input_valid');
    return false;
  }
  span.innerText = " ";
  input.classList.add('input_valid');
  input.classList.remove('input_invalid');
  return true;
}

const check_first_name = () => {
  return check_input(
    inputFirstName,
    spanFirstName,
    /^(?=.{3,50}$)^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/,
    'First name is invalid'
  );
}

const check_last_name = () => {
  return check_input(
    inputLastName,
    spanLastName,
    /^(?=.{3,50}$)^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/,
    'Last name is invalid.'
  );
}

const check_email = () => {
  return check_input(
    inputEmail,
    spanEmail,
    /^(?=.{0,100}$)^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    'Invalid is email'
  );
}

const check_phone = () => {
  return check_input(
    inputPhone,
    spanPhone,
    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    'Phone is invalid'
  );
}

const set_password_err = () => {

}

const setPassWordStrenght = () => {
  let score = 0;
  let passwd =  inputPass.value;

  if (passwd.length > 5 && passwd.length <= 25 ) {
    if( /[`˜!@#$%ˆ&*()_\-\\ \^ \$\*\+\?\.\(\)\|\{\}\[\]]/.test(passwd)) score ++;
    if (/[a-z]/.test(passwd)) score ++;
    if (/[A-Z]/.test(passwd)) score ++;
    if (/[0-9]/.test(passwd)) score ++;

    pswStrength.innerText = levels[score].msg;
    pswStrength.style.color = levels[score].color;
  } else {
    pswStrength.innerText = levels[0].msg;
    pswStrength.style.color = levels[0].color;
  }

  return score > 2 ?  true : false;
}

const check_password = () => {
  
}

inputFirstName.addEventListener('blur', check_first_name);
inputLastName.addEventListener('blur', check_last_name);
inputEmail.addEventListener('blur', check_email);
inputPhone.addEventListener('blur', check_phone);
inputPass.addEventListener('keyup', setPassWordStrenght );
