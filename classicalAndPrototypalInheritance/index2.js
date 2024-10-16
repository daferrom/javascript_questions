// 2. Herencia Prototipal (Prototypal Inheritance)
// En JavaScript, todo objeto tiene un prototipo del cual puede heredar propiedades y métodos. En lugar de depender de clases, los objetos heredan de otros objetos. Esto se llama herencia basada en prototipos. La herencia prototipal se basa en prototipos que actúan como un modelo o plantilla de otros objetos.

// Características:
// No utiliza clases, sino objetos que heredan de otros objetos.
// Los objetos se pueden clonar o extender utilizando un mecanismo de delegación prototipal.
// Un objeto puede heredar directamente de otro objeto a través de su prototipo.
// Ejemplo de herencia prototipal en JavaScript:

// Objeto Prototipo
const vehiclePrototype = {
    move: function() {
      console.log(`${this.type} está en movimiento`);
    }
  };
  
  // Crear un nuevo objeto basado en el prototipo de vehicle
  const car = Object.create(vehiclePrototype);
  car.type = 'Coche';
  car.brand = 'Toyota';
  
  // Añadir un método específico a car
  car.displayBrand = function() {
    console.log(`Este coche es un ${this.brand}`);
  };
  
  // Llamar a los métodos
  car.move();           // Coche está en movimiento (heredado del prototipo)
  car.displayBrand();   // Este coche es un Toyota (propio de car)
  