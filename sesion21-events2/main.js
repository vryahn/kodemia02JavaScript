/* const goku = document.getElementById('goku');

goku.addEventListener(('mouseenter'), (event) => {
    goku.classList.add('animate__animated', 'animate__pulse');
});

const input = document.querySelector('input');
const resultado = document.getElementById('resultado');

let acumulador = '';

input.addEventListener('keyup', (evento) => {
    const letra = evento.key;
    console.log(letra);
    acumulador += letra;
    resultado.innerText = acumulador;
});

const input = document.querySelector('.form-control');
const resultado = document.getElementById('resultado');

input.addEventListener('change',(evento) =>{
    const value = evento.target.value;
    resultado.innerText = value;
}); */

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formulario = event.target;
    const inputs = formulario.querySelectorAll('input');
    console.log(inputs[0]);
    const values = Array.from(inputs.map)
    console.log(values);
});
