const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 4, 5, "Hello"];
const array3 = [3, 4, 5, 6, "Tata"];
const arrayString = ["A", "B", "C", "F", "L", "Z", "D", "M"];

const arrayOBJ = [
  {
    name: "Nishant",
    age: 40,
    phone: 12345678,
  },
  {
    name: "Shailesh",
    age: 50,
    phone: 12345678,
  },
  {
    name: "Abhishek",
    age: 60,
    phone: 12345678,
  },
  {
    name: "Mayank",
    age: 80,
    phone: 12345678,
  },
];

// const array4 = array1.concat(array2, array3);
const array4 = [...array1, ...array2, ...array3];

//To String
console.log(array1.toString());

//To Join the items
console.log(array1.join(""));

//Pushing into an Array
array1.push(6);
console.log(array1);

//Popping or removing the latest element
array1.pop();
console.log(array1);

//Shifting elements or Removing the first index
array1.shift();
console.log(array1);

//Unshift elements or Adding the first index
array1.unshift(1);
console.log(array1);

//Changing Elements
array1[2] = 3;
console.log(array1);

//Length of the array
console.log(array1.length);

//Splicing Arrays
array1.splice(2, 0, 8, 9, 10);
console.log(array1);

//Slicing Arrays
let newArray = array1.slice(0);
console.log(newArray);

//Sorting Numeric Arrays
console.log(array1.sort((a, b) => a - b));

//Sorting Alphabetical Arrays
console.log(arrayString.sort());

//Maximum element
console.log(Math.max.apply(null, array1));

//Minimum element
console.log(Math.min.apply(null, array1));

//Map Method
let squared = array1.map((num) => {
  return num * num;
});

console.log(array1);
console.log(squared);
