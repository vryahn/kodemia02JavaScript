console.log(document.readyState)

/* Linters.
Herramientas que nos sirven para detectar los errores o los warnings dentro del código.

Son herramientas que realizan la lectura del código fuente para detectar errores/warnings de código, así como variables sin usar o no definida, llave sin cerrar, etc. 

-----------
JSLint es un analizador online de código JavaScript creado por Douglas Crockford.

Los criterios evaluados corresponden a los que marcó su creador
- Demasiado estricto
- No es configurable o extensible

-----------
JSHint (Fork de JSLint)
- El objetivo de JSHunt es no imponer un convenio particular
- La gente utiliza diferentes estilos y convenciones
- El linter debe adaptarse al desarrollador y no al reves
*/

/* Formatters
La identación es un factor de suma importancia en muchos lenguajes de programación, dado que presenta una cantidad variada de ventajas.
*/

/* Linters señalan errores y malas prácticas. 
Los formatters dan formato a tu código acorde a las guías de estilo */

/*
::::::::::: DOM ::::::::::::
Document Object Model es una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.

Una página HTML está formada por múltiples etiquetas HTML, anidadas...

En JavaScript, cuando se habla del DOM se hace referencia a la estructura, que podemos modificar de forma dinámica desde JavaScript, añadiendo nuevas etiquetas, editando o eliminando otras, cambiando sus atributos HTML, añadiendo calses, cambiando el contenido de texto, etc...

El DOM solo existe en el navegador, si se intenta utilizar en el servidor (Node JS) este elemento no será encontrado.

-> Element. Representa cualquier elemento HTML conocido genéricamente como HTMLElement.
Por ejemplo div, span, h1

-> Node. Es el nombre genérico para cualquier tipo de objeto en la jerarquia, la cual puede ser elemento o conjuntos de elements, al igual que su nombre su tipo de dato es Node.

-> Document. Es un objeto interfaz que representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web.

Métodos de Document.
domain. Devuelve el nombre de dominio del servidor desde el que se origina el documento.
fastModified. Devuelve la fecha en la que se modificó por última vez el documento.
documentMode. Retorna el modo utilizado por el navegador para procesar el documento.
readyState. Devuelve el estado de carga del documento.
referrer. Devuelve la URL de los documentos a los que se hace referencia en un documento HTML
title. Devuelve el nombre del documento HTML definido entre las etiquetas inicial y final del elemento title
url. Devuelve la URL completa del documento HTML

*/