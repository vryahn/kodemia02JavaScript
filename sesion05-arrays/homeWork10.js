// homeWork10. Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectándulo como el siguiente:
/*
 *
 **
 ***
 ****
 *****
 */

let num = Number(prompt("Ingrese numero aqui mero: "));
let a = "*";
let b = "*";
const triangle = (s) => {
  for (let i = 1; i <= s; i++) {
    console.log(a);
    a = a + b;
  }
};

triangle(num);
