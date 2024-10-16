//Is JavaScript a pass-by-reference or pass-by-value language? //

/* Pass by value:

when a variable is passed as an argument for a function
It is passed a copy of its value
Whatever change  made inside the function
will does not affect the original variable

EXAMPLE :
*/

function modifyValue(x) {
    x = 10;
    console.log("x :",x)
}

let a = 5;
modifyValue(a);

console.log("a:", a); // 5

/* here the variable a is passed as a value
when modifyValue tries to change the value of x
inside block of the function , it just affect the local copy
The variable keeps continue being 5
*/

/* Pass by reference for objects (properties modification) */

const person = {
    name: "Jane"
};

function modifyObject(obj) {
    obj.name = "John"
}

modifyObject(person)

console.log(person.name) // John

/* Reassignment of a object inside a function 
Although the function attepms to reassign the object inside the block function, 
the reassignment only affects the local copy (obj), and NOT the original object (person)
Therefore
*/



const personTwo = {
    name: "Jane"
}

function reassignObject(obj) {
    obj = { name: "Doe" }; // This line creates a new object inside block function
}

reassignObject(personTwo);
console.log(personTwo.name); // Jane

/* SUMMARY


*/


