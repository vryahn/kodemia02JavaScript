// Ejercicio 3. Muestra la suma de los números impares del 1 al 100

const impares = () => {
    let contador = 1;
    let suma = 0;
    while(contador<=100){
        if(contador%2!=0) suma=suma+contador;
        contador++
    }
    console.log(suma);
}

impares();