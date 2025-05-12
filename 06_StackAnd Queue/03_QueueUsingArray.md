```js
class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }

  // Add element to rear
  enqueue(element) {
    this.queue[this.length] = element;
    this.length++;
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) return null;

    const removed = this.queue[0];

    // Shift all elements to the left manually
    for (let i = 1; i < this.length; i++) {
      this.queue[i - 1] = this.queue[i];
    }

    this.length--;
    this.queue.length = this.length; // trim array
    return removed;
  }

  // Get front element
  front() {
    if (this.isEmpty()) return null;
    return this.queue[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get current size
  size() {
    return this.length;
  }
}
```

✅ Example Usage
```js
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.front());    // 10
console.log(q.dequeue());  // 10
console.log(q.size());     // 2
console.log(q.isEmpty());  // false
``` 

| Operation | Time Complexity | Explanation                                               |
| --------- | --------------- | --------------------------------------------------------- |
| `enqueue` | O(1)            | Adds at end using index assignment.                       |
| `dequeue` | O(n)            | Shifts all elements left by one when removing from front. |
| `front`   | O(1)            | Direct access to index 0.                                 |
| `isEmpty` | O(1)            | Simple comparison.                                        |
| `size`    | O(1)            | Tracked with a variable.                                  |
