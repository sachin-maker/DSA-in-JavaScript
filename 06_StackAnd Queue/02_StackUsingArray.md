## Stack implementation in JavaScript using an array.

* #### push(element): Add an element to the top.

* #### pop(): Remove and return the top element.

* #### top(): Return the top element without removing it.

* #### isEmpty(): Check if the stack is empty.

* #### size(): Return the number of elements in the stack.

```js 
class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  // Custom push: Add element at the end
  push(element) {
    this.stack[this.length] = element;
    this.length++;
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) return null;
    const popped = this.stack[this.length - 1];
    this.length--;
    this.stack.length = this.length; // trim the array
    return popped;
  }

  // Get the top element
  top() {
    if (this.isEmpty()) return null;
    return this.stack[this.length - 1];
  }

  // Check if stack is empty
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
const s = new Stack();
s.push(100);
s.push(200);
console.log(s.top());   // 200
console.log(s.pop());   // 200
console.log(s.size());  // 1
```


| Operation | Time Complexity | Explanation                                        |
| --------- | --------------- | -------------------------------------------------- |
| `push`    | O(1)            | Adds at end of array (simple index assignment).    |
| `pop`     | O(1)            | Removes from end of array (just decrements index). |
| `top`     | O(1)            | Direct access by index.                            |
| `isEmpty` | O(1)            | Simple comparison.                                 |
| `size`    | O(1)            | Tracked with a variable.                           |
