// homeWork9. Dado un número entero mostrar la lista de los números pares inferiores a él.

const minorNumbers = () => {
  let num = prompt("Indique primer número: ");
  let i = num - 1;

  while (i > 0) {
    if (i % 2 == 0) console.log(i);
    i--;
    if (i == 0) break;
  }
};

minorNumbers();