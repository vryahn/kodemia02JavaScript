import environment from "./environment";

const createItemList = (id, contenido, estado) => {
    const li = document.createElement('li');
    li.setAttribute('id', id);
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
    const content = document.createElement('div')
    content.classList.add('ms-2', 'me-auto');
    const title = document.createElement('div');
    title.classList.add('fw-bold');
    title.innerText = contenido;
    const spanEstado = document.createElement('span');
    spanEstado.innerText = estado ? 'Completada' : 'Pendiente';
    content.appendChild(title);
    content.appendChild(spanEstado);
    li.appendChild(content);
    return li;
}

const urlColeccion = environment.urlDb + '/tareas.json';
const lista = document.getElementById('lista-tareas');
const spinner = document.getElementById('spinner');

const monstrarTareas = (tareas) => {
    lista.innerHTML = '';
    tareas.forEach((tarea) => {
        const item = createItemList(tarea.id, tarea.contenido, tarea.estado);
        lista.appendChild(item);
    });
}
const init = () => {
    spinner.classList.remove('d-none');
    fetch(urlColeccion)
        .then(resp => resp.json())
        .then(data => {
            const keys = Object.keys(data);
            const tareas = keys.map((key) => {
                const tarea = data[key];
                const tareaCompleta = {
                    id: key,
                    ...tarea
                };
                return tareaCompleta;
            });
            monstrarTareas(tareas);

            spinner.classList.add('d-none');
            // const tareas = keys.reduce((prev, acc) => {
            //     const tarea = data[acc];
            //     const tareaCompleta = {
            //         id: acc,
            //         ...tarea
            //     }
            //     prev.push(tareaCompleta);
            //     return prev;
            // }, []);

        })
        .catch(error => {
            console.log(error);
            spinner.classList.add('d-none');
        });
}


init();