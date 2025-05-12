```js
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class Stack {
    constructor() {
        this.queue = new Queue();
    }

    push(item) {
        this.queue.enqueue(item);
        // Rotate the queue to make the newest element the front
        let size = this.queue.size();
        while (size > 1) {
            this.queue.enqueue(this.queue.dequeue());
            size--;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.queue.dequeue();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.queue.front();
    }

    isEmpty() {
        return this.queue.isEmpty();
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
```