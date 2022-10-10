/* homeWork.
Dado un arreglo de nombres de archivo con su extensión, imprime en consola la extensión del archivo, el nombre del archivo en minúsculas, así como conocer si contienen la cadena "kodemia" en el nombre. */

const files = ["Kodemia.txt", "temario.docx", "main.js", "index.html"];

// Funcion a). Imprime en consola la extensión del archivo.

const extensions = (archivos) => {
  let nameFiles = [];
  for (let i = 0; i < archivos.length; i++) {
    nameFiles[i] = archivos[i].substr(archivos[i].indexOf(".") + 1);
    console.log(nameFiles[i]);
  }
};
extensions(files);

// Funcion b). Imprime en consola el nombre del archivo en minúsculas.

const lowerNames = (archivos) => {
  let nameFiles = [];
  for (let i = 0; i < archivos.length; i++) {
    nameFiles[i] = archivos[i].substr(0, archivos[i].indexOf("."));
    nameFiles[i] = nameFiles[i].toLowerCase();
    console.log(nameFiles[i]);
  }
};
lowerNames(files);

// Funcion c). Conocer si contienen la cadena "kodemia" en el nombre.

const loofForKodemia = (archivos) => {
  for (archivo of archivos) {
    if (archivo.search("kodemia") >= 0 || archivo.search("Kodemia") >= 0) {
      console.log("Aqui esta jijiji");
    }
  }
};
loofForKodemia(files);