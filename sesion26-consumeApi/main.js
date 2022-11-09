const contenedorMensajes = document.querySelector("#mainContainer");
const crearCardSuperHeroe = (nombre,descripcion,imagen) => {//funcion que recibe una img, nombre y descripcion
  const cardBody = document.createElement("div");//crea un elemento tipo div
  cardBody.classList.add("card”,“w-25","m-2”); // agrega una clase de tipo card
  contenedorMensajes.appendChild(cardBody);//agrega un hijo/nodo
  const imgCard = document.createElement("img");
  imgCard.classList.add("card-img-top");
  imgCard.src = imagen;//link de la imagen dada por el usuario
  cardBody.appendChild(imgCard);
  const cardTittle = document.createElement("h5");
  cardTittle.classList.add("card-tittle");
  cardTittle.innerText = nombre;//nombre del superheroe dado x el usuario
  cardBody.appendChild(cardTittle);
  const p1 = document.createElement("p");
  p1.classList.add("card-text");
  p1.innerText = descripcion;//descripcion del superheroe dado x el usuario
  cardTittle.appendChild(p1);
};
const main = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((res) => res.json())
    .then((data) => {
        const personajes = data.results
        for(const personaje of personajes){
            crearCardSuperHeroe(//invocamos la funcion para que vaya mostrando lo que tiene el json
             personaje.name,//heroe.nombre hace referencia al json
             personaje.gender,
             personaje.image);
         }
        console.log(personajes);
    })
    .catch(err => console.log(err))
}
main();