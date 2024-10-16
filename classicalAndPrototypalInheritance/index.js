// 1. Herencia Clásica (Classical Inheritance)
// En la herencia clásica, que es común en lenguajes como Java, C++ o Python, la herencia se basa en clases.

// Una clase es una plantilla que define las propiedades y métodos de un objeto. Los objetos son instancias de estas clases, y las clases pueden heredar de otras clases.

// Características:

// Se basa en la idea de clases y objetos.
// Una clase hija hereda de una clase padre (superclase).
// Los objetos son instancias de una clase.
// Las clases definen un conjunto de atributos y métodos que luego son heredados.

// Ejemplo en JavaScript con ES6 (herencia clásica usando class):

// Clase Padre (superclase)

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} está en movimiento`);
  }
}

// Clase Hija (subclase)

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // Llama al constructor de la clase padre
    this.brand = brand;
  }

  displayBrand() {
    console.log(`Este coche es un ${this.brand}`);
  }
}

// Crear instancia de la clase hija
const myCar = new Car("Vehículo", "Toyota");

// Llamada a métodos heredados y propios

myCar.move(); // Vehículo está en movimiento (heredado de Vehicle)
myCar.displayBrand(); // Este coche es un Toyota (propio de Car)
