// Example 1. Literal Objects

const carro = {
    modelo: '2019',
    marca: 'Mazda',
    transmisión: 'Estandar',
    velocidades: '6',
    estaPagado: false,
    gasolina: 0.71,
    duenio: 'Chofis',
    computadora: {
      versionSO: '1.0.0',
      ultimoParche: 'Junio-2022'
    }
}

// Recorriendo el objeto
for(const key in carro)
{
  console.log('Llave: '+key+', valor: '+carro[key]);
}

// Llamando objetos dentro del objeto
console.log(carro.computadora.versionSO);

// Modificando valores de propiedades
carro.marca = 'Nissan';
carro.modelo = '1994';
carro['gasolina'] = 100;

// Agregando nuevas propiedades
carro.cosito = 'azul';
carro['origen'] = 'Japon';
carro.otroObjeto = {
  propiedad1: 'hola1',
  propiedad2: 'hola2'
}

// Eliminando propiedades
delete carro.duenio;

console.log(carro);