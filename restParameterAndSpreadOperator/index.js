// Rest parameter (...) //

/* An improved way to handle parameters on a function
functions can handle a variable number of arguments.
Any number of arguments will be an array using (...)
helps to extrac all or some parts of the argfuments on a function */

//example

function extractingArgs(...args) {
    return args[1]
}

console.log(extractingArgs(8,9,1))
// return 9

function addAllArgs(...args){
    let sumOfArgs = 0;
    let i = 0;
    while(i < args.length){
      sumOfArgs += args[i];
      i++;
    }
    return sumOfArgs;
  }

console.log(addAllArgs(6, 5, 7, 99)) // Returns 117// 
addAllArgs(1, 3, 4); // Returns 8;¿ //

/* Rest parameter should always be used at the last parameterof a function */

// wrong way to use the parameter//
// function(a, ...args, c){
//     // execute some code
// }

// Correct way to use rest parameter //
// function randomFunct(a,b, ...args){
//     // execute some code //
// }

/* Although the syntax of the spread operator is exactly the same as the rest parameter,
the spread operator is used to spreading an array, and object literals.
We also use spread operators where one or more arguments are expected in a function call */

function addFourNumbers(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4
}

let fourNumbers = [ 5,6,7,8]

console.log("AddFourNumbers Result", addFourNumbers(...fourNumbers))

let array1 = [ 3,4,5,6]
let clonedArray1 = [...array1]

console.log("clonedArray1",clonedArray1)

let obj1 = {
    x: 'Hello',
    y: 'Goodbye'
}

let clonedObj1 = {...obj1};
console.log("clonedObj1", clonedObj1);

let obj2 = {
    z: 'Yes',
    a: 'No'
};

let mergedObj = {...obj1, obj2}

console.log("mergedObj", mergedObj);


