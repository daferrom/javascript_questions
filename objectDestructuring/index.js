// Object destructuring is a new way to extract elements from an object or an array.

// Before ES6 version:

// const classDetails21 = {
//     strength: 78,
//     benches: 39,
//     blackBoard:1
//   }
  
//   const classStrength1 = classDetails1.strength;
//   const classBenches1 = classDetails1.benches;
//   const classBlackBoard = classDetails1.blackBoard;

//   The same example using object destructuring:

const classDetails2 = {
    strength: 78,
    benches: 39,
    blackBoard:1
  }
  
  const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails2;
  
  console.log(classStrength); // Outputs 78
  console.log(classBenches); // Outputs 39
  console.log(classBlackBoard); // Outputs 1


//   const {strength: strength} = classDetails2;
  // The above line of code can be written as:
  const {strength} = classDetails2;

//   Array destructuring: Before ES6 version:

// const arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

// The same example using object destructuring:

const arr = [1, 2, 3, 4];
const [first,second,third,fourth] = arr;
console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4
