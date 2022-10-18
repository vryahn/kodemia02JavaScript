/* // Responsividad con innerWidth o innerHeight
if (window.innerWidth < 200) {
    document.write('Hola');
}

console.log(document.URL);

// Cerrar la ventana tras 3 segundos con close
setTimeout(() => {
    window.close();
},3000);

const contador = document.getElementById('contador');
console.log(contador);

// Contador de 10 segundos
const referenciaIntervalo = setInterval(() => {
    const valorActual = Number(contador.innerHTML);
    contador.innerHTML = valorActual -1;
    if(valorActual-1==0) clearInterval(referenciaIntervalo);
},1000);

const segundaVentana = window.open(document.URL+'test.html');
setTimeout(()=> {
    segundaVentana.close();
}); 

// Imprimir documento HTML
window.print();
*/

