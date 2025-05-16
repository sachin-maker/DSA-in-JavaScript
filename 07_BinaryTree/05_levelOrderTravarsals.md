## levelOrder Travarsal


### Iterative Level-Order Traversal

* ### The iterative approach uses a queue to process nodes level by level:

* ### Start by adding the root to the queue.
* ### While the queue is not empty:
* ### Dequeue a node, process it (add its value to the result).
* ### Enqueue its left child (if exists).
* ### Enqueue its right child (if exists).
* ### The queue ensures that nodes are processed in the order of their level, from left to right.

* ### Time Complexity: O(n), where n is the number of nodes, as we visit each node exactly once.
* ### Space Complexity: O(w), where w is the maximum width of the tree (maximum number of nodes at any level). For a balanced binary tree, this is O(n/2) ≈ O(n). For a skewed tree, it’s O(1).


### Recursive Level-Order Traversal

* ### While level-order traversal is naturally iterative due to its BFS nature, it can be implemented recursively by processing nodes at each level using a helper function. The idea is:

* ### Use a recursive function that takes the current level’s nodes as input.
* ### Process all nodes at the current level and collect their children for the next level.
* ### Recursively call the function for the next level until no nodes remain.
* ### This approach is less common and less efficient than the iterative method but is included for completeness.

* ### Time Complexity: O(n), as we visit each node exactly once.
* ### Space Complexity: O(w) for the nodes array at each level, where w is the maximum width of the tree (same as iterative). Additionally, the recursion stack adds O(h), where h is the height of the tree. Total: O(w + h). In practice, O(w) dominates for wide trees, and O(h) dominates for deep trees.

```js
// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Iterative Level-Order Traversal
function levelOrderTraversalIterative(root) {
    if (root === null) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    
    return result;
}

// Recursive Level-Order Traversal
function levelOrderTraversalRecursive(root) {
    if (root === null) return [];
    
    const result = [];
    
    function processLevel(nodes) {
        if (nodes.length === 0) return;
        
        const nextLevel = [];
        for (const node of nodes) {
            result.push(node.val);
            if (node.left !== null) nextLevel.push(node.left);
            if (node.right !== null) nextLevel.push(node.right);
        }
        processLevel(nextLevel);
    }
    
    processLevel([root]);
    return result;
}

// Create the example tree:
//      1
//     / \
//    2   3
//   / \
//  4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Test both methods
console.log("Iterative Level-Order Traversal:", levelOrderTraversalIterative(root)); // [1, 2, 3, 4, 5]
console.log("Recursive Level-Order Traversal:", levelOrderTraversalRecursive(root)); // [1, 2, 3, 4, 5]
```
