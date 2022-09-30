// Exercise 1. Crear una función que reciba un arreglo y lo regrese en orden invertido.

let array = [1,2,3,4,5,6];

const impInvertido = (array) => {
  for(let i=(array.length-1);i>=0;i--)
    {
      console.log(array[i]);
    }
}

impInvertido(array);