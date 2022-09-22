//Micro V/S Macro

console.log("Task 2"); //Micro Task

setTimeout(() => {
  console.log("Task 5"); //Macro Task
}, 500);

setTimeout(() => {
  console.log("Task 3"); //Macro Task
}, 0);

console.log("Task 1"); //Micro Task

let p = new Promise((res) => {
  res();
});

p.then(() => {
  console.log("Task 4"); //Micro Task
});

//Micro Task > Marco Task
