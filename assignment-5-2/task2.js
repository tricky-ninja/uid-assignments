// Task 2: Data types, and difference between let, var, const with examples and scope

// Data types in JavaScript
let str = "This is a string";               // String
let num = 42;                               // Number
let bool = true;                            // Boolean
let obj = { name: "Bob", age: 25 };         // Object
let arr = [1, 2, 3, "four"];                // Array
let undef;                                  // undefined
let nul = null;                             // null
let sym = Symbol("unique");                 // Symbol
let bigInt = 9007199254740991n;             // BigInt

console.log(typeof str, typeof num, typeof bool, typeof obj, typeof arr, typeof undef, typeof nul, typeof sym, typeof bigInt);

// var vs let vs const

function varScopeExample() {
  if (true) {
    var x = "I am var";
    let y = "I am let";
    const z = "I am const";
    console.log(x); // "I am var"
    console.log(y); // "I am let"
    console.log(z); // "I am const"
  }
  console.log(x); // "I am var" (var is function-scoped, so accessible here)
  // console.log(y); // ReferenceError: y is not defined (let is block-scoped)
  // console.log(z); // ReferenceError: z is not defined (const is block-scoped)
}
varScopeExample();

// Reassignments
var xVar = 1;
xVar = 2;            // OK
var xVar = 3;        // OK (var can be redeclared)

let xLet = 10;
xLet = 20;           // OK
// let xLet = 30;    // SyntaxError: Identifier 'xLet' has already been declared

const xConst = 100;
// xConst = 200;      // TypeError: Assignment to constant variable
// const xConst = 300; // SyntaxError: Identifier 'xConst' has already been declared
