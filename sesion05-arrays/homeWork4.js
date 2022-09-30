// homeWork4. Solicitar al usuario el ingreso de una frase y de una letra (que puede o no estar en la frase). Recorrer la frase, carácter a carácter, comparando con la letra buscada. Si el carácter no coincide, indicar que no hay coincidencia en esa posición (imprimiendo la posición) y continuar. Si se encuentra una coincidencia, indicar en qué posición se encontró y finalizar la ejecución.

const getPosition = () => {
  let frase = ([] = prompt("Ingrese la frase a buscar"));
  let letra = prompt("Ingrese letra a buscar");
  let trys = 0;

  for (i = 0; i < frase.length; i++) {
    trys++;
    if (frase[i] != letra)
      console.log("No hay coincidencia en la posición " + i);
    else {
      console.log("Se encontro coincidencia en la posición " + i);
      break;
    }
  }
};

getPosition();
