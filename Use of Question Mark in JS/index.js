//Uses of '?' in JavaScript

//1. Ternary Operator

const doSomething = () => {
  let isSomething = false;
  let name = "Uday";

  // if (isSomething) {
  //   console.log(`Yes! It's True`); //true
  // } else if (name === "Nishant") {
  //   console.log(`Name is Nishant`); //false
  // } else {
  //   console.log(`No! It's not True`);
  // }

  isSomething
    ? console.log(`Yes! It's True`) // False
    : name === "Nishant"
    ? console.log(`Name is Nishant`) //False
    : console.log(`No! It's not True`); //True
};

doSomething();

//2. Optional Chaining

let obj = {
  name: "Joevakkinn",
  age: 79,
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.isSomething?.anotherSomething);

//3. Nullish Coalescing

let obj2 = {
  name: "Nishant",
  age: 26,
  isMarried: "Unknown",
  salary: 0,
  isNull: null,
};

console.log(obj2.salary || "This is Not Known"); //Logical OR Operator "This is Not Known"
console.log(obj2.salary ?? "This is Not Known"); //Nullish Coalescing 0
