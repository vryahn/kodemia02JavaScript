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

// reverse. Invierte el orden de todos los elementos en un arreglo.

const villanos = ['Venom','Boba Fet','Soraya Montenegro','Karla Panini']

villanos.reverse()
villanos.reverse().reverse().reverse();

// sort. Ordena los elementos en un arreglo

const numeros = [1,4,5,7,8,34,453,23,34,2342,45646,234]

numeros.sort(); // ordenar alfabeticamente
numeros.sort((a,b)=>a-b); // ordenar por valor de números

numeros.sort((a,b)=>{
  if(a>b){
    return 1;
  }
  if(a>b){
    return -1;
  }
  return 0;
}); // ordenar por valor de números

// filter. Recibe un callback true/false y devuelve todos los elementos que cumplan con la función.

const edades = [17,19,20,30,25,19,45,29,15];

const menoresEdad = edades.filter((edad)=>edad<18);
console.log(menoresEdad);

const mayoresEdad = edades.filter((edad)=>edad>=18);
console.log(mayoresEdad);

// slice. Devuelve posiciones del arreglo, lo que hay entre un index y una posición

const primerosElementos = edades.slice(1,5);
console.log(primerosElementos);

// unshift. Agrega uno o más elementos al inicio del arreglo

edades.unshift(100);
edades;

// shift. Devuelve el primer elemento del arreglo y lo elemina del arreglo

edades.shift();
edades;

//splice. Devuelve los elementos que se encuetran desde el inidice indicado, la cantidad de elementos indicada

edades.splice(0,3)
edades;

// reduce. Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const sumaEdades = edades.reduce((sum,element)=>sum+element,0); // sintaxis reduce: ((callback cuyos argumentos son contadorparasumar y elemntos del arreglo, y una suma de ambos),valor inicial de contadorparasumar)
console.log(sumaEdades);