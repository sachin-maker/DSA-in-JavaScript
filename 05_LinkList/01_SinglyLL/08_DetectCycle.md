## Detect a Cycle in a Linked List

### Algorithm
* #### Step 1: Initialise two pointers, `slow` and `fast`, to the head of the linked list. `slow` will advance one step at a time, while `fast` will advance two steps at a time. These pointers will move simultaneously.

* #### Step 2: Traverse the linked list with the `slow` and `fast` pointers. While traversing, repeatedly move `slow` one step and `fast` two steps at a time.

* #### Step 3: Continue this traversal until one of the following conditions is met:

* #### `fast` or `fast.next` reaches the end of the linked list (i.e., becomes null). In this case, there is no loop in the linked list ie. the linked list is linear, and the algorithm terminates by returning false.
* #### `fast` and `slow` pointers meet at the same node. This indicates the presence of a loop in the linked list, and the algorithm terminates by returning `true`.


```js


// Node class represents a
// node in a linked list
class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data; 
        
        // Pointer to the next node in the list
        this.next = next;  
    }
}

// Function to detect a loop in a linked list
// using the Tortoise and Hare Algorithm
function detectCycle(head) {
    // Initialize two pointers, slow and fast,
    // to the head of the linked list
    let slow = head;
    let fast = head;

    // Step 2: Traverse the linked list
    // with the slow and fast pointers
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        // Move fast two steps
        fast = fast.next.next;

        // Check if slow and fast pointers meet
        if (slow === fast) {
            return true;  // Loop detected
        }
    }

    // If fast reaches the end of the list, there is no loop
    return false;
}


// Create a sample linked list
// with a loop for testing
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

// Check if there is a loop in the linked list
if (detectCycle(head)) {
    console.log("Loop detected in the linked list.");
} else {
    console.log("No loop detected in the linked list.");
}

```

## ✅Time Complexity: O(N)
*  #### where N is the number of nodes in the linked list. This is because in the worst-case scenario, the fast pointer, which moves quicker, will either reach the end of the list (in case of no loop) or meet the slow pointer (in case of a loop) in a linear time relative to the length of the list.

* #### The key insight into why this is O(N) and not something slower is that each step of the algorithm reduces the distance between the fast and slow pointers (when they are in the loop) by one. Therefore, the maximum number of steps needed for them to meet is proportional to the number of nodes in the list.


## ✅Space Complexity : O(1) 
* #### The code uses only a constantamount of additionalspace, regardless of the linked list's length. This is achieved by using two pointers (slow and fast) to detect the loop without any significant extra memory usage, resulting in constantspace complexity, O(1).