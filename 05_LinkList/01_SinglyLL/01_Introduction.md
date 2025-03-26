## LinkList

### A Linked List in JavaScript is a linear data structure where elements (nodes) are linked using pointers. Unlike arrays, linked lists do not store elements in contiguous memory locations.


### Key Components:

 * Node: Each node contains:

        * data (the actual value)

        * next (a reference to the next node)

* Head: The first node in the list.

* Tail: The last node, pointing to null.


## Types of Linked Lists:

### 1) Singly Linked List – Each node points to the next node.

### 2) Doubly Linked List – Each node has references to both next and previous nodes.

### 3) Circular Linked List – The last node links back to the head.

## Basic Operations:
* Insertion: Add a node at the beginning, end, or a specific position.

* Deletion: Remove a node from the list.

* Traversal: Iterate through the list to access elements.

* Search: Find an element in the list.

## Singly Linked List Implementation

```js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30

```
