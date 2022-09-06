//Primitive
let name = "Nishant"; // String
let age = 50; // Number
let isSomething = true; // Boolean

let age2 = age; //Pass by value
age2 = age2 + 10;

//Non-Primitive
let array = [1, 2, 3]; // Array //Address1
let array2 = array; //Pass by Reference //Address1 //Shallow Copy
let array3 = [...array]; //Pass By Value //Address2 //Deep Copy
let array4 = JSON.parse(JSON.stringify(array3)); //Address3 //Deep Copy

array2.push(4, 5);
array3.push(6);

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);

let object = {
  name: "Nishant",
  age: 50,
  isSomething: true,
}; // Object //AddOBj

let obj2 = object; //AddOBj

let obj3 = { ...object }; //AddOBJ2

obj2.name = "Nishant Kumar";
console.log(object); //AddOBj //Shallow Copies
console.log(obj2); //AddOBj //Shallow Copies
console.log(obj3); //AddOBJ2 //Deep Copy
