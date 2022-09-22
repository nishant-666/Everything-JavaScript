//Polyfills

let array = [1, 2, 3, 4, 5];

//Polyfill for MAP
let result = [];
for (let index = 0; index < array.length; index++) {
  result.push(array[index] * array[index]);
}

console.log(result);

//Our version of map

Array.prototype.newMap = function (callback) {
  let result = [];

  for (index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
};

// Simple MAP Function
console.log(
  array.map((item, index, array) => {
    return item * item;
  })
);

//Our MAP Function
console.log(
  array.newMap((item) => {
    return item * item;
  })
);
