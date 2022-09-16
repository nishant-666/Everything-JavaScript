const familyTree = {
  //Grandfather
  name: "John",
  age: 90,
  children: [
    {
      name: "Mary",
      age: 60,
    },
    {
      name: "Arthur",
      age: 60,
      children: [
        {
          name: "Lily",
          age: 35,
          children: [
            {
              name: "Hank",
              age: 60,
            },
            {
              name: "Henry",
              age: 57,
            },
          ],
        },
        {
          name: "Billy",
          age: 37,
        },
      ],
    },
    {
      name: "Dolores",
      age: 55,
    },
  ],
};

function sum(number) {
  let sum = 0;
  for (let index = number; index > 0; index--) {
    sum += index;
  }
  return sum;
}

function sumRec(number, sum = 0) {
  if (number <= 0) {
    return sum;
  }
  return sumRec(number - 1, number + sum);
}

function mulRec(number, mul = 1) {
  if (number <= 0) {
    return mul;
  }
  return sumRec(number - 1, number * mul);
}

function printFamTree(tree) {
  console.log(tree.name);

  if (tree?.children?.length === 0) {
    return;
  }

  tree?.children?.forEach((person) => {
    printFamTree(person);
  });
}

console.log(sum(6)); //6 + 5 + 4 + 3 + 2 + 1 + 0
console.log(sumRec(6)); //Sum = 6 + 5 + 4 + 3 + 2 + 1, Current = 0
console.log(mulRec(3)); //Mul = 3 * 2 * 1, Current = 0
console.log(printFamTree(familyTree));
