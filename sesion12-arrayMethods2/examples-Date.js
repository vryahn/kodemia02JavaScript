// Date. Es un objeto que almacena la fecha, la hora, y brinda métodos para administrarlas.

const fecha = new Date('2022-05-21');
console.log(fecha);

const operacion = 1024*3600*1000; // se ingresa el tiempo transcurrrido en milisegundos a partir de 1970
const fecha2 = new Date(operacion); console.log(fecha2);

// Formatos de fecha
const fecha3 = new Date('05/12/2022'); console.log(fecha3);
const fecha4 = new Date('10 octubre 2022'); console.log(fecha4);
const fecha5 = new Date('martes 18 octubre 2022'); console.log(fecha5);
const fecha6 = new Date(2022,10,18); console.log(fecha6); // para esta nomenclatura, hay que agregarle 1 al mes.

/* Formatos Unix/epoch.

Se define como la cantidad de segundos transcurridos desde la medianoche UTC del 1 de enero de 1070, sin contar segundos intercalares.

La época tradicionalmente corresponde a 0 horas, 0 minutos y 0 segundos (00:00:00) Tiempo Universal Coordinado (UTC) en una fecha específica, que varía de un sistema a otro.

La mayoría de las versiones de UNIX, por ejemplo, utilizan el 1ro de enero de 1970 como fecha de época; Windows usa el 1ro de enero de 1601; Los sitemas Macintosh usan el 1ro de enero de 1904 y el sistema de memoria virtual (VMS) de Digital Equipment Corporation ...

*/

const fecha7 = new Date();
fecha.toString();

// --- Métodos de Date ---

// .getFullYear() Nos devuelve el año con 4 digitos

const hoy = new Date();
console.log(hoy.getFullYear());

const hoy2 = new Date();
const anio = hoy.getFullYear();
document.write(anio);

// .getMonth() Nos devuelve le numero de mes del 0 (enero) al 11 (diciembre)

const fecha8 = new Date();
fecha8.getMonth()+1; // en enteros, javascript toma enero como el mes 0, por lo que debes sumarle 1 a este método.

// .getDate() Nos devuelve el numero del dia del mes
fecha8.getDate();

// .getDay() Nos devuelve el numero del dia de la semana
fecha8.getDay();

// .getHours() Nos devuelve la hora actual, desde 0 a 23 (formato 24 horas)
fecha8.getHours();

// .getMinutes() Nos devuelve los minutos actuales, desde 0 a 59
fecha8.getMinutes();

// .toString() Nos devuelve el día del mes, del 1 al 31
fecha8.toString();

// .toDateString() Versión abreviada del anterior
fecha8.toDateString();