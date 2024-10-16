/* The diffrence between async/await and the generators is the way
how they handle the stop and restarr of the functions and 
how they deliver their results 

Generator functions

they allow to pause and restart the execution of the function on each call
to "yield"

they produces one result at once each time that "next()" is called

*/

// The result of the generator has the form { value: X, done: Boolean}//

const result = { value: "Some value", done: true};

//Example of a generator //

function* myGenerator() {
    yield 1
    yield 2
    yield 3
}

const gen = myGenerator();

console.log("gen: ", gen)

console.log("gen result next(): ", gen.next()) // { value: 1, done: false }
console.log("gen result next(): ", gen.next()) // { value: 2, done: false }
console.log("gen result next(): ", gen.next()) // { value: 3, done: true }
console.log("gen result next(): ", gen.next()) // { value: undefined, done: true }

// ASYNC/ AWAIT //

/* The async functions always return a promise

await is used for pausing the execution of the function until the promise
is resolved or rejected

it offers a way more clear and readable of work with asynchronous code instead of using
then/catch

The difference with the generators async/await handle the promises automatically
and throwns error if something fails

*/
const promise1 = Promise.resolve(1234);

promise1.then((value) => {
  console.log(value);
  // Expected output: 1234
});

/* In this case the function myAsyncFunction waits that each promises will be resolbed before continuing next line
The execution flow is more sequential and easy to understand
*/

async function myAsyncFunction() {
    const result1 = await Promise.resolve(1);
    const result2 = await Promise.resolve(2);
    const result3 = await Promise.resolve(3)

    return result1 + result2 + result3
}

myAsyncFunction().then(result => console.log("result: ", result)) // 6

/* Key differences between generator functions and async/Await 
    
Functional similarity:

Both structures allows to pause and restart the execution of the function but async/Await 
facilitates a lot the promise handling without requiring manual calls with next()
*/

// Comparative example between Generators and async/await //

function* generatorFunction() {
    yield Promise.resolve(5)
    yield Promise.resolve(6)
    yield Promise.resolve(7)
}

const genFunc = generatorFunction()
console.log("=======================")


console.log("genFunc: ", genFunc)

genFunc.next().value.then(console.log)
genFunc.next().value.then(console.log)
genFunc.next().value.then(console.log)

/* Summary :
    
    The generators :

    are lower regrading level, and
    they require manual control to extract values and handling promises

    async/Await:

    Is more intuitivefor handlign asynchronous tasks because it lets writting
    asynchronous code like it would be synchronous ,
    It results in a more natural flow and it es easy to uunderstand

*/




