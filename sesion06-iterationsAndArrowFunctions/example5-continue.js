// Ejemplo 5. Continue. Dado un arreglo numérico, obten la suma de sus elementos pares.

const numbers = [1,2,3,4,5,6,7,8,9,10];

let sumax=0;
for (let i=0;i<numbers.length;i++)
  {
    const number = numbers[i];
    if(number%2==0){
      sumax+=number;
    } else
      {
        continue;
      }
  }

console.log('El valor de suma es: '+sumax);