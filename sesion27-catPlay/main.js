const a1 = document.getElementById("1");
const a2 = document.getElementById("2");
const a3 = document.getElementById("3");
const a4 = document.getElementById("4");
const a5 = document.getElementById("5");
const a6 = document.getElementById("6");
const a7 = document.getElementById("7");
const a8 = document.getElementById("8");
const a9 = document.getElementById("9");

let jugador = false;

a1.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a1.innerText = "X";
    jugador = !jugador;
  } else {
    a1.dataset.value = "O";
    jugador = !jugador;
    a1.innerText = "O";
  }
  combinacionesGanadoras();
});

a2.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a2.innerText = "X";
    jugador = !jugador;
  } else {
    a2.dataset.value = "O";
    jugador = !jugador;
    a2.innerText = "O";
  }
  combinacionesGanadoras();
});

a3.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a3.innerText = "X";
    jugador = !jugador;
  } else {
    a3.dataset.value = "O";
    jugador = !jugador;
    a3.innerText = "O";
  }
  combinacionesGanadoras();
});

a4.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a4.innerText = "X";
    jugador = !jugador;
  } else {
    a4.dataset.value = "O";
    jugador = !jugador;
    a4.innerText = "O";
  }
  combinacionesGanadoras();
});

a5.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a5.innerText = "X";
    jugador = !jugador;
  } else {
    a5.dataset.value = "O";
    jugador = !jugador;
    a5.innerText = "O";
  }
  combinacionesGanadoras();
});

a6.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a6.innerText = "X";
    jugador = !jugador;
  } else {
    a6.dataset.value = "O";
    jugador = !jugador;
    a6.innerText = "O";
  }
  combinacionesGanadoras();
});

a7.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a7.innerText = "X";
    jugador = !jugador;
  } else {
    a7.dataset.value = "O";
    jugador = !jugador;
    a7.innerText = "O";
  }
  combinacionesGanadoras();
});

a8.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a8.innerText = "X";
    jugador = !jugador;
  } else {
    a8.dataset.value = "O";
    jugador = !jugador;
    a8.innerText = "O";
  }
  combinacionesGanadoras();
});

a9.addEventListener("click", (e) => {
  e.preventDefault();

  if (jugador == false) {
    e.target.dataset.value = "X";
    console.log(e.target);
    a9.innerText = "X";
    jugador = !jugador;
  } else {
    a9.dataset.value = "O";
    jugador = !jugador;
    a9.innerText = "O";
  }
  combinacionesGanadoras();
});

const combinacionesGanadoras = () => {
  if (a1.innerText == "X" && a2.innerText == "X" && a3.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a1.innerText == "O" && a2.innerText == "O" && a3.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a4.innerText == "X" && a5.innerText == "X" && a6.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a4.innerText == "O" && a5.innerText == "O" && a6.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a1.innerText == "X" && a4.innerText == "X" && a7.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a1.innerText == "O" && a4.innerText == "O" && a7.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a7.innerText == "X" && a8.innerText == "X" && a9.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a7.innerText == "O" && a8.innerText == "O" && a9.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a2.innerText == "X" && a5.innerText == "X" && a8.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a2.innerText == "O" && a5.innerText == "O" && a8.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a3.innerText == "X" && a6.innerText == "X" && a9.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a3.innerText == "O" && a6.innerText == "O" && a9.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a1.innerText == "X" && a5.innerText == "X" && a9.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a1.innerText == "O" && a5.innerText == "O" && a9.innerText == "O")
    alert("GANASTE YUGUI!");
  if (a3.innerText == "X" && a5.innerText == "X" && a7.innerText == "X")
    alert("GANASTE KAIBA!");
  if (a3.innerText == "O" && a5.innerText == "O" && a7.innerText == "O")
    alert("GANASTE YUGUI!");
};
