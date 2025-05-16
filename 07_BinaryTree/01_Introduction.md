## Introduction to Binary Tree

#### Binary Tree is a non-linear and hierarchical data structure where each node has at most two children referred to as the left child and the right child.  The topmost node in a binary tree is called the root, and the bottom-most nodes are called leaves.

#### Representation of Binary Tree
#### Each node in a Binary Tree has three parts:

* #### Data
* #### Pointer to the left child
* #### Pointer to the right child

### Create/Declare a Node of a Binary Tree

```js
/* Class containing left and right child 
  of current node and data*/

class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = this.right = null;
    }
}
```
### Example for Creating a Binary Tree
### Here’s an example of creating a Binary Tree with four nodes (2, 3, 4, 5)

```js
class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Initialize and allocate memory for tree nodes
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

// Connect binary tree nodes
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;

```

### Terminologies in Binary Tree
* #### Nodes: The fundamental part of a binary tree, where each node contains data and link to two child nodes.
* #### Root: The topmost node in a tree is known as the root node. It has no parent and serves as the starting point for all nodes in the tree.
* #### Parent Node: A node that has one or more child nodes. In a binary tree, each node can have at most two children.
* #### Child Node: A node that is a descendant of another node (its parent).
* #### Leaf Node: A node that does not have any children or both children are null.
* #### Internal Node: A node that has at least one child. This includes all nodes except the leaf nodes.
* #### Depth of a Node: The number of edges from a specific node to the root node. The depth of the root node is zero.
* #### Height of a Binary Tree: The number of nodes from the deepest leaf node to the root node.

### Properties of Binary Tree
* #### The maximum number of nodes at level L of a binary tree is 2L
* #### The maximum number of nodes in a binary tree of height H is 2H – 1
* #### Total number of leaf nodes in a binary tree = total number of nodes with 2 children + 1
* #### In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is Log2(N+1)
* #### A Binary Tree with L leaves has at least | Log2L |+ 1 levels

### Types of Binary Tree
#### Binary Tree can be classified into multiples types based on multiple factors:

#### On the basis of Number of Children
* #### Full Binary Tree
* #### Degenerate Binary Tree
* #### Skewed Binary Trees
#### On the basis of Completion of Levels
* #### Complete Binary Tree
* #### Perfect Binary Tree
* #### Balanced Binary Tree
#### On the basis of Node Values:
* #### Binary Search Tree
* #### AVL Tree
* #### Red Black Tree
* #### B Tree
* #### B+ Tree
* #### Segment Tree


## 1. Traversal in Binary Tree
### Traversal in Binary Tree involves visiting all the nodes of the binary tree. Tree Traversal algorithms can be classified broadly into two categories, DFS and BFS:

* ### Depth-First Search (DFS) algorithms: DFS explores as far down a branch as possible before backtracking. It is implemented using recursion. The main traversal methods in DFS for binary trees are:

* #### Preorder Traversal (current-left-right): Visits the node first, then left subtree, then right subtree.
* #### Inorder Traversal (left-current-right): Visits left subtree, then the node, then the right subtree.
* #### Postorder Traversal (left-right-current): Visits left subtree, then right subtree, then the node.


* ### Breadth-First Search (BFS) algorithms: BFS explores all nodes at the present depth before moving on to nodes at the next depth level. It is typically implemented using a queue. BFS in a binary tree is commonly referred to as Level Order Traversal.


