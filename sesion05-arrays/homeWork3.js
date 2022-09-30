// homeWork3. Solicita al usuario un número "x" y posteriormente seguir solicitando números sucesivamente hasta encontrar uno que sea igual al número "x". Indicar el número de intentos hasta encontrar "x".

const countNum = () => {
  let count = 0;
  let repeating = true;
  let num = [];
  num[0] = prompt("Ingresa número original: ");
  for (let i = 1; repeating == true; i++) {
    count++;
    num[i] = prompt("Ingresa número: ");
    if (num[i] == num[0]) repeating = false;
  }
  return count;
};

console.log("Intentos requeridos; " + countNum());
