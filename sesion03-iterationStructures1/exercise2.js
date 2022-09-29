// Ejercicio 2. Dado un número, obtener la tabla de multiplicar.

let numero = 1;

const tablaMultiplicar = (numero) => {
    let x=1;
    while(x<=10){
        console.log(x*numero);
        x++;
    }
}

tablaMultiplicar(numero);