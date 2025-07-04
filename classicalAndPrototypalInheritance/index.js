// 1. Classical Inheritance

//  The classical inheritance is common in programming laguages like:
//  Java, C++ o Python, The inheritance is class based

// Una clase es una plantilla que define las propiedades y métodos de un objeto. Los objetos son instancias de estas clases, y las clases pueden heredar de otras clases.

// A class is a template which defines properties and methods of an object

// the objects are Instances of this classes and this classes
// The classes can inherit from other classes

/* Main Features:
  * Based on the idea of classes and objects
  * A child class inherits from a parent class (superclass)
  * The objects are instances of a class
  * The classes defined a set of attributtes and methods which can be inherit.
*/
// Ejemplo en JavaScript con ES6 (herencia clásica usando class):


// Parent Class (Super class)

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving`);
  }
}

// Child Class (subclass)

class Car extends Vehicle {
  constructor(type, brand) {
    super(type); // Calls the constructor of the parent class
    this.brand = brand;
  }

  displayBrand() {
    console.log(`This car is a ${this.brand}`);
  }
}

// Create intance of the child class
const myCar = new Car("Vehicle", "Toyota");

// Call inherited methods and own ones

myCar.move(); // Vehículo está en movimiento (heredado de Vehicle) // Vehicle is moving (method inherited from Vehicle)
myCar.displayBrand(); // This car is a Toyota (own method of Car)
