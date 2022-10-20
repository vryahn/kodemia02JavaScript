// ::: Manipulación del DOM :::

/* El DOM da una representación del documento como un grupo de nodos / objetos estructurados que tienen propiedades métodos. En otras palabras es la representación de la páguna web en la memoria del navegador.
Con base en este elemento es posible agregar, actualizar, eliminar elementos dentro de nuestro documento html cargado. */


// ::: createElement :::
// document.createElement('elemento_a_crear');
/*
const body = document.querySelector('body');
console.log(body);

const parrafo = document.createElement('p');
console.log(parrafo);
parrafo.innerText = 'Hola, hace años queria escribirte';
body.appendChild(parrafo);

const div = document.createElement('div');
div.innerText='Hermano cayó la ley';
body.appendChild(div);

const body = document.querySelector('body');
const contenedor = document.createElement('div'); //creo mi contenedor que es un div
contenedor.classList.add('container','text-center'); //le agrego clases a mi contenedor
body.appendChild(contenedor);
contenedor.innerText = 'Este es el contenedor';

const row = document.createElement('div');
row.classList.add('row');
contenedor.appendChild(row);

for(let i=0; i<8; i++)
{
    const col = document.createElement('div');
    col.classList.add('col-sm-4','p-3','mb-2','bg-primary','text-center');
    col.innerText = 'Columna'+(i+1);
    row.appendChild(col);
}

*/

// ::: appendChild :::


// ::: removeChild :::


// ::: insert[Before,After] :::


// ::: innerHTML :::

// ::: setAttribute :::

// ::: Insert[Before,After] :::

// .before / .after
// inserta en un nodo en la posición por fuera arriba / por fuera abajo

// .before / .after
// inserta en un nodo en la posición por fuera arriba / por fuera abajo


// ::: Ejercicio. Crear la siguiente Card manipulando el DOM :::

/*
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/

const body = document.querySelector('body');

const card = document.createElement('div');
card.classList.add('card');

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const h5 = document.createElement('h5');
h5.classList.add('h5','card-title');
h5.innerText = 'Card title';

const h6 = document.createElement('h5');
h6.classList.add('h6','card-subtitle', 'mb-2', 'text-muted');
h6.innerText = 'Card subtitle';

const p = document.createElement('p');
p.classList.add('card-text');
p.innerText = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

const a1 = document.createElement('a');
a1.classList.add('card-link');
a1.innerText = 'Card link';

const a2 = document.createElement('a');
a2.classList.add('card-link');
a2.innerText = 'Another link';


cardBody.appendChild(h5);
cardBody.appendChild(h6);
cardBody.appendChild(p);
cardBody.appendChild(a1);
cardBody.appendChild(a2);
card.appendChild(cardBody);
body.appendChild(card);