// Ejercicios Método map

// 1. Dado un arreglo de numero 1 a 10 recupera en un arreglo la elevación al cuadrado de cada numero.

const numeros = [1,2,3,4,5,6,7,8,9,10];

const elevacion = numeros.map(num=>num**2);
console.log(elevacion);

// 2. Dado el objeto literal de un vengador recupera el nombre completo (nombre y apellido) por cada elemento.

const vengadores = [
    { nombre: 'Tony', apellidos: 'Stark'},
    { nombre: 'Steve', apellidos: 'Rogers' },
    { nombre: 'Bruce', apellidos: 'Banner' },
    { nombre: 'Natasha', apellidos: 'Romanoff' },
    { nombre: 'Thor', apellidos: 'Odinson' },
    { nombre: 'Clint', apellidos: 'Barton' },
  ];

const nombreCompleto = vengadores.map(vengadores=>vengadores.nombre+' '+vengadores.apellidos);
console.log(nombreCompleto);