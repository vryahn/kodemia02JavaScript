// Exercise 3. Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros

// 1. Aislar elementos únicos en un nuevo arreglo. Posteriormente revisar cuantas veces se repite cada uno de los valores del nuevo arreglo, en el arreglo original.

let array = [1, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 10, 10];
let arrayClone = array;
let arrayIsolated = [];
arrayIsolated[0] = array[0];

const isolating = () => {
  
  for (let i = 0; i < array.length; i++) {
    arrayIsolated[i]=1;
    for (let x = 0; x < array.length; x++) {
      if (i != x) {
        if (array[i] == array[x]) arrayIsolated[i]++;
      }
    }
  }
};

isolating();
console.log(arrayIsolated)

// :::::::::::::::: WARNING: PENDING EXERCISE ::::::::::::::::::::::
