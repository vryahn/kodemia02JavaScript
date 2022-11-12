const db = "https://hey-arnold-default-rtdb.firebaseio.com/to-do-list";

// Crear tarea
const newTaskDescriptionInput = document.querySelector("#new-task_description");

const newTaskBtn = document.querySelector("#new-task_button");

newTaskBtn.addEventListener("click", () => {
  const newTask = {
    description: newTaskDescriptionInput.value,
    isCompleted: "false",
  };
  fetch(db + ".json", {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log("Recibí estos datos :", data);
  }).catch((err)=> {
    console.error("Ocurrió un error: ", err);
  });
  console.log("Nueva tarea", newTask);
});

/* .then((res) => res.json())
.then((response) => console.log("Success", response))
.catch((error) => console.error("Error: ", error)); */