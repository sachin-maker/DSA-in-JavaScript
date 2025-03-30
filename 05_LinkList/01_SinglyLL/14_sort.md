## Merge Sort a Linked List

his approach employs the divide-and-conquer strategy:

Divides the linked list into smaller parts until they become trivial to sort (single node or empty list).
Merges and sorts the divided parts while combining them back together.
Algorithm

Step 1: Base Case If the linked list contains zero or one element, it is already sorted. Return the head node.

Step 2: Split the ListFind the middle of the linked list using a slow and a fast pointer. Read more about this approach here!Middle Element in Linked List. Split the linked list into two halves at the middle node. The two halves will be left and right.

Step 3: RecursionRecursively apply merge sort to both halves obtained in the previous step. This step continues dividing the linked list until there's only one node in each half.

Step 4: Merge Sorted ListsMerge the sorted halves obtained from the recursive calls into a single sorted linked list. Compare the nodes from both halves and rearrange them to form a single sorted list. Update the head pointer to the beginning of the newly sorted list.

Step 5: ReturnOnce the merging is complete, return the head of the sorted linked list.

```js
                            
 // Node class represents a node in a linked list
class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}

// Function to merge two sorted linked lists
function mergeTwoSortedLinkedLists(list1, list2) {
    // Create a dummy node to serve
    // as the head of the merged list
    let dummyNode = new Node(-1);
    let temp = dummyNode;

    // Traverse both lists simultaneously
    while (list1 !== null && list2 !== null) {
        // Compare elements of both lists and
        // link the smaller node to the merged list
        if (list1.data <= list2.data) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        // Move the temporary pointer to the next node
        temp = temp.next;
    }

    // If any list still has remaining elements,
    // append them to the merged list
    if (list1 !== null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }
    // Return the merged list starting
    // from the next of the dummy node
    return dummyNode.next;
}

// Function to find the middle of a linked list
function findMiddle(head) {
    // If the list is empty or has only one node,
    // the middle is the head itself
    if (head === null || head.next === null) {
        return head;
    }

    // Initializing slow and fast pointers
    let slow = head;
    let fast = head.next;

    // Move the fast pointer twice
    // as fast as the slow pointer
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // When the fast pointer reaches the end,
    // the slow pointer will be at the middle
    return slow;
}

// Function to perform merge sort on a linked list
function sortLL(head) {
    // Base case: if the list is empty or has only
    // one node, it is already sorted, so return the head
    if (head === null || head.next === null) {
        return head;
    }

    // Find the middle of the list
    // using the findMiddle function
    let middle = findMiddle(head);

    // Divide the list into two halves
    let right = middle.next;
    middle.next = null;
    let left = head;

    // Recursively sort the left and right halves
    left = sortLL(left);
    right = sortLL(right);

    // Merge the sorted halves using
    // the mergeTwoSortedLinkedLists function
    return mergeTwoSortedLinkedLists(left, right);
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        // Print the data of the current node
        console.log(temp.data + " ");
        // Move to the next node
        temp = temp.next;
    }
    console.log("\n");
}

// Creating and sorting the linked list in JavaScript
let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(5);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(1);

console.log("Original Linked List: ");
printLinkedList(head);

// Sort the linked list
head = sortLL(head);

console.log("Sorted Linked List: ");
printLinkedList(head);

                            
 ```

## Time Complexity: O(N log N)
* #### where N is the number of nodes in the linked list. Finding the middle node of the linked list requires traversing it linearly taking O(N) time complexity and to reach the individual nodes of the list, it has to be split log N times (continuously halve the list until we have individual elements).

## Space Complexity : O(1) 
* #### as no additional data structures or space is allocated for storage during the merging process. However, space proportional to O(log N) stack space is required for the recursive calls. THe maximum recursion depth of log N height is occupied on the call stack.