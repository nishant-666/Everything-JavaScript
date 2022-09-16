//Localstorage

function storeLocal() {
  localStorage.setItem("name", "Nishant");
  localStorage.setItem("name", "Uday");
  let name = localStorage.getItem("name");
  console.log(name);
  localStorage.removeItem("name");

  let number = 50;
  let array = ["Nishant", "Shailesh", "Abhishek"];
  localStorage.setItem("number", number);
  localStorage.setItem("array", JSON.stringify(array));
  let num = Number(localStorage.getItem("number"));
  let arr = localStorage.getItem("array");
  console.log(number);
  console.log(num);
  console.log(array);
  console.log(JSON.parse(arr));
}

storeLocal();

//Sessionstorage
function storeSession() {
  sessionStorage.setItem("name", "Nishant");
}

storeSession();
