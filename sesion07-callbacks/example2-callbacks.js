//Ejemplo 2. Callbacks. Simulando petición a un servidor

const peticionServidor = (callback) => {
    const calificaciones = [1,2,3,4,5,6];
    setTimeout(() => {
      callback(calificaciones);
    },5000)
  }
  
  const mostrarCalificacion = (calificaciones => {
    for(const calificacion of calificaciones){
      console.log(calificacion);
    }
  })
  
  peticionServidor(mostrarCalificacion);