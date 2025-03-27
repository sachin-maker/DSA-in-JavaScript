## Searching for a Node
* We traverse the list to check if a value exists.
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  search(value) {
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (temp.value === value) {
        return `Value found at index ${index}`;
      }
      temp = temp.next;
      index++;
    }
    return "Value not found";
  }
}

// Example Usage
const list = new SinglyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
console.log(list.search(20));  // Output: Value found at index 1
```

### ✅ Search Complexity: O(n) (linear search)