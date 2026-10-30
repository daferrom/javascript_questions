// let was introduced in 2015
// var was always in JS

/*
Var has a function scope
it means is accessible anywhere in the function
*/


/*
Let scope is limited to the block in  which it is declared
*/

// In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

console.log(a); // undefined  (hoisted and initialized)
var a = 5;

console.log(b); // ReferenceError  (temporal dead zone)
let b = 5;


var x = 1; var x = 2;   // fine Var allows redeclaration 
let y = 1; let y = 2;   // SyntaxError


// Global object property: At the top level, var creates a property on the global object (window in browsers). let does not.


var p = 1; let q = 2;
console.log(window.p); // 1
console.log(window.q); // undefined

// Global object property: At the top level, var creates a property on the global object (window in browsers). let does not.

for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3 3 3


for (let j = 0; j < 3; j++) setTimeout(() => console.log(j)); // 0 1 2

// Block scope example (for point 2)

function test() {
  if (true) {
    var v = "var";
    let l = "let";
  }
  console.log(v); // "var"
  console.log(l); // ReferenceError: l is not defined
}

// Summary table

// Feature	var	let
// Introduced	Original JS	ES6 (2015)
// Scope	Function / global	Block
// Hoisting	Hoisted, initialized to undefined	Hoisted, not initialized (TDZ)
// Redeclare in same scope	Allowed	Not allowed
// Reassign	Allowed	Allowed
// Creates window property	Yes (at top level)	No

// In modern code, the usual practice is to use const by default, let when a variable needs to be reassigned, and avoid var.