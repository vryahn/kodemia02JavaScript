// map. Crea un nuevo array con los resultados de la llamada a la función indicada (callback) aplicados a cada uno de sus elementos

const numeros = [1,2,3,4,5,6,7,8,9,10];
const multiplicador = 5;

const tablaCinco = numeros.map(num=>num*multiplicador);
console.log(tablaCinco);

const tablaCincoX = numeros.map((num,index)=>{
  console.log(index);
  return num*multiplicador
});

json = [
  { id: 1, nombre: 'Trish', edad: 77 },
  { id: 2, nombre: 'Bendite', edad: 97 },
  { id: 3, nombre: 'Merrily', edad: 63 },
  { id: 4, nombre: 'Agnella', edad: 95 },
  { id: 5, nombre: 'Mureil', edad: 78 },
  { id: 6, nombre: 'Chickie', edad: 15 },
  { id: 7, nombre: 'Anica', edad: 16 },
  { id: 8, nombre: 'Rochell', edad: 39 },
  { id: 9, nombre: 'Kaycee', edad: 93 },
  { id: 10, nombre: 'Blondie', edad: 9 },
  { id: 11, nombre: 'Sibley', edad: 35 },
  { id: 12, nombre: 'Eveline', edad: 71 },
  { id: 13, nombre: 'Judye', edad: 27 },
  { id: 14, nombre: 'Velma', edad: 2 },
  { id: 15, nombre: 'Gilbertine', edad: 33 },
  { id: 16, nombre: 'Minette', edad: 78 },
  { id: 17, nombre: 'Randi', edad: 15 },
  { id: 18, nombre: 'Nertie', edad: 96 },
  { id: 19, nombre: 'Tish', edad: 67 },
  { id: 20, nombre: 'Neila', edad: 40 },
  { id: 21, nombre: 'Diane-marie', edad: 42 },
  { id: 22, nombre: 'Josepha', edad: 33 },
  { id: 23, nombre: 'Elli', edad: 37 },
  { id: 24, nombre: 'Marlee', edad: 27 },
  { id: 25, nombre: 'Glynis', edad: 35 },
  { id: 26, nombre: 'Renate', edad: 96 },
  { id: 27, nombre: 'Lilia', edad: 44 },
  { id: 28, nombre: 'Jennine', edad: 85 },
  { id: 29, nombre: 'Celeste', edad: 14 },
  { id: 30, nombre: 'Kriste', edad: 11 },
  { id: 31, nombre: 'Jacklyn', edad: 4 },
  { id: 32, nombre: 'Estella', edad: 81 },
  { id: 33, nombre: 'Della', edad: 47 },
  { id: 34, nombre: 'Virginie', edad: 97 },
  { id: 35, nombre: 'Alyss', edad: 98 },
  { id: 36, nombre: 'Lexi', edad: 67 },
  { id: 37, nombre: 'Melisenda', edad: 17 },
  { id: 38, nombre: 'Henrie', edad: 43 },
  { id: 39, nombre: 'Fayth', edad: 13 },
  { id: 40, nombre: 'Fulvia', edad: 76 },
  { id: 41, nombre: 'Michaelina', edad: 99 },
  { id: 42, nombre: 'Lurlene', edad: 30 },
  { id: 43, nombre: 'Winni', edad: 7 },
  { id: 44, nombre: 'Ivie', edad: 36 },
  { id: 45, nombre: 'Kikelia', edad: 14 },
  { id: 46, nombre: 'Cherice', edad: 41 },
  { id: 47, nombre: 'Milena', edad: 78 },
  { id: 48, nombre: 'Roberta', edad: 50 },
  { id: 49, nombre: 'Andeee', edad: 74 },
  { id: 50, nombre: 'Astrid', edad: 62 },
  { id: 51, nombre: 'Lani', edad: 78 },
  { id: 52, nombre: 'Ainslee', edad: 65 },
  { id: 53, nombre: 'Ardenia', edad: 87 },
  { id: 54, nombre: 'Harlie', edad: 81 },
  { id: 55, nombre: 'Gabriella', edad: 82 },
  { id: 56, nombre: 'Stefanie', edad: 93 },
  { id: 57, nombre: 'Asia', edad: 35 },
  { id: 58, nombre: 'Dyan', edad: 87 },
  { id: 59, nombre: 'Lucila', edad: 94 },
  { id: 60, nombre: 'Penni', edad: 64 },
  { id: 61, nombre: 'Bobette', edad: 16 },
  { id: 62, nombre: 'Monah', edad: 34 },
  { id: 63, nombre: 'Andra', edad: 49 },
  { id: 64, nombre: 'Brigitte', edad: 49 },
  { id: 65, nombre: 'Deane', edad: 5 },
  { id: 66, nombre: 'Alisa', edad: 65 },
  { id: 67, nombre: 'Katrinka', edad: 80 },
  { id: 68, nombre: 'Morganica', edad: 86 },
  { id: 69, nombre: 'Brear', edad: 52 },
  { id: 70, nombre: 'Willy', edad: 61 },
  { id: 71, nombre: 'Netti', edad: 53 },
  { id: 72, nombre: 'Carolynn', edad: 47 },
  { id: 73, nombre: 'Mina', edad: 21 },
  { id: 74, nombre: 'Mavis', edad: 81 },
  { id: 75, nombre: 'Nata', edad: 95 },
  { id: 76, nombre: 'Gina', edad: 41 },
  { id: 77, nombre: 'Maible', edad: 42 },
  { id: 78, nombre: 'Tiffanie', edad: 33 },
  { id: 79, nombre: 'Valry', edad: 87 },
  { id: 80, nombre: 'Luz', edad: 28 },
  { id: 81, nombre: 'Bertha', edad: 16 },
  { id: 82, nombre: 'Dorice', edad: 30 },
  { id: 83, nombre: 'Bernita', edad: 7 },
  { id: 84, nombre: 'Suzann', edad: 61 },
  { id: 85, nombre: 'Valene', edad: 20 },
  { id: 86, nombre: 'Emma', edad: 11 },
  { id: 87, nombre: 'Amalea', edad: 71 },
  { id: 88, nombre: 'Rozele', edad: 12 },
  { id: 89, nombre: 'Melicent', edad: 54 },
  { id: 90, nombre: 'Paule', edad: 78 },
  { id: 91, nombre: 'Janet', edad: 27 },
  { id: 92, nombre: 'Cynthia', edad: 18 },
  { id: 93, nombre: 'Abbey', edad: 10 },
  { id: 94, nombre: 'Nettie', edad: 44 },
  { id: 95, nombre: 'Shirline', edad: 52 },
  { id: 96, nombre: 'Agnese', edad: 50 },
  { id: 97, nombre: 'Abbi', edad: 3 },
  { id: 98, nombre: 'Cari', edad: 9 },
  { id: 99, nombre: 'Brigitta', edad: 41 },
  { id: 100, nombre: 'Kirstyn', edad: 46 }
];

