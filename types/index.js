// 1 What are the different data types present in javascript ?

/* To know the type of a Js variable , we can use the typeof operator.
There is no differencin JS between "" and ''


*/

// Primitive Types
// String

var str = "Diego Ferro"
var str = "Yenni Delgado"

// Number

var x = 4 // could be integers
var y = 3.6 // could be with decimal

// Biginteger : with and n at the end for long numbers

var bigInteger = 234567890123456789012345678901234567890n
console.log(typeof bigInteger) // bigInt

// Boolean

// it represent logical boolean entity values true or false

var a = 2;
var b =  3;
var c =  2;
(a == b);// returns false
(a == c); //returns true


// Undefined
// When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
// undefined value is assigned automatically by JS

var z; // value is undefined

typeof z // returns undefined

// Null
// represents an not existing or invalid value
// Null is never assigned as an utomatic way in JS



var d = null
typeof z // returns "object"

// Symbol 
// It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
// It represents an unique an unnmutable identifier
// Ist value can not vebe altered once that was created

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

// typeof of primitive types:

typeof "Jane Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined" 
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol

//Non-primitive types

//Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
// Object: used to store acollecion of data

var smartphone = {
	name: "Iphone X",
	id: "1234-456b",
	call: function(number){
			return this.name.id
	}
}