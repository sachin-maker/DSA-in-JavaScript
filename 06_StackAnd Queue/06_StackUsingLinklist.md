

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }

    getSize() {
        return this.size;
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true
console.log(stack.getSize()); // Output: 0

```