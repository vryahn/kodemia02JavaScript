// Métodos de Array
/* Es una colección de elementos u objetos el cual guarda la información como elementos y los regresa.

Todos los objetos JavaScript heredan propiedades y métodos de un prototipo.

Por lo cual actúa como una plantilla desde la que el objeto hereda propiedades y métodos.
*/

// Declarar arreglos con constructores
const frutas = new Array('Pera','Papaya');
frutas

// :::: Métodos de Arreglos ::::
const superHeroes = ['Spider-man','Batman','El Santo','El Chapulin Colorado']

// forEach. forOf como método :)
superHeroes.forEach((heroe) => {
  console.log(({heroe}));
})

superHeroes.forEach((heroe,index) => {
  console.log(({
    heroe,
    index
  }));
})

// findIndex. Recorre el arreglo hasta encontrar la coincidencia buscada y devuelve el indice de la coincidencia, o devuelve -1 si no lo encuentra.
superHeroes.findIndex((item)=>item==='Thor');

superHeroes.findIndex((item)=>{
  console.log(item==='Spider-man')
  return item==='asd'
});

superHeroes.findIndex((item)=>{
  console.log(item)
  return item==='Batman'
});
