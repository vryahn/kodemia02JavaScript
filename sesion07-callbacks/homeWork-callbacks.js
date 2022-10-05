/* homeWork. callBacks.
Crea una función que se encargue de solicitar 10 caracteres, posteriormente llamar una función callback que se encargue de unir los elementos en una cadena de caracteres, al finalizar la union debes llamar otra función callback que se encargue de imprimir en consola: “La frase generada con tus caracteres es: ” + frase;
*/

const requireChars = (unirElementos,imprimirFrase) => {
  let letras = [];
  for(let i=0;i<10;i++)
    {
      letras[i] = prompt('Ingrese Caracter: ');
    }
    imprimirFrase(unirElementos(letras));
}

const putTogheterElements = chars => {
  chars = chars.toString();
  return chars;
}

const printPhrase = chain => {
  console.log('La frase generada con tus carácteres es: '+chain);
}

requireChars(putTogheterElements,printPhrase);