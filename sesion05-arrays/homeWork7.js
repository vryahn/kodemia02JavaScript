// homeWork7. Calcular y mostrar la cantidad de números pares comprendidos entre dos números ingresados.

const pairNumbers = () => {
  let start = prompt("Indique primer número: ");
  let finish = prompt("Indique último número: ");
  let i = start;
  let pairs = 0;

  while (i <= finish) {
    if (i % 2 == 0) {
      console.log(i);
      pairs++;
    }
    i++;
  }

  console.log("Cantidad de Pares: " + pairs);
};

pairNumbers();