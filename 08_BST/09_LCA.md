## Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

### According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
```js
”Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

* ### Start at the root and compare its value with p.val and q.val.
* ### If both p.val and q.val are less than the root’s value, the LCA must be in the left subtree.
* ### If both p.val and q.val are greater than the root’s value, the LCA must be in the right subtree.
* ### If one value is less than the root’s value and the other is greater (or equal to the root’s value), the root is the LCA.
* ### Recursively or iteratively traverse the tree based on these conditions until the LCA is found.

```js
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, q) {
    let current = root;
    while (current) {
        if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } else if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } else {
            return  current;
        }
    }
    return null;
}

// Test case: [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = new TreeNode(2); // Node with value 2
const q = new TreeNode(8); // Node with value 8

const lca = lowestCommonAncestor(root, p, q);
console.log(lca.val); // Outputs: 6
```

### Time: O(h), where h is the height of the tree. In a balanced BST, h = O(log n); in a skewed tree, h = O(n).
### Space: O(1) for the iterative version, O(h) for the recursive version due to the recursion stack.