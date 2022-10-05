/* Reto de Tarea
Dado un arreglo de puntuaciones debes ordenarlo de menor a mayor, imprimir el resultado en consola, posteriormente deberás remover y recuperar la última puntuación, mostrarás en consola "La puntuación X es la más baja".

Pista: Quicksort.
*/

let myArr = [85, 24, 63, 45, 17, 31, 96, 50];
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } // Si la longitud de la matriz es menor que 1, devuelve la matriz directamente
  let left = []; // La matriz de la izquierda
  let right = []; // La matriz de la derecha
  let pivotIndex = Math.floor(arr.length / 2); // Seleccione el punto de referencia, el método floor () es redondeado hacia abajo
  let pivot = arr.splice(pivotIndex, 1); // Matriz base
  for (let i = 0; i < arr.length; i++) {
    // Luego comience a recorrer la matriz, los elementos más pequeños que "base" se colocan en el subconjunto izquierdo y los elementos más grandes que la base se colocan en el subconjunto derecho.
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }
  return quickSort(left).concat(pivot, quickSort(right)); // Usa la recursión para repetir este proceso continuamente, puedes obtener la matriz ordenada.
};

let a = quickSort(myArr);
console.log("La puntuación mas baja fue: " + a[0]);

// WARNING: ESTE CÓDIGO ME LO FUSILÉ DE INTERNET, AUN LO ESTOY ESTUDIANDO
