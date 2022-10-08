/* homeWork.
Dado un arreglo de nombres de archivo con su extensión, imprime en consola la extensión del archivo, el nombre del archivo en minúsculas, así como conocer si contienen la cadena "kodemia" en el nombre.
*/

const files = ['kodemia.txt','temario.docx','main.js','index.html'];

// Funcion a). Imprime en consola la extensión del archivo.


// Funcion b). Imprime en consola el nombre del archivo en minúsculas.

const lowerNames = (archivos) => {
  let nameFiles = [];
  for(let i=0;i<archivos.length;i++)
    {    nameFiles[i] = archivos[i].substr(0,(archivos[i].indexOf('.')))
     console.log(nameFiles[i])
    }
}
lowerNames(files);

// Funcion c). Conocer si contienen la cadena "kodemia" en el nombre.