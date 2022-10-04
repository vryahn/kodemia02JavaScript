// Ejercicio 1. Continue

const calificaciones = [8, 7, 10, 10, 4, 5, 10, 7, 9, 1]

for(const calificacion of calificaciones){
  if(calificacion<6) continue;
  console.log('Calificacion: '+calificacion)
}