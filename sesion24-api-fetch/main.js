import environment from "./environment.js";

const urlColeccion = environment.urlDb + '/tareas.json';

const tarea = {
    contenido: 'Hacer ejercicio',
    estado: false
}

const init = () => {
    fetch(urlColeccion, {method: 'GET'}) // por default toma el método get, por lo que puede obviarse ese argumento.
.then(resp => resp.json());
.then(data => {
    const key = Object.keys(data);
    const tareas = keys.reduce((prev, act)=>{

    },[]);
}
.catch(error => console.log(error));
}

/* fetch(urlColeccion, {
    method: 'POST',
    body: JSON.stringify(tarea),
    headers: {
        'Content-Type': 'application/json'
    }
});
.then(res => resp.json());
.then(data => console.log(data));
.catch(error => console.log(error)); */

