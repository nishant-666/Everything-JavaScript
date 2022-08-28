let a = 5; //11
let b = 6;

//Function Declaration

//ES5 Version
function add(a, b) {
  //Function body
  return a + b;
}

//ES6 Version or Arrow Fn
const multiply = (a, b) => {
  return a * b;
};

//Function Invocation
a = add(a, b); //Arguments
console.log(a);

b = multiply(a, b); //Arguments
console.log(b);

function square(a) {
  return a * a;
}

//Higher Order FN
function doSometing(square, value) {
  return square(value);
}

let sq = doSometing(square, 50);
console.log(sq);
