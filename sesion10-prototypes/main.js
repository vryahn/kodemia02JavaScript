// Example 1. Protopyes
// Se usan en funciones ECMA5 para que los this. no sean globales, lo cual si ocurriria en una funcion flecha.
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new Persona("Bryan", 32);
console.log(this.nombre);

console.log(Persona.prototype);

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1);

/* Example 2. Metodos de String */

const cadena = "Lo siento sientio BB";

// charAt(index). Permite acceder a un caracter en concreto de una cadena
cadena[3];
cadena.charAt(3);

// indexOf(string)
const buscarLetra = (letra, frase) => {
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      return true;
      break;
    }
  }
  return false;
};

buscarLetra("s", cadena);
cadena.indexOf("sien");

// lastIndexOf(string). Devuelve la posición
cadena.lastIndexOf("sien");

// search(). Buscar una coincidencia en una cadena y devuelve
cadena.search("sien");

// includes(string). Realiza una búsqueda que distingue entre mayúsculas y minúsculas para determinar si una cadena se puede o no encontrar dentro de otra
cadena.includes("Lo");

const comentarioFacebook = "La impresora negra hp";
if (comentarioFacebook.includes("negra")) {
  console.log("Estas banneado 30 dias");
} else console.log("Pasa tu comentario");

// replace()
const comentarioFacebook2 = "La impresora negra negra hp";
comentarioFacebook2.replace("negra", "****");
comentarioFacebook2.replaceAll("negra", "****");
const campo = "cantidad_personas_tieda";
campo.replaceAll("_", " ");

// concat
const cadena2 = "Lo siento BB";
const comentarioFacebook3 = "La impresora negra negra hp esta vendida";

cadena2.concat(comentarioFacebook3);
comentarioFacebook3.concat(cadena2);
comentarioFacebook3.concat(", ", cadena2);
const numero = 10;
const interpolacion = "el valor es ${numero}";
console.log(interpolacion);

//  trim()
const frase = " Mami no busques en instagram, mami buscame en casa ";
const frase2 = " Titi me pregunto";
console.log(frase.trim());
console.log(frase2.trim());

// split(). Corta una cadena en base a un separador que pasamos como parámetro
const fecha = "07/10/2022";
fecha.split("/");
const nombreArchivo = "Archivo.txt.doc";
const seccionesNombre = nombreArchivo.split(".");

// substr(inicio,longitud)
const frase3 = "Pintamos toda la casa";
frase3.substr(0, 8);
const frase4 = "valor: Calamardo";
const indicePuntos = frase4.indexOf(":");
frase4.substr(indicePuntos + 1).trim();
const dia = frase.substr(0, 2);

// toLowerCase() & toUpperCase()

const grito = "que es eso !";
const fraseNoGrito = "HOLA COMO ESTAS, YO BIEN AQUI EN LA CASA";
grito.toUpperCase();
fraseNoGrito.toLowerCase();

// patStart(). Se utiliza para rellenar el inicio de una cadena o caracter con una cadena de longitud especifica.
const frase5 = "hola";
frase5.patStart(1, "hey!");
