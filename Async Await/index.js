function p1(response) {
  return new Promise((res, rej) => {
    console.log(response);
    if (response === "Resolve P1") {
      res("P1 Resolved");
    } else {
      rej("Could not Resolve P1!");
    }
  });
}

function p2(response) {
  return new Promise((res, rej) => {
    console.log(response);
    if (response === "Resolve P2") {
      res("P2 Resolved");
    } else {
      rej("Could not Resolve P2!");
    }
  });
}

//Promise Call
p1("Resolve P1")
  .then(() => {
    return p2("Resolve P2");
  })
  .then((res) => {
    console.log(res);
  });

//Async Await Call
const doSometing = async () => {
  let res1 = await p1("Resolve P1");
  console.log(res1);

  let res2 = await p2("Resolve P2");
  console.log(res2);
};

doSometing();
