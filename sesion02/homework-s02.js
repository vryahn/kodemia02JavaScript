/* Tarea Sesión 2. Módulo 02-JavaScript. Desarrollo Web Full Stack. Kodemia. Bryan
Una persona adquirió un iPhone 14 Pro Max para pagar en 12 meses. El primer mes pagó $1'000, el segundo $2'000, el tercero $3'000 y así sucesivamente.

Realiza un programa, con una función que determine cuánto debe pagar mensualmente, posteriormente mostrar el total de lo que pagó después de los 12 meses, así como el interés o la cantidad de más que pagó por el equipo puesto que el dispositivo cuesta $28'999.
------------------------------------------*/

let pago1 = 1000;
let sumaPagos = 0;
const precioIphone14 = 28999;

console.log('Pagos Mensuales');
const pagosIphone = () => {
  for(let x=1;x<=12;x++){
    sumaPagos=sumaPagos+(x*pago1);
    console.log('Pago '+x+' es de '+(x*pago1));
  }

}
pagosIphone();

console.log('Lo pagado en 12 meses sería $'+sumaPagos);
console.log('Intereses pagados: $'+(sumaPagos-precioIphone14))

/* VARIANTE CON VARIABLES LOCALES
---------------------------------------------------------------
const precioIphone14 = 28999;

console.log('Pagos Mensuales');
let pago1 = 1000;
let sumaPagos = 0;
const pagosIphone = () => {
  for(let x=1;x<=12;x++){
    sumaPagos=sumaPagos+(x*pago1);
    console.log('Pago '+x+' es de '+(x*pago1));
  }
console.log('Lo pagado en 12 meses sería $'+sumaPagos);
console.log('Intereses pagados: $'+(sumaPagos-precioIphone14))
}
pagosIphone();
---------------------------------------------------------------
*/