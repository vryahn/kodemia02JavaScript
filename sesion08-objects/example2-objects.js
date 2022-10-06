/* Example 2.
Crea un programa que registre N cantidad de estudiantes, cada estudiante tien un Nombre, Apellido, Carrera o Licenciatura, Matrícula y Promedio General. Los datos deben ser guardados en un arreglo de objetos literales, además de preguntarle al usuario si desea registrar o no más usuarios.
*/

const crearEstudiante = (nombre='',apellido='',carrera='',matricula='',promedio='') => ({
    nombre,
    apellido,
    carrera,
    matricula,
    promedio
  });
  
  let continuar = null;
  let estudiantes = [];
  let contador = 0;
  
  do {
    const estudiante = crearEstudiante();
    console.log(estudiante);
    for(const key in estudiante) {
      estudiante[key]=prompt('Ingresa '+key);
    }
    estudiantes[contador]=estudiante;
    contador++;
    continuar = confirm('Deseas agregar más estudiantes?');
  } while(continuar)
    
    console.log({estudiantes});

  sumaPromedios = 0;
    for(key in estudiantes)
    {
      sumaPromedios+=Number(estudiantes[key].promedio);
    }
  
  let promedioGeneracion = sumaPromedios/estudiantes.length;