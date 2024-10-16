// Crear un nuevo Set
const mySet = new Set();

// Añadir valores al Set
mySet.add(1);
mySet.add(2);
mySet.add(2); // No se añadirá, ya que 2 ya está en el Set
mySet.add(3);

console.log("mySet", mySet); // Set(3) { 1, 2, 3 }

// Verificar si un valor está en el Set
console.log(mySet.has(2)); // true
console.log(mySet.has(4)); // false

// Eliminar un valor
mySet.delete(2);
console.log(mySet); // Set(2) { 1, 3 }

// Obtener el tamaño del Set
console.log("mySet size", mySet.size); // 2

// Recorrer un Set
mySet.forEach(value => {
  console.log(value); // 1, 3
});

// Conversión entre Set y Array:
const mySetToArray = new Set([1, 2, 3]);
const myArray = Array.from(mySetToArray);
console.log(myArray); // [1, 2, 3]

// Array a Set:
const myArray2 = [1, 2, 2, 3];
const mySetFromArray = new Set(myArray2);
console.log(mySetFromArray); // Set(3) { 1, 2, 3 }




// In javascript, a Set is a collection of unique and ordered elements.
// Just like Set, WeakSet is also a collection of unique and ordered elements
// with some key differences:

// Weakset contains only objects and no other type.
// An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.
// Unlike Set, WeakSet only has three methods, add() , delete() and has() .

const newSet = new Set([4, 5, 6, 7]);
console.log(newSet);// Outputs Set {4,5,6,7}

// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


let obj1 = {message:"Hello world"};
const newSet3 = new WeakSet([obj1]);
console.log(newSet3.has(obj1)); // true


// let obj2;
// const newSet4 = new WeakSet([obj2]);
// console.log(newSet3.has(obj2)); // TypeError: Invalid value used in weak set}

