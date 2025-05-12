## Problem Statement: Given a Stack having some elements stored in it. Can you implement a Queue using the given Stack?


### You can implement a Queue using a Stack by using two stacks to simulate the FIFO behavior of a queue.

## ✅ Problem Summary:
#### Given a working Stack (LIFO), implement a Queue (FIFO) with the following methods:

* #### enqueue(x) – Add element to the back of the queue

* #### dequeue() – Remove element from the front

* #### peek() – Get the front element

* #### isEmpty() – Check if the queue is empty

## 🔧 Approach: Use Two Stacks
* #### inStack: used for enqueue (pushing elements in)
* #### outStack: used for dequeue (popping from front)




```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class QueueUsingStacks {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(x) {
    this.inStack.push(x);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.peek();
  }

  isEmpty() {
    return this.inStack.isEmpty() && this.outStack.isEmpty();
  }
}

const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true
try {
  queue.dequeue(); // Throws "Queue is empty"
} catch (e) {
  console.log(e.message); // Output: Queue is empty
}
```