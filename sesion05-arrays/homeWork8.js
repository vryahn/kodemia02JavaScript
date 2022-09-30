// homeWork8. Dados los números enteros mostrar la lista de los números impares comprendidos entre ellos.

let start = prompt('Indique primer número: ');
let finish = prompt('Indique último número: ');
let i = start;
let odds = 0;

while(i<=finish)
{
    if(i%2!=0)
    {
        console.log(i);
        odds++;
    }
    i++;
}

console.log('Cantidad de Impares: '+odds);