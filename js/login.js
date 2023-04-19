const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = (event) => {
}
input.addEventListener('input', validateInput);
button.addEventListener('click', (event) => {
  event.preventDefault();
  const nome = input.value;
  console.log(nome);

  localStorage.setItem('player', nome)
  if (input.value == '') {
    alert('Escolha um nome')
  } else {
    const url = './pages/game.html?name=' + encodeURIComponent(nome);
    location.href = url;
  }
});
