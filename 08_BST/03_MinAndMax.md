## To find the minimum and maximum values in a Binary Search Tree (BST)

### ✅ Minimum value in BST:
* ### Always found in the leftmost node of the tree.

* ### Keep moving to the left child until you reach a node with no left child.

### ✅ Maximum value in BST:
* ### Always found in the rightmost node of the tree.

* ### Keep moving to the right child until you reach a node with no right child.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findMin(node) {
  if (!node) return null;
  while (node.left !== null) {
    node = node.left;
  }
  return node.data;
}

function findMax(node) {
  if (!node) return null;
  while (node.right !== null) {
    node = node.right;
  }
  return node.data;
}

// Example BST
const root = new Node(20);
root.left = new Node(10);
root.right = new Node(30);
root.left.left = new Node(5);
root.right.right = new Node(40);

console.log("Min:", findMin(root)); // Output: 5
console.log("Max:", findMax(root)); // Output: 40

```
### ✅ Time Complexity (TC):
* ### Best / Average Case: O(log n)
* ### (When the BST is balanced — height is log n)

* ### Worst Case: O(n)
* ### (When the BST is skewed — like a linked list)

### ✅ Space Complexity (SC):
* ### Iterative Approach: O(1)
* ### (No extra space, just a single pointer moving down)

* ### Recursive Approach: O(h)
* ### (h = height of the tree; stack space used by recursive calls)

