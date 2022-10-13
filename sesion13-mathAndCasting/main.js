// Operaciones con Date.
// Las operaciones que se pueden hacer con Date radican en el desarrollo de funciones / métodos creados por el propio desarrollador, con base en las necesidades que él necesite.

// Sumar días.

const sumarDias = (fecha,numeroDeDias) => {
    const diasMilisegundos = numeroDeDias*24*60*60000;
    const miliSegundosFecha = fecha.getTime();
    const suma = miliSegundosFecha+diasMilisegundos;
    return new Date(suma);
  }
  
  const hoy = new Date();
  
  const restarDias = (fecha,numeroDeDias) => {
    const diasMilisegundos = numeroDeDias*24*60*60000;
    const miliSegundosFecha = fecha.getTime();
    const suma = miliSegundosFecha-diasMilisegundos;
    return new Date(suma);
  }
  
  // Operador Ternario
  
  let suma1 = 4-10;
  const resultado = suma1 < 0 ? suma1*(-1): suma1;
  // const resultado = if(suma<0) suma*=-1; else suma; Equivalente al de arriba
  
  /* Math.
  
  Es una de las clases nativas de JavaScript. Proporciona los mecanismos para realizar operaciones matemáticas en JavaScript.
  
  La mayoría de operaciones pueden ser resueltas con operaciones aritméticas, sin embargo, existen procesos que necesitan mucho más, es donde la clase Math toma relevancia.
  */
  
  // abs(). Devuelve el valor absoluto de un número. El valor despues de quitarle el signo.
  const suma = 4-10;console.log(suma);
  const absolut = Math.abs(suma); console.log(absolut);
  
  // ceil(). Devuelve el entero igual o inmediatamente siguiente de un número.
  
  const numero = 3.4; console.log(numero);
  console.log(Math.ceil(numero));
  
  // floor(). Devuelve el numero inmediato inferior
  console.log(Math.floor(5.9));
  
  // rount(). Redondeo flexible, desde .5 redondea hacia arriba, hasta .4 hacia abajo.
  console.log(Math.round(numero));
  
  // .pow(). Devuelve la potencia, sus argumentos son la literal y la potencia.
  console.log(Math.pow(6,2)) // 6^2
  console.log(Math.pow(3,5)) // 3^5
  
  // .max() Retoma el mayor de sus argumentos.
  console.log(Math.max(10,2,20,31));
  
  // min(). Retorna el menor de sus argumentos.
  console.log(Math.min(10,2,7,-5));
  
  // random(). Devuelve un número aleatorio entre 0 y 1. Se puede adaptar mediante funciones.
  console.log(Math.random());
  
  const numerosaleatorios = (min, max) => {
    return Math.floor((Math.random()*(max-min+1))+1);
  }
  console.log(numerosaleatorios(5,10));
  
  /*
  Devuelve numeros aleatorios de manera periódica.
  setInterval(()=>{
    console.log(numerosaleatorios(1,2))
  },1000)
  */
  
  /* --- Casting ---
  También conocido como Conversión de Tipos es un procedimiento para transformar una variable primitiva de un tipo a otro.
  
  También se utiliza para transformar un objeto de una clase a otra clase siempre y cuando haya una relación de herencia entre ambas.
  */
  
  const numberToString = String(10); console.log(numberToString);
  const stringToNumber = Number('15'); console.log(stringToNumber);
  const stringToArray = console.log(split(','))