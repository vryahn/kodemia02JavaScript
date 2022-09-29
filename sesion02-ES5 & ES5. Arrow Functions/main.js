/* Ejercicio 1
Imprimir en pantalla todos los divisores de 1 a 100 de un número entero
------------------------------------------ */
const divisores = (numero) => {
  for (let x = 1; x <= 100; x++) {
    if (numero % x == 0) console.log(x);
  }
};

divisores(9);

/* Ejercicio 2
Comprobar si un número es par. Devolver un truly si es par o falsy si es impar
*/
const pares = (numero) => {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

pares(250);

/* Ejercicio 3
Crear una función que sume dos números y devuelva el resultado
*/
const suma = (numero1, numero2) => {
  return numero1 + numero2;
};
console.log(suma(125, 386));

const getPi = () => {
  return 3.1416;
};

getPi();

/* Ejercicio 4
En mi empresa tenemos 5 empleados cada uno con diferentes años en la organización, en este mes debemos aumentarles el sueldo, debemos validar lo siguiente:
1. Si el empleado tiene 10 años, de su sueldo base aumentarle el 15%,
2. Si tiene 15 años de su sueldo base sumarle 20%,
3. Si tiene 5 años sumar 7% a su sueldo base
4. Si tiene menos de 5 años sumar el 3%
*/

const empleado1 = 10000;
const empleado2 = 12000;
const empleado3 = 15000;
const empleado4 = 17000;
const empleado5 = 26000;

const incSueldo = (sueldo, antiguedad) => {
  if (antiguedad >= 15) sueldo = sueldo * 1.2;
  else if (antiguedad >= 10) sueldo = sueldo * 1.15;
  else if (antiguedad >= 5) sueldo = sueldo * 1.07;
  else if (antiguedad < 5) sueldo = sueldo * 1.03;
  return sueldo;
};

console.log("El nuevo sueldo es " + incSueldo(empleado4, 15));
