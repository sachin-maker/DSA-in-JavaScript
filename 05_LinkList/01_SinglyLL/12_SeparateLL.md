## Segregate even and odd nodes in LinkedList

```js
Example 1:
Input: 1→2→3→4→5→6→Null
Output: 2→4→6→1→3→5→Null
Explanation : 
Odd Nodes in LinkedList are 1,3,5 and 
Even Nodes in LinkedList are 2,4,6
In Modified LinkedList all even Nodes comes before 
all Odd Nodes. So Modified LinkedList looks like 
2→4→6→1→3→5→Null. Order of even and odd Nodes is 
maintained in modified LinkedList.
```

## Intuition : 
* #### The Intuition is to Split the LinkedList into two parts. One Contains all the Even Nodes and the other contains all the Odd Ends. After obtaining two LinkedLists we attach odd LinkedList at the end of the Even LinkedList.

* #### To split the LinkedList take two dummy Nodes which act as the Heads of the odd and Even LinkedList. Traverse the original LinkedList. While traversing if the Node is odd remove the Node from the original LinkedList and add to odd LinkedList. Similarly for the Even Node too.

* #### After Traversing we obtain two LinkedList with all odd and all Even Nodes. Attach odd LinkedList at the end of Even LinkedList. As we are appending nodes to Odd and Even LinkedLists one by one the order of Nodes is undisturbed. 

## Approach:
* #### Create two dummy nodes, evenHead and oddHead, to serve as the heads of the even and odd lists.

* #### Traverse the linked list, adding even nodes to the even list and odd nodes to the odd list.

* #### After traversal, connect the even list to the odd list.

* #### Ensure the last node of the odd list points to null.

```js
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function segregateEvenOdd(head) {
  if (!head || !head.next) return head;

  let evenHead = new ListNode(0), evenTail = evenHead;
  let oddHead = new ListNode(0), oddTail = oddHead;
  let current = head;

  while (current) {
    if (current.val % 2 === 0) {
      evenTail.next = current;
      evenTail = evenTail.next;
    } else {
      oddTail.next = current;
      oddTail = oddTail.next;
    }
    current = current.next;
  }

  // Connect even list to odd list
  evenTail.next = oddHead.next;
  oddTail.next = null; // Ensure last node of odd list points to null

  return evenHead.next;
}

// Helper function to print the linked list
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" → ") + " → Null");
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

console.log("Original List:");
printList(head);

let newHead = segregateEvenOdd(head);
console.log("Modified List:");
printList(newHead);

```

## Time Complexity:
O(N) → We traverse the list once.

## Space Complexity:
O(1) → We use only a few extra pointers, making it in-place.