const data = JSON.stringify(json);

const dataConvert = json.map((data)=>{
  data.esMayorEdad = data.edad >= 18;
  return data;
});

console.log(dataConvert);

// INVESTIGAR OPERADOR SPREAD

const vengadores = [
    { nombre: 'Tony', apellidos: 'Stark'},
    { nombre: 'Steve', apellidos: 'Rogers' },
    { nombre: 'Bruce', apellidos: 'Banner' },
    { nombre: 'Natasha', apellidos: 'Romanoff' },
    { nombre: 'Thor', apellidos: 'Odinson' },
    { nombre: 'Clint', apellidos: 'Barton' },
  ];

  // Reduce. Ejemplo 1. 

const numeross = [1,2,3,4,5,6,7,8,9,10];

const suma = numeross.reduce((prev,actual)=>{
 console.log({prev,actual}) 
return prev+actual 
},0);

console.log(suma);

const vengadoress = [
    { nombre: 'Tony', apellidos: 'Stark'},
    { nombre: 'Steve', apellidos: 'Rogers' },
    { nombre: 'Bruce', apellidos: 'Banner' },
    { nombre: 'Natasha', apellidos: 'Romanoff' },
    { nombre: 'Thor', apellidos: 'Odinson' },
    { nombre: 'Clint', apellidos: 'Barton' },
  ];

const objetoNuevo = vengadoress.reduce((prev,actual,index)=>{
  prev[index] = actual;
  return prev;
},{});

console.log(objetoNuevo);

// Reduce. Ejemplo 2

const numerox = [1,1,1,1,1,6,6,6,6,8,8,8,8,10,10,34,34,56];

const numerosUnicos = numerox.reduce((prev,actual)=>{
  const existeNumero = prev.find((numero)=>numero===actual);
  if(!existeNumero) prev.push(actual);
  return prev;
},[]);

console.log(numerosUnicos);