## Deleting a Node (Beginning, End, Middle)
* We can delete:

* First node

* Last node

* A node at a specific position
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Delete first node
  deleteFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // Delete last node
  deleteLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
  }

  // Delete at specific position
  deleteAtPosition(position) {
    if (!this.head) return;
    if (position === 0) {
      this.deleteFirst();
      return;
    }

    let temp = this.head;
    let index = 0;
    
    while (temp.next && index < position - 1) {
      temp = temp.next;
      index++;
    }

    if (!temp.next) {
      console.log("Position out of bounds");
      return;
    }

    temp.next = temp.next.next;
  }

  // Print the list
  printList() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.value + " -> ";
      temp = temp.next;
    }
    console.log(result + "null");
  }
}

// Example Usage
const list = new SinglyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.deleteAtPosition(1);
list.printList();  // Output: 10 -> 30 -> null


```

## ✅ Deletion Complexity:

* Beginning: O(1)

* End: O(n)

* Middle: O(n)

