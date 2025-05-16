## Maximum Sum Path in Binary Tree

###  Given a Binary Tree, determine the maximum sum achievable along any path within the tree. A path in a binary tree is defined as a sequence of nodes where each pair of adjacent nodes is connected by an edge. Nodes can only appear once in the sequence, and the path is not required to start from the root. Identify and compute the maximum sum possible along any path within the given binary tree.

### To find the diameter of a binary tree, we can think of every node as a potential `Curving Point` of the path along which we find the sum. The maximum sum of a path through a turning point (like a curve) can be found by adding the maximum sum achievable in the left subtree, the right subtree, and the value of the turning point.

### We can recursively traverse the tree, considering each node as a potential turning point and storing the maximum value (our final answer) in a reference variable. The recursive function should be defined in such a way that we consider both the possibilities:

### When the current node is the turning point and in this scenario we calculate the maximum path sum taking into sum contributions from both the left and right subtrees along with the value of the current node.
### When the current node is not the turning point, we consider only the left or the right subtree. The maximum of the two is returned as the maximum path sum of that subtree.
### Base Case: When the current node is null which indicates the end of a path or a lead node, we return the maximum path sum as 0.

### Recursive Function:

* ### Calculate the maximum path sum for the left and right subtrees by making recursive calls to the left and right child of the current node.
* ### Calculate the maximum path sum when the current node serves as the turning point: Maximum Path Sum when Current Node is Turning Point = Maximum Path Sum of Left Subtree + Maximum Path Sum of Right Subtree + Current Value of Node
* ### Update the overall maximum path sum (maxi) by considering the sum of the current node and the left and right subtree sums.
* ### Return the maximum sum considering only one branch (either left or right) along with the value of the current node as the maximum sum up until this node.


### Algorithm:

* ### Step 1: Initialise the variable maxi to the minimum possible integer value. This ensures that the algorithm correctly updates maxi with the first encountered valid path sum (even if its negative) and subsequently updates it whenever a larger path sum is found.

* ### Step 2: Call the recursive function `findMaxPathSum` with the root of the binary tree and the reference parameter maxi.

* ### Step 3: Base case: If the current node is null, return 0.

* ### Step 4: Calculate the maximum path sum for the left and right subtree using recursion.

* ### Step 5: Update the overall maximum path sum (maxi) by considering the sum of the left and right subtree paths plus the current node's value. This represents the sum of the path that includes the current node. This sum is used to update the overall maximum path sum (maxi) when the current node serves as the turning point in the path.

* ### Step 6: Return the maximum sum considering only one branch (either left or right) along with the current node. This represents the maximum sum considering only one branch (either left or right) along with the current node. This value is returned by the recursive function to contribute to the calculation of the maximum path sum in the binary tree. Case Considering Negative Leaf Nodes:

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
    // Recursive function to find the maximum path sum
    // for a given subtree rooted at 'root'
    // The variable 'maxi' is a reference parameter
    // updated to store the maximum path sum encountered
    findMaxPathSum(root, maxi) {
        // Base case: If the current node is null, return 0
        if (root === null) {
            return 0;
        }

        // Calculate the maximum path sum
        // for the left and right subtrees
        const leftMaxPath = Math.max(0, this.findMaxPathSum(root.left, maxi));
        const rightMaxPath = Math.max(0, this.findMaxPathSum(root.right, maxi));

        // Update the overall maximum
        // path sum including the current node
        maxi[0] = Math.max(maxi[0], leftMaxPath + rightMaxPath + root.data);

        // Return the maximum sum considering
        // only one branch (either left or right)
        // along with the current node
        return Math.max(leftMaxPath, rightMaxPath) + root.data;
    }

    // Function to find the maximum
    // path sum for the entire binary tree
    maxPathSum(root) {
        // Initialize maxi to the
        // minimum possible integer value
        const maxi = [Number.MIN_SAFE_INTEGER];

        // Call the recursive function to
        // find the maximum path sum
        this.findMaxPathSum(root, maxi);

        // Return the final maximum path sum
        return maxi[0];
    }
}

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

// Finding and printing the maximum path sum
const maxPathSum = solution.maxPathSum(root);
console.log("Maximum Path Sum: " + maxPathSum);
                            
```