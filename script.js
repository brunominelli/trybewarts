/* Login */
const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const buttonLogin = document.getElementById('login');

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

function validateLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

buttonLogin.addEventListener('click', validateLogin);

window.onload = () => {
  setHouses(arrayHouse, arrayHouseId);
};
