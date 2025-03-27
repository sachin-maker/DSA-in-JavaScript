## Find the Length of a Singly Linked List
### To find the length of a Singly Linked List (SLL), we traverse the list while maintaining a counter.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the end for testing
  insertAtEnd(value) {
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

  // Function to find length of linked list
  getLength() {
    let temp = this.head;
    let count = 0;

    while (temp) {
      count++;
      temp = temp.next;
    }

    return count;
  }
}

// Example Usage
const list = new SinglyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
console.log("Length of Linked List:", list.getLength());  // Output: 3

```

### ✅ Time Complexity: O(n) (Must visit each node once)
### ✅ Space Complexity: O(1) (Uses only one variable)


