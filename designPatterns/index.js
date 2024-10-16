/*JavaScript design patterns are repeatable approaches for errors that arise sometimes when building JavaScript browser applications. They truly assist us in making our code more stable.

They are divided mainly into 3 categories

1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioral Design Pattern.

1. Creational Design Pattern:

The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.

example : Singleton */

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.timestamp = new Date();
    Singleton.instance = this;
  }
}

// Singleton use
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.timestamp); // shows Date and hour of creation

// example : Factory /

class Dog {
  speak() {
    console.log("Woof! Woof!");
  }
}

class Cat {
  speak() {
    console.log("Meow!");
  }
}

class AnimalFactory {
  createAnimal(type) {
    switch (type) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error("Unknown animal type");
    }
  }
}

// Uso de la Fábrica
const factory = new AnimalFactory();
const dog = factory.createAnimal("dog");
dog.speak(); // Woof! Woof!

/* 2. Structural Design Pattern:

The JavaScript Structural Design Pattern explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so. */

// example: Adapter //

class OldSystem {
  request() {
    return "Old system response";
  }
}

class NewSystem {
  specificRequest() {
    return "New system response";
  }
}

class Adapter {
  constructor(newSystem) {
    this.newSystem = newSystem;
  }

  request() {
    return this.newSystem.specificRequest();
  }
}

// Uso del Adaptador

const oldSystem = new OldSystem();
const newSystem = new NewSystem();
const adapter = new Adapter(newSystem);

console.log(oldSystem.request()); // Old system response
console.log(adapter.request()); // New system response

// example: Composite //

// El patrón Composite permite tratar a los objetos individuales y a los compuestos de la misma manera.

class Leaf {
    constructor(name) {
      this.name = name;
    }
  
    operation() {
      return this.name;
    }
  }
  
  class Composite {
    constructor() {
      this.children = [];
    }
  
    add(child) {
      this.children.push(child);
    }
  
    operation() {
      return this.children.map(child => child.operation()).join(', ');
    }
  }
  
  // Uso del Composite
  const leaf1 = new Leaf('Leaf 1');
  const leaf2 = new Leaf('Leaf 2');
  const composite = new Composite();
  
  composite.add(leaf1);
  composite.add(leaf2);
  
  console.log(composite.operation()); // Leaf 1, Leaf 2
  

/* 3.Behavioral Design Pattern.

This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom. */

//example: observer //

//El patrón Observer permite que un objeto (sujeto) notifique a otros objetos (observadores) sobre cambios en su estado. //

class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  class Observer {
    update(data) {
      console.log(`Observer received data: ${data}`);
    }
  }
  
  // Uso del Observer
  const subject = new Subject();
  const observer1 = new Observer();


// example: strategy //

class StrategyA {
    execute() {
      return 'Executing Strategy A';
    }
  }
  
  class StrategyB {
    execute() {
      return 'Executing Strategy B';
    }
  }
  
  class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy() {
      return this.strategy.execute();
    }
  }
  
  // Uso del Strategy
  const context = new Context(new StrategyA());
  console.log(context.executeStrategy()); // Executing Strategy A
  
  context.setStrategy(new StrategyB());
  console.log(context.executeStrategy()); // Executing Strategy B
  



