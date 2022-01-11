const email = document.getElementsByName('email')[0];
const password = document.getElementsByName('password')[0];
const buttonLogin = document.getElementById('login');
console.log(email.value);
console.log(password.value);

buttonLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
});

/* if (email.value === 'tryber@teste.com' && password.value === '123456') {
  alert('Deu boa');
}
*/
