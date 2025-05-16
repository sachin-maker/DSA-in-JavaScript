## Diameter of Binary Tree

### Given the root of the Binary Tree, return the length of its diameter. The Diameter of a Binary Tree is the longest distance between any two nodes of that tree. This path may or may not pass through the root.

### Brute Force Approach

* ### To find the diameter of a binary tree, we can think of every node as a potential `Curving Point` of the diameter path. This Curving Point is the node along the diameter path that holds the maximum height and from where the path curves uphill and downhill.

* ### Diameter = 1 + Left Subtree Height + Right Subtree Height Therefore, we can traverse the tree recursively considering each node as a potential Curving Point and calculate the height of the left and right subtrees at each node. This will give us the diameter for the current Curving Point. Throughout the traversal, we track the maximum diameter encountered and return it as the overall diameter of the Binary Tree.

### Algorithm:

* ### Step 1: Create a global variable `diameter` to store the maximum diameter encountered. At every node, we will take the maximum of this variable and the current diameter to update it to be the maximum amongst all.

* ### Step 2: Define the recursive function calculateHeight that takes in a node as an argument and calculate its height in the Binary Tree.

* ### Step 3: Recursively start traversing from the root, consider the current node to be a potential Curving Point and for each node:

* ### Recursively calculate the height of its left and right subtrees.
* ### Compute the diameter at the current node by summing heights of the left and right subtrees.
* ### Update the global variable diameter as the max of the current diameter and the largest diameter encountered so far.

* ### Step 4: Return the maximum diameter found during traversal as the result.

```js
                            
// Node structure for
// the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    constructor() {
        // Global variable to
        // store the diameter
        this.diameter = 0;
    }

    // Function to calculate
    // the height of a subtree
    calculateHeight(node) {
        if (node === null) {
            return 0;
        }

        // Recursively calculate the
        // height of left and right subtrees
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);

        // Calculate the diameter at the current
        // node and update the global variable
        this.diameter = Math.max(this.diameter, leftHeight + rightHeight);

        // Return the height
        // of the current subtree
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Function to find the
    // diameter of a binary tree
    diameterOfBinaryTree(root) {
        // Start the recursive
        // traversal from the root
        this.calculateHeight(root);

        // Return the maximum diameter
        // found during traversal
        return this.diameter;
    }
}

// Main function
function main() {
    // Creating a sample binary tree
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.left.right.right = new Node(6);
    root.left.right.right.right = new Node(7);

    // Creating an instance of the Solution class
    const solution = new Solution();

    // Calculate the diameter of the binary tree
    const diameter = solution.diameterOfBinaryTree(root);

    console.log("The diameter of the binary tree is: " + diameter);
}

// Run the main function
main();

```
* ### Time Complexity: O(N*N) where N is the number of nodes in the Binary Tree.

* ### This arises as we calculate the diameter of each node and to calculate the height of its left and right children, we traverse the tree which is proportional to the number of nodes.
* ### Since this calculation is performed for each node in the tree, the complexity becomes: O(N x N) ~ O(N2).

* ### Space Complexity : O(1) as no additional data structures or memory is allocated.O(H): Recursive Stack Space is used to calculate the height of the tree at each node which is proportional to the height of the tree.The recursive nature of the getHeight function, which incurs space on the call stack for each recursive call until it reaches the leaf nodes or the height of the tree.

### Optimal Approch

### The O(N2) time complexity of the previous approach can be optimised by eliminating the steps of repeatedly calculating subtree heights. The heights of the left and right subtrees are computed multiple times for each node, which leads to redundant calculations.Instead, we can compute these heights in a bottom-up manner. The Postorder method allows us to validate balance conditions efficiently during the traversal.

* ### The postorder traversal operates in a bottom-up manner, calculating subtree information before moving to the parent node. We efficiently compute the heights of both the subtrees and at the same time calculate the diameter and update the maximum diameter encountered.

### Algorithm:

* ### Step 1: Initialise a variable `diameter` to store the diameter of the tree. Create a function height that takes a node and a reference to the diameter variable as input.

* ### Step 2: Base Case: If the node is null, return 0 indicating the height of an empty tree.

* ### Step 3: Recursive Function:

* ### Recursively calculate the height of the left subtree then height of the right subtree.
* ### Set the current diameter as the sum of left subtree, right subtree + 1 for the current level.
* ### Update the diameter with the maximum of the current diameter and the global diameter.

* ### Step 4: After the traversal if complete, return the maximum diameter found during the traversal as the result.

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
    // Function to find the
    // diameter of a binary tree
    diameterOfBinaryTree(root) {
        // Initialize the variable to
        // store the diameter of the tree
        let diameter = 0;
        // Call the height function to traverse
        // the tree and calculate diameter
        this.height(root, diameter);
        // Return the calculated diameter
        return diameter;
    }

    // Function to calculate the height of
    // the tree and update the diameter
    height(node, diameter) {
        // Base case: If the node is null,
        // return 0 indicating the
        // height of an empty tree
        if (!node) {
            return 0;
        }

        // Recursively calculate the
        // height of left and right subtrees
        let lh = this.height(node.left, diameter);
        let rh = this.height(node.right, diameter);

        // Update the diameter with the maximum
        // of current diameter or sum of
        // left and right heights
        diameter = Math.max(diameter, lh + rh);

        // Return the height of
        // the current node's subtree
        return 1 + Math.max(lh, rh);
    }
}

// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

// Creating an instance of the Solution class
let solution = new Solution();

// Calculate the diameter of the binary tree
let diameter = solution.diameterOfBinaryTree(root);

console.log("The diameter of the binary tree is: " + diameter);
                    
                            
```
* ### Time Complexity: O(N) where N is the number of nodes in the Binary Tree. This complexity arises from visiting each node exactly once during the postorder traversal.

* ### Space Complexity : O(1) as no additional space or data structures is created that is proportional to the input size of the tree. O(H) Recursive Stack Auxiliary Space : The recursion stack space is determined by the maximum depth of the recursion, which is the height of the binary tree denoted as H. In the balanced case it is log2N and in the worst case its N.