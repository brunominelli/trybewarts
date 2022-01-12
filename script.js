/* Login */
const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const buttonLogin = document.getElementById('login');

function validateLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

buttonLogin.addEventListener('click', validateLogin);

/* Select */
const select = document.getElementById('house');
const arrayHouse = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const arrayHouseId = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];

function setHouses(array1, array2) {
  for (let index = 0; index < array1.length; index += 1) {
    const option = document.createElement('option');
    option.value = array1[index];
    option.innerText = array1[index];
    option.id = array2[index];
    select.appendChild(option);
  }
}

/* Label Rate */
const rate = document.getElementById('rate');
function setInputRadio() {
  for (let index = 0; index < 10; index += 1) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    radio.type = 'radio';
    radio.name = 'rate';
    radio.value = (index + 1);
    radio.id = (index + 1);
    label.for = radio.id;
    label.innerText = (index + 1);
    rate.appendChild(radio);
    rate.appendChild(label);
  }
}

/* Checkbox Agreement */
const agreement = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');

function isAgreed() {
  if (agreement.checked) buttonSubmit.toggleAttribute('disabled');
  else buttonSubmit.toggleAttribute('disabled');
}

agreement.addEventListener('change', isAgreed);

/* Counter */
let counter = 500;
const idCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
idCounter.innerText = counter;

textarea.addEventListener('input', () => {
  const characters = textarea.value.length;
  if (characters < counter) {
    counter -= 1;
    idCounter.innerText = counter;
  } else {
    counter += 1;
    idCounter.innerText = counter;
  }
});

window.onload = () => {
  setHouses(arrayHouse, arrayHouseId);
  setInputRadio();
};
