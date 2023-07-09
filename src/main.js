import './style.css';
import Swal from 'sweetalert2';

const card = document.querySelector('#superCard');
const botao = document.querySelector('#randomize');
const nomeS = document.querySelector('#name');
const BASE_URL = `https://akabab.github.io/superhero-api/api`;
const getRandomArbitrary = () => {
  return Math.trunc(Math.random() * (731 - 1) + 1);
}


botao.addEventListener('click', (event) => {
  event.preventDefault();
  const randomN = getRandomArbitrary();
  const pickedN = `${BASE_URL}/id/${randomN}.json`
  fetch(pickedN)
  .then(response => response.json())
  .then(data => {
    card.src = data.images.sm;
    nomeS.innerHTML = data.name;
  })
  .catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Hero not found',
      text: error.message,
      confirmButtonText: 'Cool',
    })
  });
})