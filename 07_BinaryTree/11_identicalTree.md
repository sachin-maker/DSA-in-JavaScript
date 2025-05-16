## Check if two trees are identical

### Given two Binary Trees, return if true if the two trees are identical, otherwise return false.

### To determine if two binary trees are identical, we can follow a recursive approach. We traverse both trees in the preorder manner, meaning that the current node's value is checked before recursively traversing its left and right subtrees.

### The idea is to traverse both trees simultaneously, comparing the values of corresponding nodes at each step. We need to ensure that the left subtree of each node in the first tree is identical to the left subtree of the corresponding node in the second tree, and similarly for the right subtrees.

### Base Case: The base case for recursion is reached when both nodes are null, indicating the end of the subtree. In this case return true. If only one of the nodes in null while the other is not or vice versa, return false since they cannot be identical.

### Recursive Function:

* ### Check if the values of the current nodes in both tree are equal. If not, return false otherwise check the conditions below.
* ### Check if the left subtree of both the trees is identical or not by calling the recursive function on the left child.
* ### Check if the right subtree of both the trees is identical or not by calling the recursive function on the right child.
* ### If all recursive calls return true, indicating that the values and structures of the subtrees are identical, the function returns true, confirming that the entire trees are identical.

## Algorithm:

* ### Step 1: Start at the root node of both trees (node1 and node2).

* ### Step 2: Check if the values of the current nodes in both trees are equal. If not return false.

* ### Step 3: Recursively check the left then right subtree of the current node in both trees is identical.

* ### Step 4: If all the recursive checks return true, then return the trees are identical, otherwise they are not.

```js

                            
// Node structure for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to check if two binary trees are identical
    isIdentical(node1, node2) {
        // If both nodes are NULL, they are identical
        if (node1 === null && node2 === null) {
            return true;
        }
        // If only one of the nodes is NULL, they are not identical
        if (node1 === null || node2 === null) {
            return false;
        }
        // Check if the current nodes have the same data value
        // and recursively check their left and right subtrees
        return (
            node1.data === node2.data &&
            this.isIdentical(node1.left, node2.left) &&
            this.isIdentical(node1.right, node2.right)
        );
    }
}

// Main function
function main() {
    // Node1
    let root1 = new Node(1);
    root1.left = new Node(2);
    root1.right = new Node(3);
    root1.left.left = new Node(4);

    // Node2
    let root2 = new Node(1);
    root2.left = new Node(2);
    root2.right = new Node(3);
    root2.left.left = new Node(4);

    let solution = new Solution();

    // Check if binary trees are identical
    if (solution.isIdentical(root1, root2)) {
        console.log("The binary trees are identical.");
    } else {
        console.log("The binary trees are not identical.");
    }
}

// Run the main function
main();

                            
```