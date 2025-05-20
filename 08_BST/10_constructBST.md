## Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

### It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

### A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

### A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

```js
Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
```


### Approach 2: Optimal (Range-Based Construction)

* ### In preorder traversal, the first element is the root.
* ### For a BST, all subsequent elements in the left subtree must be less than the root, and all elements in the right subtree must be greater.
* ### Use a range [min, max] to determine which elements belong to the left or right subtree.
* ### Recursively:
* ### Process the current element as the root.
* ### Find the split point where elements transition from the left subtree (values < root.val) to the right subtree (values > root.val).
* ### Recursively construct the left and right subtrees with updated ranges.
* ### Use an index to track the current position in the preorder array.
* ### This approach is more efficient as it constructs the tree in a single pass through the array.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function bstFromPreorder(preorder) {
    let index = 0;

    function construct(min, max) {
        if (index >= preorder.length || preorder[index] <= min || preorder[index] >= max) {
            return null;
        }
        const root = new TreeNode(preorder[index]);
        index++;
        root.left = construct(min, root.val);
        root.right = construct(root.val, max);
        return root;
    }

    return construct(-Infinity, Infinity);
}

// Test case: preorder = [8,5,1,7,10,12]
const preorder = [8, 5, 1, 7, 10, 12];
const root = bstFromPreorder(preorder);

// Print tree in-order to verify BST
function printInOrder(node) {
    if (!node) return;
    printInOrder(node.left);
    console.log(node.val);
    printInOrder(node.right);
}

printInOrder(root); // Outputs: 1, 5, 7, 8, 10, 12
```

### Time: O(n), as each element in the preorder array is processed exactly once.
###  Space: O(h) for the recursion stack, where h is the tree height (O(n) in a skewed tree, O(log n) in a balanced tree).