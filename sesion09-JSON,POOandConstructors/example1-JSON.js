/* Example 1. JSON
JSON está contituido por dos estructuras:
    1. Una colección de pares de nombre/valor.
    2. Una lista ordenada de valores.
*/

const productos = [
  {
    nombre: "Funko POP Star Wars",
    precioDelProducto: 450,
    SKU: "234432434",
  },
  {
    nombre: "acer nicro 5",
    precioDelProducto: 13000,
    SKU: "1231323",
  },
  {
    nombre: "Funko POP Star Wars",
    precioDelProducto: 450,
    SKU: "234432434",
  },
];

json = JSON.stringify(productos);

arreglo = JSON.parse(json);

const factura = {
  emisor: "Alfred",
  concepto: "Compra de productos de limpieza para pc",
  productos: [
    {
      nombre: "Toalla de microfibra",
      precio: 100,
      cantidad: 2,
    },
  ],
};

json2 = JSON.stringify(factura);
