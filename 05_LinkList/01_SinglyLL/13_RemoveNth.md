## Remove N-th node from the end of a Linked List
```js
Example 1:

Input Format: 5->1->2, N=2

Result: 5->2

Explanation: The 2nd node from the end of the linked list is 1. Therefore, we get this result after removing 1 from the linked list.

Example 2:

Input Format: 1->2->3->4->5, N=3

Result: 1->2->4->5

Explanation: The 3rd node from the end is 3, therefore, we remove 3 from the linked list.
```

## Algorithm
* #### Initialize two pointers, `slow` and `fast`, to the head of the linked list. Initially, only fast will move till it crosses N nodes, after which both of the pointers will move simultaneously.

* #### 2. Traverse the linked list till the fast pointer reaches the last node, that is, the Lth Node, at this stage, the slow pointer is guaranteed to be at the (L-N)th node.

* #### 3. Point this slow pointer to the (L-N+2)th node, effectively skipping the Nth node from the end or the (L-N+1)th node from the start.

* #### 4. Finally, free up the space occupied by this to delete it.

* #### Note: In the case of languages like Java, Python, and Javascript, there is no need for the deletion of objects or nodes because these have an automatic garbage collection mechanism that automatically identifies and reclaims memory that is no longer in use.

```js

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// Function to print the linked list
function printLL(head) {
    while (head !== null) {
        console.log(head.data + ' ');
        head = head.next;
    }
}

// Function to delete the Nth node from the end of the linked list
function DeleteNthNodefromEnd(head, N) {
    // Create two pointers, fastp and slowp
    let fastp = head;
    let slowp = head;

    // Move the fastp pointer N nodes ahead
    for (let i = 0; i < N; i++)
        fastp = fastp.next;

    // If fastp becomes null, the Nth node from the end is the head
    if (fastp === null)
        return head.next;

    // Move both pointers until fastp reaches the end
    while (fastp.next !== null) {
        fastp = fastp.next;
        slowp = slowp.next;
    }

    // Delete the Nth node from the end
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
}

const arr = [1, 2, 3, 4, 5];
const N = 3;
let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);
head.next.next.next.next = new Node(arr[4]);

// Delete the Nth node from the end and print the modified linked list
head = DeleteNthNodefromEnd(head, N);
printLL(head);

```

## Time Complexity: O(N)
 since the fast pointer will traverse the entire linked list, where N is the length of the linked list.

## Space Complexity: O(1),
 as we have not used any extra space.