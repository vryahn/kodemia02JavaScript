// homeWork 1. En una empresa que se dedica a vender productos por internet, necesita un pequeño programa para registrar las ventas del día, por cada producto se tiene un SKU, precio, descripción, modelo , número de serie. Esta última característica puede o no tenerla, sin embargo, todas las propiedades anteriores (Excepto número de serie ) son obligatorias. Una vez registradas todas las ventas del día, deberás hacer el cálculo de todo lo vendido en el día, notificándoselo al usuario, así como el producto más vendido del día, en este caso el producto se debió de vender al menos más de dos veces.

const createProduct = (sku, precio, descripcion, version = "", serie = "") => ({
  sku,
  precio,
  descripcion,
  version,
  serie,
});

ejemplos = createProduct();

ejemplos = [
  {
    sku: "K001",
    precio: 11000,
    descripción: "PlayStation 5",
  },
  {
    sku: "K002",
    precio: 6000,
    descripción: "Xbox Series S",
  },
  {
    sku: "K003",
    precio: 14000,
    descripción: "Xbox Series X",
  },
  {
    sku: "K004",
    precio: 6000,
    descripción: "Nintendo Switch",
  },
  {
    sku: "K005",
    precio: 8000,
    descripción: "Nintendo Switch OLED",
  },
];

const ingresandoVentas = () => {
  console.log("Bienvenido al ingreso de Ventas");
  choice = console.confirm("Desea ingresar un elemento vendido?");
  if (choice == false) {
    console.log("Entonces que chingados hace usted aqui? ... buen dia :)");
  } else {
    do {
      registrarVenta();
      choice = console.confirm("Desea ingresar un elemento adicional?");
      if(choice==false)
      {
        devolverSuma();
        devolverMasVendido();
        console.log('Chau Gor2')
      }
    } while (choice == true);
  }
};

const registrarVenta = () => {
  let x = null;
  switch (x){
    
  }
}

/* ::::: Version con Prompt :::::

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

*/
