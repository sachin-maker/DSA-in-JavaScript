## Given the root of a binary tree, return the preorder traversal of its nodes' values.do it in iteratively and recursively

```js
// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Recursive Preorder Traversal
function preorderTraversalRecursive(root) {
    const result = [];
    
    function preorder(node) {
        if (node === null) return;
        result.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
    
    preorder(root);
    return result;
}

// Iterative Preorder Traversal
function preorderTraversalIterative(root) {
    if (root === null) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right !== null) stack.push(node.right);
        if (node.left !== null) stack.push(node.left);
    }
    
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
console.log("Recursive Preorder Traversal:", preorderTraversalRecursive(root)); // [1, 2, 4, 5, 3]
console.log("Iterative Preorder Traversal:", preorderTraversalIterative(root)); // [1, 2, 4, 5, 3]

```

### Recursive Preorder Traversal
* #### The recursive approach is straightforward:

* #### Visit the root node (add its value to the result).
* #### Recursively traverse the left subtree.
* #### Recursively traverse the right subtree.
* #### Base case: If the node is null, return.
* #### Time Complexity: O(n), where n is the number of nodes, as we visit each node exactly once.
* #### Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is O(n). In a balanced tree, it’s O(log n).


### Iterative Preorder Traversal

* #### The iterative approach uses a stack to mimic the recursion process:

* #### Start with the root node and push it onto the stack.
* #### While the stack is not empty:
* #### Pop a node from the stack.
* #### Process it (add its value to the result).
* #### Push the right child onto the stack (if exists).
* #### Push the left child onto the stack (if exists).
* #### We push right before left because the stack is LIFO (last-in, first-out), and we want to process the left subtree before the right.