// homeWork1. Introducir un conjunto de calificaciones (no se conoce el número de calificaciones). La entrada termina al introducir un valor negativo. Al final se deberá entregar el número de calificaciones que entraron y el promedio general.

let califications = [];
let average = 0;
let adittion = 0;

const getCalifications = () => {
  let i = 0;
  let getOut = false;

  do {
    califications[i] = Number(
      prompt("Introduzca Calificacion " + (i + 1) + ": ")
    );
    if (califications[i] > 0) {
      adittion = adittion + califications[i];
    } else getOut = true; //Al detectar un número negativo, descarta éste último en la suma de calificaciones y cambia la condición getOut para salir del bucle.
    i++;
  } while (getOut == false);
};

getCalifications();
average = adittion / (califications.length - 1);
console.log("Suma: " + adittion);
console.log(
  "Total de Calificaciones Ingresadas: " + (califications.length - 1)
);
console.log("Promedio General: " + average);
