## Reversing a Linked List
### To reverse an SLL, we update pointers so each node points to the previous node instead.
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

// Example Usage
const list = new SinglyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.reverse();
list.printList();  // Output: 30 -> 20 -> 10 -> null

```

### ✅ Reversal Complexity: O(n)