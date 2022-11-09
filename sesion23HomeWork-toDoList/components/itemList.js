const createItemList = (id, contenido, estado) => {
    const li = document.createElement("li");
    li.setAttribute("id",id);
    li.classList.add("list-group-item", "d-flex", "justify-content-start");
    const content = document.createElement("div");
    content.classList.add("ms-2", "me-auto");
    const title = document.createElement("div");
    title.classList.add("fw-bold");
    title.innerText = contenido;
    const spanEstado = document.createElement("span"); //
    spanEstado.innerText = estado ? "Completada" : "Pendiente"
    content.appendChild(title);
    content.appendChild(spanEstado);
    li.appendChild(content);
    return li;
}

export default createItemList;