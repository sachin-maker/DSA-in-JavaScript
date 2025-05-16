## InOrder Travarsals

```js

// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Recursive Inorder Traversal
function inorderTraversalRecursive(root) {
    const result = [];
    
    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    return result;
}

// Iterative Inorder Traversal
function inorderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
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
console.log("Recursive Inorder Traversal:", inorderTraversalRecursive(root)); // [4, 2, 5, 1, 3]
console.log("Iterative Inorder Traversal:", inorderTraversalIterative(root)); // [4, 2, 5, 1, 3]

```

### Recursive Inorder Traversal

* #### The recursive approach is straightforward:

* #### Recursively traverse the left subtree.
* #### Visit the root node (add its value to the result).
* #### Recursively traverse the right subtree.
* #### Base case: If the node is null, return.
* #### Time Complexity: O(n), where n is the number of nodes, as we visit each node exactly once.
* #### Space Complexity: O(h), where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), this is O(n). In a balanced tree, it’s O(log n).

### Iterative Inorder Traversal

* #### The iterative approach uses a stack to simulate the recursion:

* #### Start with the root and push all left children onto the stack until you hit a null node.
* #### Pop a node from the stack, process it (add its value to the result).
* #### Move to its right child and push all left children of that right child onto the stack.
* #### Repeat until the stack is empty and there are no more nodes to process. This ensures the left-root-right order is maintained.

* #### Time Complexity: O(n), as we visit each node exactly once.
* #### Space Complexity: O(h), where h is the height of the tree, due to the stack. Worst case (skewed tree): O(n). Balanced tree: O(log n).