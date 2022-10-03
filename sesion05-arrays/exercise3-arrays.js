// Exercise 3. Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros

let array = [1, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 10, 10, 11, 11, 11];
let arrayIsoled = [];
let arrayCount = [];

const countingRepeated = () => {

// Primero en arrayIsoled guardamos los elementos de array, sin repetirse.
  
let indexIsoled = 0;
for (let i = 0; i < array.length; i++)
  {
    let saving = true;
    for (let x = 0; x < array.length; x++)
      {
        if (i != x)
        {
        	if (array[i] == arrayIsoled[x]) saving=false;
      	}
      } if(saving==true)
      	{
        	arrayIsoled[indexIsoled]=array[i];
          indexIsoled++;
      	}
  }

// En arrayCount guardaremos la cantidad de repeticiones por elemento, primero lo inicializamos en 0 con un tamaño de elementos igual a arrayIsoled
  
for (let i = 0; i < arrayIsoled.length; i++)
  {
    arrayCount[i]=0;
  }

// Ahora compararemos veremos para cada elemento de arrayIsoled, cuantas veces aparece en el arreglo original, y guardaremos cada aparicion del elemento en arrayCount
  
for (let i = 0; i < arrayIsoled.length; i++)
  {
    for (let x = 0; x < array.length; x++)
      {
        	if (arrayIsoled[i] == array[x]) arrayCount[i]++;
      }
  }
  
}

// Por último, imprimimos el resultado de forma amigable al usuario

const printResult = () => {
  for (let i = 0; i < arrayIsoled.length; i++)
    {
      if(arrayCount[i]==1)
        {
          console.log("El Numero "+arrayIsoled[i]+" se repite: "+arrayCount[i]+" vez")
        } else {
          console.log("El Numero "+arrayIsoled[i]+" se repite: "+arrayCount[i]+" veces")
        }
    }
}

countingRepeated();
printResult();