## Insert a Node (At the Beginning, End, and Middle)
* We can insert a node in three ways:

* At the beginning (Head Insertion)

* At the end (Tail Insertion)

* At a specific position (Middle Insertion)



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

  // Insert at the beginning
  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the end
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

  // Insert at a specific position
  insertAtPosition(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      this.insertAtBeginning(value);
      return;
    }
    
    let temp = this.head;
    let index = 0;
    
    while (temp && index < position - 1) {
      temp = temp.next;
      index++;
    }

    if (!temp) {
      console.log("Position out of bounds");
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode;
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
list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtPosition(15, 1);
list.printList();  // Output: 10 -> 15 -> 20 -> 30 -> null


```

 ## ✅ Insertion Complexity:

* Beginning: O(1) (Direct pointer update)

* End: O(n) (Traverses entire list)

* Middle: O(n) (Search + pointer update)