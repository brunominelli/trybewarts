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
const idCounter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
idCounter.innerText = 500;

textarea.addEventListener('input', () => { idCounter.innerText = 500 - textarea.value.length; });

/* Form Default */
const subjects = document.getElementsByClassName('subject');

function isChecked() {
  const checked = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      checked.push(subjects[index].value);
    }
  }
  return checked;
}

function validateCheck(array, input) {
  const radioCondition = (input.type === 'radio' && input.checked);
  if (radioCondition) array.push(input.value);
}

function validateText(array, input) {
  if (input.type === 'text' || input.type === 'email') array.push(input.value);
}

function getInputValue() {
  const inputs = document.querySelectorAll('#evaluation-form input');
  const inputValue = [];
  for (let index = 0; index < inputs.length; index += 1) {
    const input = inputs[index];
    validateCheck(inputValue, input);
    validateText(inputValue, input);
    if (index === 3) inputValue.push(select.value);
  }
  inputValue.push(textarea.value);
  return inputValue;
}

function printFormResult() {
  const form = document.getElementById('evaluation-form');
  const elements = getInputValue();
  form.innerHTML = `
    <p>Nome: ${elements[0]} ${elements[1]}</p>
    <p>Email: ${elements[2]}</p>
    <p>Casa: ${elements[3]}</p>
    <p>Família: ${elements[4]}</p>
    <p>Matérias: ${isChecked().join(', ')}</p>
    <p>Avaliação: ${elements[5]}</p>
    <p>Observações: ${elements[6]}</p>
  `;
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  getInputValue();
  printFormResult();
});

for (let index = 0; index < subjects.length; index += 1) {
  subjects[index].addEventListener('click', isChecked);
}

window.onload = () => {
  setHouses(arrayHouse, arrayHouseId);
  setInputRadio();
};
