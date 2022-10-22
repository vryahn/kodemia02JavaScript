/* ::: MÓDULOS :::

// Qué es un módulo

// Es una incorporación del estándar ES7 los cuales son piezas de código que podemos escribir en directorios independientes. Los módulos pueden tener elementos como clases, funciones, objetos o datos primitivos, que se pueden importar desde otros archivos.
// Los módulos pueden cargarse entre sí y usar direvtivas especiales export e import para intercambiar funcionalidades, llamar a funciones de un módulo desde otro:

// Export. La palabra clave etiqueta las variables y funciones a las que debería poder accederse desde fuera del módulo actual.
// Import. Permite la importanción de funcionalidades desde otros módulos.


// Crear un módulo. Si tenemos un archivo que operacione.js exporta una función sumarDosNumeros que puede ser utilizada en cualquier otro archivo de JavaScript
// operaciones.js
export function sumarDosNumeros(num1,num2) {
    return num1 + num2;
}


// Importar módulo. Si se desea utilizar la función solo se debe importar el archivo, así como extraer/recuperar la función. Al hacer uso del import automáticamente el archivo que solicite el recurso se vuelve un módulo.
import {sumarDosNumeros} from './operaciones.js';
const suma = sumarDosNumeros(1,2);

// El navegador debe conocer que el script a importar es un módulo por eso debe añadir la propiedad type en la etiqueta script.
<body>
    <script src="./main.js" type="module"></script>
</body>
*/