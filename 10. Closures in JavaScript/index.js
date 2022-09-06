//This is a Closure

function Parent() {
  let a = 5;
  let b = 6;
  let c = 7;
  console.log(a);
  function Child() {
    console.log(b);
    function subChild() {
      console.log(c);
    }

    subChild();
  }

  Child();
}
Parent();
