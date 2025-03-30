## Sort a linked list of 0s, 1s and 2s

### Given a linked list where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to the head side, 2s at the end of the linked list, and 1s in the middle of 0s and 2s.

```js
Input: LinkedList: 1->2->2->1->2->0->2->2
Output: 0->1->1->2->2->2->2->2
Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.
```

## Counting (Better Approach)

* #### Traverse the list and count the number of 0s, 1s, and 2s.

* #### Traverse the list again and update node values based on the counts.

```js
function sortLinkedListCount(head) {
  if (!head || !head.next) return head;

  let count = { 0: 0, 1: 0, 2: 0 };
  let current = head;

  // Count occurrences of 0, 1, and 2
  while (current) {
    count[current.val]++;
    current = current.next;
  }

  // Overwrite linked list with counted values
  current = head;
  for (let key of [0, 1, 2]) {
    while (count[key]-- > 0) {
      current.val = key;
      current = current.next;
    }
  }

  return head;
}

// Example usage (same as before)
console.log("Sorted List using Count Method:");
let sortedHead2 = sortLinkedListCount(head);
printList(sortedHead2);
```

## Time Complexity 

* #### First traversal (count occurrences of 0s, 1s, and 2s) → O(N)

* #### Second traversal (rewrite the linked list based on counts) → O(N)

* #### Since both traversals take O(N) time, the overall Time Complexity = O(N) + O(N) = O(2N).

* #### Thus, the counting approach runs in O(2N) time complexity. 🚀

## Space Complexity
* #### O(1) (no extra data structures used)

## Approach 3: Dutch National Flag Algorithm (Most Optimal)

* #### Create three dummy nodes for separate lists of 0s, 1s, and 2s.

* #### Traverse the original list and append each node to the respective list.

* #### Connect 0s → 1s → 2s and update the head.

```js
function sortLinkedListOptimal(head) {
  if (!head || !head.next) return head;

  let zeroHead = new ListNode(0), zeroTail = zeroHead;
  let oneHead = new ListNode(0), oneTail = oneHead;
  let twoHead = new ListNode(0), twoTail = twoHead;
  let current = head;

  // Partition nodes into three lists
  while (current) {
    if (current.val === 0) {
      zeroTail.next = current;
      zeroTail = zeroTail.next;
    } else if (current.val === 1) {
      oneTail.next = current;
      oneTail = oneTail.next;
    } else {
      twoTail.next = current;
      twoTail = twoTail.next;
    }
    current = current.next;
  }

  // Merge lists: 0s → 1s → 2s
  zeroTail.next = oneHead.next || twoHead.next;
  oneTail.next = twoHead.next;
  twoTail.next = null;

  return zeroHead.next;
}

// Example usage
console.log("Sorted List using Dutch National Flag Algorithm:");
let sortedHead3 = sortLinkedListOptimal(head);
printList(sortedHead3);
```

## Time Complexity:
* #### Single traversal of the linked list to distribute nodes into three separate lists → O(N)

* #### Merging the three lists (connecting 0s → 1s → 2s) → O(1)

* #### Since we perform a single pass to rearrange nodes and a constant-time merging step, the total time complexity is O(N).

## Space Complexity:
* #### We only use a few extra pointers (zeroHead, oneHead, twoHead, etc.), which do not depend on the size of the linked list.

* #### Since we rearrange the existing nodes without creating new ones, the space complexity is O(1) (constant extra space).