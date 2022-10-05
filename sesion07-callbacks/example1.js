// Ejemplo 1. CallBacks. Hcaer un contador de paso del tiempo.

let contador = 1;

const cambioContador = ()=>{
  contador++;
  console.log(contador);
}

setInterval(cambioContador,1000);