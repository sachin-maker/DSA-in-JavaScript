## PostOrder Traversal

```js

// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Recursive Postorder Traversal
function postorderTraversalRecursive(root) {
    const result = [];
    
    function postorder(node) {
        if (node === null) return;
        postorder(node.left);
        postorder(node.right);
        result.push(node.val);
    }
    
    postorder(root);
    return result;
}

// Iterative Postorder Traversal
function postorderTraversalIterative(root) {
    if (root === null) return [];
    
    const result = [];
    const stack = [];
    let current = root;
    let lastVisited = null;
    
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        const peekNode = stack[stack.length - 1];
        
        if (peekNode.right !== null && lastVisited !== peekNode.right) {
            current = peekNode.right;
        } else {
            result.push(peekNode.val);
            lastVisited = peekNode;
            stack.pop();
        }
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
console.log("Recursive Postorder Traversal:", postorderTraversalRecursive(root)); // [4, 5, 2, 3, 1]
console.log("Iterative Postorder Traversal:", postorderTraversalIterative(root)); // [4, 5, 2, 3, 1]

```

### Iterative Postorder Traversal

* #### The iterative approach for postorder traversal is more complex than preorder or inorder because we need to process the left subtree, then the right subtree, and finally the root. We can use a stack and a modified approach:

* #### Use a stack to store nodes and track whether their subtrees have been processed.
* #### Push nodes onto the stack and traverse left as far as possible.
* #### For each node, check if its right subtree needs processing or if it can be visited.
* #### Use an additional pointer or flag to avoid visiting a node prematurely.
* #### One common method uses two stacks for simplicity:

* #### First stack to process nodes in a modified preorder (root, right, left).
* #### Second stack (or array) to reverse the order to get postorder (left, right, root).


## Post-order Traversal of Binary Tree using 1 stack

### Using a single stack for postorder traversal is tricky because we need to ensure the left subtree, right subtree, and root are processed in the correct order (left, right, root). The key is to track whether a node's right subtree has been processed to determine when to visit the root. Here's the 

* ### Use a stack to store nodes and a lastVisited pointer to track the last processed node.
* ### Start by pushing nodes onto the stack while traversing left as far as possible.
* ### For each node at the top of the stack:
* ### If it has a right child that hasn’t been visited, traverse the right subtree.
* ### If the right child is null or has been visited, process the node (add to result) and pop it.
* ### Repeat until the stack is empty and no more nodes are left to process.

```js
// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function postorderTraversalIterativeOneStack(root) {
    if (root === null) return [];
    
    const result = [];
    const stack = [];
    let current = root;
    let lastVisited = null;
    
    while (current !== null || stack.length > 0) {
        // Push all left children onto the stack
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Peek at the top node
        const peekNode = stack[stack.length - 1];
        
        // If right child exists and hasn't been visited, process it
        if (peekNode.right !== null && lastVisited !== peekNode.right) {
            current = peekNode.right;
        } else {
            // No right child or right child visited, process current node
            result.push(peekNode.val);
            lastVisited = peekNode;
            stack.pop();
        }
    }
    
    return result;
}
```