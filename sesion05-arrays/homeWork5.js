// homeWork5. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad)

const getAgeAndPrintMinors = () => {
  let years = prompt("Estimado usuario, indique su edad: ");

  let i = 1;
  while (i <= years) {
    console.log("Ya cumpliste " + i + " años");
    i++;
  }
};

getAgeAndPrintMinors();