// What is hoisting in JS

// Is the default behaviour in JS when all the variable and functon declarations are moved to the top
// It soed not matter where variables or functions are declared , they are moved on the top of the scope.
// The scope can be both local and global.


// ONLY DECLARATIONS ARE HOISTED FROM FUNCTIONS AND VARIABLES N

// Example 1

hoistedVariable = 3
console.log(hoistedVariable) // outpust 3 even with the vaerriable is declared after it is initialized

var hoistedVariable

// Example 2

hoistedFunction() // Outputs  "Hello world!" even the function is declared after calling

function hoistedFunction(){
		console.log("Hello hoistedFunction")
}


// Example 3

// Hoisting takes place in the local scope as well

function doSomething(){
  x = 33;
  console.log(x);
  var x;
}

doSomething() // Outputs 33 even the variable x is first initialized and then declared onthe

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
