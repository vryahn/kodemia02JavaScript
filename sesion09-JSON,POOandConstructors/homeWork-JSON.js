/* homeWork. JSON.
Crear una cadena de caracteres que sea un JSON válido.
Entregar un arreglo con al menos tres objetos literales, con al menos 3 propiedades cada uno.
*/

const motos = [{
    categoria: 'Ciudad',
    version: 'Gixxer SF 250',
    annio: '2022',
    marca: 'Suzuki',
    precio: 84490,
},
{
    categoria: 'Deportivas',
    version: 'Hayabusa',
    annio: '2022',
    marca: 'Suzuki',
    precio: 424390
},
{
    categoria: 'Super Deportivas',
    version: 'YZF-R1',
    annio: '2022',
    marca: 'Yamaha',
    precio: 451986
}]

json = JSON.stringify(motos)
console.log(json)