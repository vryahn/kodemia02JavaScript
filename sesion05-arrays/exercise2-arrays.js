// Exercise 2. Crear una función que recibe un arreglo de números y devuelve el valor más grande que se encuentra en el arreglo.

let array = [1,2,3,4,5,6];

const mayorValue = (array) => {
  let mayor = array[0];
  for(let i=1;i<=array.length;i++)
    {
      if(mayor<array[i]) mayor = array[i];
    }
  return mayor;
}

mayorValue(array);