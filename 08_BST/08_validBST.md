## Given the root of a binary tree, determine if it is a valid binary search tree (BST).

## Approach 1: Brute Force (Check Each Node with Subtree Validation)
The brute force approach involves:

For each node, verify that all nodes in its left subtree are less than its value and all nodes in its right subtree are greater.
Recursively apply this check to every node.
This requires traversing each subtree multiple times to find the min/max values, making it inefficient.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBSTBrute(root) {
    if (!root) return true;

    // Helper to find min and max values in a subtree
    function getMinMax(node) {
        if (!node) return { min: Infinity, max: -Infinity };
        let left = getMinMax(node.left);
        let right = getMinMax(node.right);
        return {
            min: Math.min(node.val, left.min, right.min),
            max: Math.max(node.val, left.max, right.max)
        };
    }

    // Check if node satisfies BST property
    function validate(node) {
        if (!node) return true;
        let left = getMinMax(node.left);
        let right = getMinMax(node.right);
        // All left subtree values must be < node.val
        // All right subtree values must be > node.val
        if (left.max >= node.val || right.min <= node.val) {
            return false;
        }
        return validate(node.left) && validate(node.right);
    }

    return validate(root);
}
```


### Time: O(n^2) in the worst case, as each node’s subtrees are traversed to find min/max values, and there are n nodes.
### Space: O(h) for the recursion stack, where h is the tree height (O(n) in a skewed tree, O(log n) in a balanced tree).


## Approach 2: Optimal (Range-Based Validation)
The optimal approach uses the fact that each node in a BST must lie within a valid range of values:

For each node, maintain a range [min, max] that its value must satisfy.
Initially, the root can have any value (range: [-Infinity, Infinity]).
For a node’s left child, the range is [min, parent_value - 1].
For a node’s right child, the range is [parent_value + 1, max].
Recursively validate each node against its allowed range.
Use a helper function to pass the range down the tree.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
    function validate(node, min, max) {
        if (!node) return true;
        if (node.val <= min || node.val >= max) {
            return false;
        }
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    return validate(root, -Infinity, Infinity);
}

// Test case: [5,1,4,null,null,3,6]
const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root)); // Outputs: false

// Test case: Valid BST [5,3,6,2,4,null,7]
const root2 = new TreeNode(5);
root2.left = new TreeNode(3);
root2.right = new TreeNode(6);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

console.log(isValidBST(root2)); // Outputs: true
```

### Time: O(n), as each node is visited exactly once.
### Space: O(h) for the recursion stack, where h is the tree height (O(n) in a skewed tree, O(log n) in a balanced tree).