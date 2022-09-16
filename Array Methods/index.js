const array1 = [1, 2, 3, 4, 5, 6];

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

//ForEach Method
const res = array1.forEach((item) => {
  return item * item;
});

console.log(res);

//Map Method
const res1 = array1.map((item) => {
  return item * item;
});

console.log(res1);

//Filter Method
const filtered = arrayOBJ.filter((item) => {
  return item.age >= 50;
});

console.log(filtered);

//Reduced Method
const sum = array1.reduce((curr, total, index, array) => {
  return array;
});

console.log(sum);
//curr === 6
//total === 21

//Every Method
const every = array1.every((item) => {
  return item >= 1;
});

console.log(every);

//Some Method
const some = array1.some((item) => {
  return item >= 6;
});
console.log(some);

//IndexOf Method
const index = array1.indexOf(4);
console.log(index);

//Find Method
const find = array1.find((item) => {
  return item > 3;
});

console.log(find);

//Includes Method
console.log(array1.includes(7));
