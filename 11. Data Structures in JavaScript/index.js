//Stacks
class Stacks {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
    console.log(this.array);
  }

  pop() {
    this.array.pop();
    console.log(this.array);
  }
}

let stack = new Stacks();

//Pushing Items in Stack
// stack.push(5);
// stack.push(15);
// stack.push(27);

//Popping items
// stack.pop();
// stack.pop();

//Queues
class Queues {
  constructor() {
    this.array = [];
  }

  //Pushing items in Queue
  push(item) {
    this.array.unshift(item);
    console.log(this.array);
  }

  pop() {
    this.array.pop();
    console.log(this.array);
  }
}

//Pushing
// let queue = new Queues();
// queue.push("Nishant");
// queue.push("Shailesh");
// queue.push("Mayank");
// queue.push("Abhishek");

//Popping
// queue.pop();
// queue.pop();

//Linked List

class Node {
  constructor(head, address = null) {
    this.head = head;
    this.address = address;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.data = new Node(item, this.data);
  }

  insertLast(item) {
    let node = new Node(item);
    let curr;

    if (!this.data) {
      this.data = node;
    } else {
      curr = this.data;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }
  }

  getAtLast() {
    let current = this.data;

    while (current) {
      console.log(current.head);
      current = current.next;
    }
  }
}

let linkedList = new LinkedList();

linkedList.insertFirst(57);
linkedList.insertFirst(48);
linkedList.insertFirst(25);

linkedList.insertLast(84);
linkedList.insertLast(95);
linkedList.insertLast(105);

linkedList.getAtLast();

// 95 -> 84 -> 25 -> 48 -> 57
