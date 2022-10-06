// homeWork 1. En una empresa que se dedica a vender productos por internet, necesita un pequeño programa para registrar las ventas del día, por cada producto se tiene un SKU, precio, descripción, modelo , número de serie. Esta última característica puede o no tenerla, sin embargo, todas las propiedades anteriores (Excepto número de serie ) son obligatorias. Una vez registradas todas las ventas del día, deberás hacer el cálculo de todo lo vendido en el día, notificándoselo al usuario, así como el producto más vendido del día, en este caso el producto se debió de vender al menos más de dos veces.

const createProduct = (sku,precio,descripcion,modelo,serie='') => ({
  sku,
  precio,
  descripcion,
  modelo,
  serie
})

let choice = null;
let products = [];
let count = 0;

do {
  console.log('Ingrese producto vendido')
  const product = createProduct();
  for(const key in product){
    product[key] = prompt('Ingresa '+key);
  }
  products[count]=product;
  count++;
  choice = confirm('Vendió más productos?');
} while(choice);

const totalSells = (products) => {
  let sells = 0;
  for(key in products)
      {
      sells+=Number(products[key].precio);
        } return sells;
}

console.log('El total vendido fue de : '+totalSells(products));

// Aqui se viene lo bueno...

// Primero en arrayIsoled guardamos los elementos de array, sin repetirse.

let arrayIsoled = [];
let arrayCount = [];

const countingRepeated = () => {

let indexIsoled = 0;
for (let i = 0; i < products.length; i++)
  {
    let saving = true;
    for (let x = 0; x < products.length; x++)
      {
        if (i != x)
        {
        	if (products[i].sku == arrayIsoled[x]) saving=false;
      	}
      } if(saving==true)
      	{
        	arrayIsoled[indexIsoled]=products[i].sku;
          indexIsoled++;
      	}
  }

// En arrayCount guardaremos la cantidad de repeticiones por elemento, primero lo inicializamos en 0 con un tamaño de elementos igual a arrayIsoled
  
for (let i = 0; i < arrayIsoled.length; i++)
  {
    arrayCount[i]=0;
  }

// Ahora veremos para cada elemento de arrayIsoled, cuantas veces aparece en el arreglo original, y guardaremos cada aparicion del elemento en arrayCount
  
for (let i = 0; i < arrayIsoled.length; i++)
  {
    for (let x = 0; x < products.length; x++)
      {
        	if (arrayIsoled[i] == products[x].sku) arrayCount[i]++;
      }
  }
}

// Por último, imprimimos el resultado de forma amigable al usuario

const printResult = () => {
  for (let i = 0; i < arrayIsoled.length; i++)
    {
      if(arrayCount[i]==1)
        {
          console.log("El Numero "+arrayIsoled[i]+" se repite: "+arrayCount[i]+" vez")
        } else {
          console.log("El Numero "+arrayIsoled[i]+" se repite: "+arrayCount[i]+" veces")
        }
    }
}

countingRepeated();
printResult();