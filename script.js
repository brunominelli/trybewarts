const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const buttonLogin = document.getElementById('login');
console.log(email.value);
console.log(password.value);

function validateLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

buttonLogin.addEventListener('click', validateLogin);
