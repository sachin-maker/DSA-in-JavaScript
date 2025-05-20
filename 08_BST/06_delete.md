## Delete a Node in Binary Search Tree

### Deletion Process:
* ### Search for the node with the given key.
* ### If found, delete it while ensuring the BST property is preserved.

### Deletion in BST
* ### Deleting a node in a BST involves three cases:

* ### Node is a leaf: Simply remove it.
* ### Node has one child: Replace the node with its child.
* ### Node has two children: Replace the node with its successor (smallest value in the right subtree) or predecessor (largest value in the left subtree), then delete the successor/predecessor.


### The optimal approach directly deletes the node while maintaining the BST structure:

* ### Search for the node with the given key using BST properties.
* ### Handle the three deletion cases:
* ### Leaf node: Set the parent’s pointer to null.
* ### One child: Bypass the node by linking the parent to the child.
* ### Two children: Find the successor (smallest node in the right subtree), replace the node’s value with the successor’s value, and delete the successor.
* ### Return the (possibly updated) root.
* ### The optimal approach is more efficient as it modifies only the necessary parts of the tree.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root, key) {
    if (!root) {
        return null;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left && !root.right) {
            return null;
        }
        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        }
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
}

// Create BST for testing: [5,3,6,2,4,null,7]
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

// Delete key = 3
const newRoot = deleteNode(root, 3);

// Function to print BST in-order for verification
function printInOrder(node) {
    if (!node) return;
    printInOrder(node.left);
    console.log(node.val);
    printInOrder(node.right);
}

printInOrder(newRoot); // Outputs: 2, 4, 5, 6, 7
```

### Time: O(h) where h is the height of the tree. In a balanced BST, h = O(log n); in a skewed tree, h = O(n).
### Space: O(h) for the recursion stack.