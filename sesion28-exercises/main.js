const e1 = document.getElementById("1");
const e2 = document.getElementById("2");
const e3 = document.getElementById("3");
const e4 = document.getElementById("4");
const e5 = document.getElementById("5");
const e6 = document.getElementById("6");
const e7 = document.getElementById("7");
const e8 = document.getElementById("8");
const e9 = document.getElementById("9");
const e10 = document.getElementById("10");
const e11 = document.getElementById("11");
const e12 = document.getElementById("12");

const random = () => Math.floor(Math.random() * 12);
const iluminados = []

const iluminarOtro = () => {
  iluminados.push(random());
}

const luces = () => {
    console.log(iluminados)
}

iluminarOtro();
iluminarOtro();
iluminarOtro();
iluminarOtro();
iluminarOtro();
iluminarOtro();

luces();