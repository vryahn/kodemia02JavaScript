// homeWork10. Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectándulo como el siguiente:
/*
*
**
***
****
*****
*/

let num = 2; //Number(prompt("Ingrese numero aqui mero: "));

const triangle = (s) => {
    for(let i=1;i<=s;i++)
    {
        for(let x=1;x<=s;x++)
        {
          console.log("*");
        } 
    }
}

triangle(num);