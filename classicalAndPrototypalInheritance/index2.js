// 2. Prototypal Inheritance)

// En JavaScript, todo objeto tiene un prototipo del cual puede heredar propiedades y métodos. En lugar de depender de clases, los objetos heredan de otros objetos. Esto se llama herencia basada en prototipos. La herencia prototipal se basa en prototipos que actúan como un modelo o plantilla de otros objetos.

/* In JS , whatever object has a prototype from which inherits properties and methods.
Instead of depending of classes. the objects inherit from other objects.
This is called : Inheritance prototypal based
*/

/* Main features 
  * It does not use classes but objects which inherit from other objects(protoype)
  * The objects can be cloned or extended using a mechanism of prototypal delegation.
  * An object can inherit directly form other object through its prototype.
*/

// Example of Prototypal inheritance in JS

// Object prototype:

const vehiclePrototype = {
    move: function() {
      console.log(`${this.type} is moving`);
    }
  };

  // Create a new object based on the vehicle prototype

  const car = Object.create(vehiclePrototype);
  car.type = 'Truck';
  car.brand = 'Toyota';
  
  // Add a specific method to car
  car.displayBrand = function() {
    console.log(`The ${this.type}'s brand is: ${this.brand}`);
  };
  
  // Call the methods
  car.move();           // Coche está en movimiento (heredado del prototipo)
  car.displayBrand();   // Este coche es un Toyota (propio de car)
  