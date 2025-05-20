## Insert a given Node in Binary Search Tree

* ### If the root is null, create and return a new TreeNode with the given value.
* ### If val is less than the root’s value, recursively insert into the left subtree.
* ### If val is greater, recursively insert into the right subtree.
* ### After insertion, return the root to maintain the tree structure.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}

// Create BST for testing: [4,2,7,1,3]
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Insert val = 5
const newRoot = insertIntoBST(root, 5);

// Function to print BST in-order for verification
function printInOrder(node) {
    if (!node) return;
    printInOrder(node.left);
    console.log(node.val);
    printInOrder(node.right);
}

printInOrder(newRoot); // Outputs: 1, 2, 3, 4, 5, 7
```

### Time: O(h) where h is the height of the tree. In a balanced BST, h = O(log n); in a skewed tree, h = O(n).
### Space: O(h) for the recursion stack, where h is the tree height.