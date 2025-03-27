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




## Recursive Approach

#### Base Case:

#### If the list is empty (`head` == null) or has only one node (head.next == null), return head (the reversed list is itself).

#### Recursive Step:

* #### Recursively reverse the rest of the list.

* #### Once recursion reaches the last node, start backtracking and reversing the links.

* #### Set `head.next.next` = head to reverse the pointer.

* #### Set `head.next` = null to break the original forward link.

```js

class ListNode {
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
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverseRecursive(node = this.head) {
    if (!node || !node.next) {
      this.head = node; // Set new head when recursion unwinds
      return node;
    }

    let newHead = this.reverseRecursive(node.next); // Reverse rest of the list
    node.next.next = node; // Reverse link
    node.next = null; // Set current node's next to null

    return newHead; // Return new head (last node of original list)
  }

  printList() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value + ' -> ';
      current = current.next;
    }
    console.log(output + 'null');
  }
}

// Example Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.printList(); // 1 -> 2 -> 3 -> 4 -> 5 -> null

list.reverseRecursive();

console.log("Reversed List:");
list.printList(); // 5 -> 4 -> 3 -> 2 -> 1 -> null
```

## ✅Time Complexity (TC) Analysis
* #### In the recursive reversal of a linked list, we traverse the list once, processing each node one time.

* #### Each recursive call moves to the next node (reverseRecursive(node.next)) → This happens N times (where N is the number of nodes).

* #### Each call performs constant-time operations (changing next pointers) → O(1)

* #### Overall, the function visits each node once, so the total complexity is:O(N)


## ✅Space Complexity (SC) Analysis
* #### The recursive approach uses implicit stack space due to recursive function calls.

* #### Each recursive call adds a new frame to the call stack.

* #### The depth of recursion is equal to the number of nodes (N) in the worst case.

* #### Once the base case is reached, the recursion starts unwinding.

* #### Each function call takes O(1) space, so the total recursive stack space used is:O(N)

* #### Thus, the space complexity is O(N) due to recursion.