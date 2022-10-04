// Ejemplo 3. for of. Calcula el promedio de edad de tus compañeros usando un For of

let array = [30,31,32,33,34,29,28,50];

let suma = 0;
for (edad of array){
  suma += edad;
}

console.log(promedio = suma / array.length);