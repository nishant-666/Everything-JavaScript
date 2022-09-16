const names = ["Nishant"];

let promise = new Promise((resolve, reject) => {
  if (names.includes("Nishant")) {
    resolve("The Promise has been resolved");
  } else {
    reject("The Promise has been failed");
  }
});

promise
  .then((resolvedMsg) => {
    console.log(resolvedMsg);
  })
  .catch((promiseFailed) => {
    console.log(promiseFailed);
    console.error("Error!");
  });
