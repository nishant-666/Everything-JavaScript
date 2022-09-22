//IIFE or Immediately Invoked Function Expressions

//Regular Function
function printSomething() {
  console.log("Print Nishant");
}

printSomething();

//Arrow Function
const a = () => {
  console.log(26);
};

a();

//Regular IIFE
(function printSomethingElse() {
  console.log("Something Else");
})();

//Anonymous IFFE
(function () {
  console.log("Something Else Again");
})();

//Arrow IFFE
(arrow = () => {
  console.log("Arrow IIFE");
})();

let age = 26;
arrow = (() => {
  age = 27;
  console.log(age + 1);
})();
