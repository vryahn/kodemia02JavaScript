//Ejercicio 0.1. Calcula el tiempo que tarda en recorrer X distancia un carrito que corre a 16 KM/h.

let recorrido = 120;

const tiempoCarrito	= (distancia) => {
  velocidad = 16000;
  console.log((((distancia/velocidad)*60)*60)+' segundos');
  console.warn((((distancia/velocidad)*60))+' minutos');
  console.error((distancia/velocidad)+' horas');
}

tiempoCarrito(recorrido);