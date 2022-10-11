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

const heroes = [{
  nombre:'Peter Parker',
  alias:'Spider-man',
  poder:'Trepar como araña'
},
{
	nombre:'Bruce Wayne',
  alias:'Batman',
  poder:'Ninguno'
},
{
	nombre:'La Usurpadora',
  alias:'Ella mera',
  poder:'Ninguno'
}]

const indexSpiderman = heroes.findIndex((heroe)=>heroe.poder==='Ninguno');
console.log(indexSpiderman);

// find. Devuelve el valor del primer elemento que cumple con la funcion proporcionada.
const buscaSpiderman = heroes.find((heroe)=>heroe.poder==='Ninguno');
console.log(buscaSpiderman);

// IMPORTANTE: find y findIndex deben usar callbacks que devuelvan verdadero/falso para funcionar correctamente.

// pop. Devuelve el ultimo elemento del arreglo y borra su contenido.
const ultimoHeroe = heroes.pop();
console.log(ultimoHeroe);

// push. Inserta nuevos elementos al final del arreglo
heroes.push({
  nombre: '',
  alias:'She Hulk',
  poder:'Super Fuerza'
});
console.log(heroes);