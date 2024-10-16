// Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:

x = 23; // Gives reference error

let x;

function someFunction(){
  message = "Hello"; // Throws a reference error

  let message;
}

someFunction();

// In the code above, both in the global scope and functional scope, we are trying to access variables that have not been declared yet. This is called the Temporal Dead Zone.