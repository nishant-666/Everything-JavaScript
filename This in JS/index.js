//This keyword in JS
"use strict";

class ABC {
  constructor() {
    return { a: this };
  }
}

let abc = new ABC();

let obj = {
  name: "Nishant",
  age: 5000,
  address: {
    primary: "ABC",
    additional: "CDE",
    doSomething: function () {
      console.log(this);
    },
  },
};

function doSomething() {
  console.log(this);
}

console.log(this); //Global Object

obj.address.doSomething(); //Parent Object

doSomething(); //Global Object || In case of strict, it will return undefined

console.log(abc.a); //Parent Object
