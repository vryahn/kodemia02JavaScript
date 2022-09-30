// Example 1. Obtener el promedio de un arreglo de calificaciones.

const array = [10, 9.5, 8, 6, 10];

const getProm = () => {
    let suma = 0;
    let promedio = 0;
for(let i=0;i<array.length;i++)
    {
  	suma = suma+(array[i]);
  	promedio = suma/(array.length)
    }
	return promedio;
}

getProm();