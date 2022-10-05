/* Ejemeplo 3. .

Crear una función find que acepte un array y un callback y que:
por cada elemento del array

*/

const esMultiplos10 = (numero) => numero%10 === 0;
const esMultiplos5 = (numero) => numero%5 === 0;

esMultiplos10(10)

const find = (numeros, callback) => {
  let bandera = true;
  for(const numero of numeros){
    const esMultiplo = callback(numero);
    if(esMultiplo) continue;
    else bandera = false;
  }
  if(bandera) return true;
}

const numeros = [67,80,39,45,10,20,30,40]
const valor = find(numeros,esMultiplos10);