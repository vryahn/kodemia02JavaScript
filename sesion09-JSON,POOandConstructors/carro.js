class Carro {
    transmision;
    color;
    modelo;
    marca;
    duennio='';
    cilindraje;
    motor;
    version;
    
    constructor(modelo, marca, version, color, cilindraje,transmision, motor){
      this.modelo = modelo;
    this.marca = marca;
      this.version=version;
      this.color=color;
      this.cilindraje=cilindraje;
      this.transmision=transmision;
      this.motor=motor;
    }
  

  set dueno(nombre) {
    this.dueno = nombre;
  }

  acelerar() {
    console.log('Acelerando como toda una bichota');
  }

  frenar() {
    console.log('Auto frenando');
  }

  derrapar(){
    console.log('Auto derrapando');
  }

}