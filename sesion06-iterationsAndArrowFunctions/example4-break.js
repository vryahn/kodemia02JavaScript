// Ejemplo 4. Break. Dada una cadena de caracteres, indica si una letra se encuentra dentro de dicha cadena.

const encontrarCaracter = (frase, caracter) => {
    for (let i = 0; i<frase.length;i++)
      {
        if(frase[i]==caracter)
          {
            return true;
            break;
          }
      } return false;
  }
  
  const frase = 'Hola como estas';
  const caracter = 'o';
  
  if(encontrarCaracter(frase,caracter)){
    console.log('Se encontro');
  } else console.log('No se encontro');