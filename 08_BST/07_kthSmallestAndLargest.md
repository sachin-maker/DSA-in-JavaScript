## Find K-th smallest/largest element in BST

### Given a Binary Search Tree and an integer ‘K’. Find and return the ‘K-th’ smallest and ‘K-th’ largest element in the given Binary Search Tree.

## Brute Force Approach
### A brute force approach would be to traverse the BST using an inorder traversal which will get us an array containing all node values in the ascending sorted order. Following this traversal, we retrieve the Kth smallest element by accessing the element at index k-1 in the array considering array indices start from 0. Similarly to determine the Kth largest element, we can access it at index array.length - k.

* ### Step 1: Initialise an array to store the elements of the BST. Traverse the BST using an inorder traversal and store each node’s value in the array.

Step 2:Once the traversal is complete, the array will contain elements in ascending order (due to inorder traversal).

To find the Kth smallest element access the element at index ‘k - 1’ in the array. (As the indices start from 0).
To find the Kth largest element access the element at index ‘array.length - K’ index.

Step 3: Return the pair containing the Kth smallest and the Kth largest elements.

```js
                            
// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
    // Constructor to initialize the node with a
    // value and set left and right pointers to null
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Inorder traversal to populate
    // the array with BST elements
    inorder(node, arr){
        if(!node){
            return;
        }
        // Recursive call to the left subtree
        this.inorder(node.left, arr);
        
        // Push the value of current
        // node into the array
        arr.push(node.val);
        
        // Recursive call to the right subtree
        this.inorder(node.right, arr);
        return;
    }

    // Function to find the Kth
    // smallest and largest elements in BST
    findKth(node, k){
        // Array to store the
        // elements of the BST
        let arr = [];
        
        // Perform inorder traversal
        // to populate the array
        this.inorder(node, arr);
        
        // Calculate Kth largest
        // and smallest elements
        let kLargest = arr[arr.length + 1 - k];
        let kSmallest = arr[k - 1]; 
        
        // Returning a pair containing
        // Kth smallest and largest elements
        return [kSmallest, kLargest];
    }
}

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
    // Check if the current node
    // is null (base case for recursion)
    if (root === null) {
        // If null, return and
        // terminate the function
        return;
    }

    // Recursively call printInOrder
    // for the left subtree
    printInOrder(root.left);

    // Print the value of the current node
    console.log(root.val + " ");

    // Recursively call printInOrder
    // for the right subtree
    printInOrder(root.right);
}

// Creating a BST
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

console.log("Binary Search Tree: ");
printInOrder(root);
console.log();

let solution = new Solution();

// Find the Kth smallest and largest elements
let k = 3;
console.log("k: ", k);
let kthElements = solution.findKth(root, k);

console.log("Kth smallest element: ", kthElements[0]);
console.log("Kth largest element: ", kthElements[1]);

                            
```
### Time Complexity: O(N) where N is the number of nodes in the Binary Search Tree. because traversing the entire BST to perform an inorder traversal takes linear time. We visit each node once resulting in time complexity proportional to the number of nodes in the BST.

### Space Complexity : O(N) where N is the number of nodes in the Binary Search Tree as additional space is required to store the elements of the BST in an array.

## Optimal Approach
### A more efficient approach for finding the K-th smallest and K-th largest elements in a Binary Search Tree (BST) without using extra space would involve an optimised traversal technique directly targeting the K-th elements without storing all elements in an array. We use two traversal methods (inorder and reverse inorder) to find the Kth smallest and largest elements in the given BST. We maintain a counter variable to track the number of visited nodes, stopping when the Kth element is found in each traversal.

### Algorithm for Kth Smallest Element:

* ### Step 1: Perform inorder traversal from the root node. At every visited node, increment a counter variable to keep track of visited nodes. Inorder Traversal: Traverse the left subtree, then current node then right subtree.

* ### Step 2: When the counter reaches K, store the value of the current node as the Kth smallest.

* ### Step 3: Return this value as the Kth smallest.

### Algorithm for Kth Largest Element:

* ### Step 1: Perform reverse inorder traversal from the root node. At every visited node, increment a counter variable to keep track of visited nodes. Traverse the right subtree, then current node then left subtree.

* ### Step 2: When the counter reaches K, store the value of the current node as the Kth smallest.

* ### Step 3: Return this value as the Kth largest.

```js
                            
// Definition of TreeNode structure
// for a binary tree node
class TreeNode {
    // Constructor to initialize the node with a
    // value and set left and right pointers to null
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Helper function to perform reverse inorder
    // traversal to find Kth largest element
    reverseInorder(node, counter, k, kLargest) {
        if (!node || counter >= k) return;

        // Traverse right subtree
        this.reverseInorder(node.right, counter, k, kLargest);

        // Increment counter after
        // visiting right subtree
        counter++;

        // Check if current node
        // is the Kth largest
        if (counter === k) {
            kLargest[0] = node.val;
            return;
        }

        // Traverse left subtree if
        // Kth largest is not found yet
        this.reverseInorder(node.left, counter, k, kLargest);
    }

    // Helper function to perform inorder
    // traversal to find Kth smallest element
    inorder(node, counter, k, kSmallest) {
        if (!node || counter >= k) return;

        // Traverse left subtree
        this.inorder(node.left, counter, k, kSmallest);

        // Increment counter after visiting left subtree
        counter++;

        // Check if current node is the Kth smallest
        if (counter === k) {
            kSmallest[0] = node.val;
            return;
        }

        // Traverse right subtree if
        // Kth smallest is not found yet
        this.inorder(node.right, counter, k, kSmallest);
    }

    findKth(root, k) {
        const kSmallest = [Number.MIN_SAFE_INTEGER];
        const kLargest = [Number.MIN_SAFE_INTEGER];
        // Counter to track visited nodes
        let counter = 0;

        // Find Kth smallest element
        // (perform inorder traversal)
        this.inorder(root, counter, k, kSmallest);

        // Reset counter for Kth largest element
        counter = 0;
        // Find Kth largest element
        // (perform reverse inorder traversal)
        this.reverseInorder(root, counter, k, kLargest);

        return [kSmallest[0], kLargest[0]];
    }
}

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
    // Check if the current node
    // is null (base case for recursion)
    if (root === null) {
        // If null, return and
        // terminate the function
        return;
    }

    // Recursively call printInOrder
    // for the left subtree
    printInOrder(root.left);

    // Print the value of the current node
    console.log(root.val + " ");

    // Recursively call printInOrder
    // for the right subtree
    printInOrder(root.right);
}

// Creating a BST
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

console.log("Binary Search Tree:");
printInOrder(root);
console.log();

const solution = new Solution();

// Find the Kth smallest and largest elements
const k = 3;
console.log("k: " + k);
const kthElements = solution.findKth(root, k);

console.log("Kth smallest element: " + kthElements[0]);
console.log("Kth largest element: " + kthElements[1]);
                    
                            
```

### Time Complexity: O(N) where N is the number of nodes in the Binary Search Tree as we traverse in inorder and reverse inorder fashion to get to the required nodes. We visit each node once resulting in time complexity proportional to the number of nodes in the BST.

### Space Complexity : as no additional space is allocated or data structures used to store any values.

