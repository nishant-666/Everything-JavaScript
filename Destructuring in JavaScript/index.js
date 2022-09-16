let array = [1, 2, 3, 4, 5, 6];

let object = {
  name: "Nishant",
  age: 5000,
  salary: 20,
  isMarried: false,
};

//Array Destructuring
let [a, b, c, d] = array;

//Object Destructuring
let { name: userName, age: userAge, ...rest } = object;

function operations(a, b) {
  return [a + b, a - b, a * b, a / b];
}

let [sum, sub, mul, div] = operations(4, 2);
console.log(`Sum: ${sum}`);
console.log(`Sub: ${sub}`);
console.log(`Mul: ${mul}`);
console.log(`Div: ${div}`);
