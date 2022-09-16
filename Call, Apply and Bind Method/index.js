//Call, Apply, and Bind Methods

function doSomething(param1, param2, param3) {
  console.log(`${this.name}, ${this.age}, ${param1} ${param2} ${param3}`);
}

let obj1 = {
  name: "Nishant",
  age: 5000,
};

let obj2 = {
  name: "Shailesh",
  age: 5500,
};

let obj3 = {
  name: "Abhishek",
  age: 5700,
};

let obj4 = {
  name: "Mayank",
  age: 5100,
};

//Call Method
doSomething.call(obj1, "Address", "ABC");
doSomething.call(obj2, "State", "DEF");

//Apply Method
doSomething.apply(obj3, ["City", "GHI", "Jaipur"]);

//Bind Method
let binded = doSomething.bind(obj4, "Address", "JKL", "Udaipur");
binded();
