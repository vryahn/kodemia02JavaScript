/* homeWork1. Arrow Functions.
Crear una función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es.
*/

let array = [] = '123456789';
let arrayNoSpaces = [];

// Eliminando espacios

let i = 0;
for(numeros of array)
  {
    if(numeros!=' ') 
    {
      arrayNoSpaces[i] = numeros;
      i++;
    }
  }

array = arrayNoSpaces;;

// Invertimos el arreglo original y lo guardamos en un segundo arreglo.

let x = 0;
const impInvertido = (array) => {
  for(let i=(array.length-1);i>=0;i--)
    {
      console.log(array[i]);
      arrayNoSpaces[x]=array[i];
      x++;
    }
}
impInvertido(arrayNoSpaces);

arrayNoSpaces;

// 

let palindromo = true;
for (numeros in array) {
  if(array[numeros]!=arrayNoSpaces[numeros]) palindromo=false;
}

if(palindromo==true)
{
  console.log('Es un palindromo!');
} else console.log('No es un palindromo');


// ::: ALPHA :::