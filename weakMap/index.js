// Características de Map:

// Cualquier tipo de clave: 

// En un Map, las claves pueden ser cualquier tipo de valor, incluidos objetos, funciones o incluso otros Map. En contraste, en los objetos las claves suelen ser cadenas o símbolos.

// Orden de inserción: 

// Los pares clave-valor en un Map se almacenan en el orden de inserción, lo que significa que cuando iteras sobre un Map, los elementos se devuelven en el orden en que fueron añadidos.

// Métodos específicos: Map tiene métodos útiles para gestionar los pares clave-valor, como set, get, has, delete, entre otros.

// Crear un nuevo Map
const map1 = new Map();

// Añadir pares clave-valor
map1.set('nombre', 'Diego');
map1.set('edad', 30);

// Usar objetos o funciones como claves
const keyObj = { id: 1 };
const keyFunc = function() {};

map1.set(keyObj, 'Este es un objeto');
map1.set(keyFunc, 'Esta es una función');

// Obtener valores del Map
console.log(map1.get('nombre')); // Output: 'Diego'
console.log(map1.get(keyObj));   // Output: 'Este es un objeto'

// Comprobar si una clave existe
console.log(map1.has('edad'));   // Output: true
console.log(map1.has('direccion')); // Output: false

// Tamaño del Map
console.log(map1.size);          // Output: 4

// Eliminar un par clave-valor
map1.delete('edad');
console.log(map1.has('edad'));   // Output: false

// Métodos principales de Map:
// set(key, value): Añade o actualiza un par clave-valor en el Map.
// get(key): Retorna el valor asociado a la clave dada. Si la clave no existe, retorna undefined.
// has(key): Retorna true si la clave existe en el Map, de lo contrario, false.
// delete(key): Elimina el par clave-valor correspondiente a la clave dada.
// clear(): Elimina todos los pares clave-valor del Map.
// size: Retorna el número de pares clave-valor almacenados en el Map.

// Iteración en un Map:
// Puedes iterar sobre un Map utilizando varios métodos, como forEach, for...of, o métodos específicos como keys(), values(), y entries().

// Ejemplo con forEach:

map1.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

//   Ejemplo con for...of:

  for (const [key, value] of map1) {
    console.log(`${key}: ${value}`);
  }

//   En resumen, un Map es ideal cuando necesitas una colección de pares clave-valor con claves no restringidas a cadenas, o cuando necesitas garantizar el orden de inserción de los elementos.


// 11. Explain WeakMap in javascript.
// In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

// The keys and values in weakmap should always be an object.
// If there are no references to the object, the object will be garbage collected.

const map1 = new Map();
map1.set('Value', 1);

const map2 = new WeakMap();
map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});

