// homeWork2. El usuario ingresará sucesivamente un número, el programa deberá dejar de solicitar un valor si el número ingresado está en el rango de 1 a 5.

let num = [];

const getNumbers = () => {
  let i = 0;
  let getOut = false;
  do {
    num[i] = Number(prompt("Introduzca número " + (i + 1) + ": "));
    if (num[i] >= 1 && num[i] <= 5) getOut = true;
    i++;
  } while (getOut == false);
};

const printNumbers = () => {
  for (let i = 0; i < num.length; i++) console.log(num[i]);
};

getNumbers();
printNumbers();