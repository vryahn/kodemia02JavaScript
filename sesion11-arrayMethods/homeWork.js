/* homeWork. Métodos de arreglos
Dado un arreglo de puntuaciones debes ordenarlo de menor a mayor, imprimir el resultado en consola,
posteriormente deberás remover y recuperar la última puntuación, mostrarás en consola “La puntuación
x es la más baja”, debes mostrar nuevamente el arreglo y por último convierte ese arreglo en una
cadena de caracteres y mostrarlo en consola.
*/

// Dado un arreglo de puntuaciones...
const puntuaciones = [2,3,4,7,4,8,3,9,3,1,10,4,6,8];

// 1. Debes ordenarlo de menor a mayor, imprimir el resultado en consola.
puntuaciones.sort((a,b)=>a-b);
console.log(puntuaciones);

// 2. Remover y recuperar la última puntuación
puntuaciones.pop();

// 3. Mostrarás en consola “La puntuación x es la más baja”. Mostrar nuevamente el arreglo.
console.log('La puntuacion "'+puntuaciones[0]+'" es la mas baja');
console.log(puntuaciones);

// 4. Convierte ese arreglo en una cadena de carácteres y mostrarlo en consola.
const puntuacionesString = puntuaciones.toString().replace(/,/g, '');
console.log(puntuacionesString);