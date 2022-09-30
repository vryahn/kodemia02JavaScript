// Exercise 4. Algoritmo que imprima las 10 primeras potencias de un valor dado. Usar estructura For.

const diezPrimerasPotencias = (numero) => {
    for(let i=1;i<=10;i++) {
      console.log(Math.pow(numero, i));
    }
  }
  
  diezPrimerasPotencias(4);