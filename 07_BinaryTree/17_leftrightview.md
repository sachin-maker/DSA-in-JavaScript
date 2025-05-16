## Right/Left view of binary tree

### Given a Binary Tree, return its right and left views.

### The Right View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the right side. The Left View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the left side.

## Brute Force Approach


* ### Step 1: Initialise an empty queue data structure to store the nodes during traversal. Create a 2D array or a vector of a vector to store the level order traversal. If the tree is empty, return this empty 2D vector.
* ### Step 2:Enqueue the root node ie. Add the root node of the binary tree to the queue.

* ### Step 3:Iterate until the queue is empty:

* ### Get the current size of the queue. This size indicates the number of nodes at the current level.
* ### Create a vector ‘level’ to store the nodes at the current level.
* ### Iterate through ‘size’ number of nodes at the current level:
* ### Pop the front node from the queue.
* ### Store the node’s value in the level vector.
* ### Enqueue the left and right child nodes of the current node (if they exist) into the queue.
* ### After processing all the nodes at the current level, add the ‘level’ vector to the ‘ans’ 2D vector, representing the current level.

* ### Step 4: Once the traversal loop completes, the 'ans' 2D vector now contains the level order traversal of the binary tree. To obtain the left view and right view we use each level's vector in the 'ans' vector

* ### Left View: For each level, extract the first element from the vector and store it in a separate array. Return this array as the final left view of the binary tree.

* ### Right View: For each level, extract the last element from the vector and store it in a separate array. Return this array as the final right view of the binary tree.

```js                         
// Node class for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to return the
    // Right view of the binary tree
    rightsideView(root) {
        // Array to store the result
        const res = [];

        // Call the recursive function
        // to populate the right-side view
        this.recursionRight(root, 0, res);

        return res;
    }

    // Function to return the
    // Left view of the binary tree
    leftsideView(root) {
        // Array to store the result
        const res = [];

        // Call the recursive function
        // to populate the left-side view
        this.recursionLeft(root, 0, res);

        return res;
    }

    // Recursive function to traverse the
    // binary tree and populate the left-side view
    recursionLeft(root, level, res) {
        // Check if the current node is null
        if (!root) {
            return;
        }

        // Check if the size of the result array
        // is equal to the current level
        if (res.length === level) {
            // If equal, add the value of the
            // current node to the result array
            res.push(root.data);
        }

        // Recursively call the function for the
        // left child with an increased level
        this.recursionLeft(root.left, level + 1, res);

        // Recursively call the function for the
        // right child with an increased level
        this.recursionLeft(root.right, level + 1, res);
    }

    // Recursive function to traverse the
    // binary tree and populate the right-side view
    recursionRight(root, level, res) {
        // Check if the current node is null
        if (!root) {
            return;
        }

        // Check if the size of the result array
        // is equal to the current level
        if (res.length === level) {
            // If equal, add the value of the
            // current node to the result array
            res.push(root.data);

            // Recursively call the function for the
            // right child with an increased level
            this.recursionRight(root.right, level + 1, res);

            // Recursively call the function for the
            // left child with an increased level
            this.recursionRight(root.left, level + 1, res);
        }
    }
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

const solution = new Solution();

// Get the Right View traversal
const rightView = solution.rightsideView(root);

// Print the result for Right View
console.log("Right View Traversal:", rightView.join(" "));

// Get the Left View traversal
const leftView = solution.leftsideView(root);

// Print the result for Left View
console.log("Left View Traversal:", leftView.join(" "));
```

* ### Time Complexity: O(N) where N is the number of nodes in the binary tree. Each node of the binary tree is enqueued and dequeued exactly once, hence all nodes need to be processed and visited. Processing each node takes constant time operations which contributes to the overall linear time complexity.

* ### Space Complexity : O(N) where N is the number of nodes in the binary tree. In the worst case, the queue has to hold all the nodes of the last level of the binary tree, the last level could at most hold N/2 nodes hence the space complexity of the queue is proportional to O(N). The resultant vector answer also stores the values of the nodes level by level and hence contains all the nodes of the tree contributing to O(N) space as well.                                                 

## Optimal Approch

### To get the left and right view of a Binary Tree, we perform a depth-first traversal of the Binary Tree while keeping track of the level of each node. For both the left and right view, we’ll ensure that only the first node encountered at each level is added to the result vector.

### Algorithm for Left View

* ### Step 1: Initialise an empty vector `res` to store the left view nodes.

* ### Step 2: Implement a recursive depth-first traversal of the binary tree.

* ### Base Case: Check if the current node is null, if true, return the function as we have reached the end of that particular vertical level.

* ### Recursive Function: The recursive function takes in arguments the current node of the Binary Tree, its current level and the result vector.

* ### We check if the size of the result vector is equal to the current level.
* ### If true, it means that we have not yet encountered any node at this level in the result vector. Add the value of the current node to the result vector.
* ### Recursively call the function for the current nodes left then right child with an increased level ie. level + 1.
* ### We call the left child first as we want to traverse the left most nodes. In cases where there is no left child, the recursion function backtracks and explores the right child.
* ### Step 3: The recursion continues until it reaches the base case. Return the result vector at the end.

### Algorithm for Right View

* ### Step 1: Initialise an empty vector `res` to store the left view nodes.

* ### Step 2: Implement a recursive depth-first traversal of the binary tree.

* ### Base Case: Check if the current node is null, if true, return the function as we have reached the end of that particular vertical level.

* ### Recursive Function: The recursive function takes in arguments the current node of the Binary Tree, its current level and the result vector.

* ### We check if the size of the result vector is equal to the current level.
* ### If true, it means that we have not yet encountered any node at this level in the result vector. Add the value of the current node to the result vector.
* ### Recursively call the function for the current nodes right then left child with an increased level ie. level + 1.
* ### We call the right child first as we want to traverse the right most nodes. In cases where there is no right child, the recursion function backtracks and explores the left child.
* ### Step 3: The recursion continues until it reaches the base case. Return the result vector at the end.

```js                         
// Node class for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to return the
    // Right view of the binary tree
    rightsideView(root) {
        // Array to store the result
        const res = [];

        // Call the recursive function
        // to populate the right-side view
        this.recursionRight(root, 0, res);

        return res;
    }

    // Function to return the
    // Left view of the binary tree
    leftsideView(root) {
        // Array to store the result
        const res = [];

        // Call the recursive function
        // to populate the left-side view
        this.recursionLeft(root, 0, res);

        return res;
    }

    // Recursive function to traverse the
    // binary tree and populate the left-side view
    recursionLeft(root, level, res) {
        // Check if the current node is null
        if (!root) {
            return;
        }

        // Check if the size of the result array
        // is equal to the current level
        if (res.length === level) {
            // If equal, add the value of the
            // current node to the result array
            res.push(root.data);
        }

        // Recursively call the function for the
        // left child with an increased level
        this.recursionLeft(root.left, level + 1, res);

        // Recursively call the function for the
        // right child with an increased level
        this.recursionLeft(root.right, level + 1, res);
    }

    // Recursive function to traverse the
    // binary tree and populate the right-side view
    recursionRight(root, level, res) {
        // Check if the current node is null
        if (!root) {
            return;
        }

        // Check if the size of the result array
        // is equal to the current level
        if (res.length === level) {
            // If equal, add the value of the
            // current node to the result array
            res.push(root.data);

            // Recursively call the function for the
            // right child with an increased level
            this.recursionRight(root.right, level + 1, res);

            // Recursively call the function for the
            // left child with an increased level
            this.recursionRight(root.left, level + 1, res);
        }
    }
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

const solution = new Solution();

// Get the Right View traversal
const rightView = solution.rightsideView(root);

// Print the result for Right View
console.log("Right View Traversal:", rightView.join(" "));

// Get the Left View traversal
const leftView = solution.leftsideView(root);

// Print the result for Left View
console.log("Left View Traversal:", leftView.join(" "));                  
```

### Time Complexity: O(log2N) where N is the number of nodes in the Binary Tree. This complexity arises as we travel along the height of the Binary Tree. For a balanced binary tree, the height is log2N but in the worst case when the tree is skewed, the complexity becomes O(N).

### Space Complexity : O(log2N) where N is the number of nodes in the Binary Tree. This complexity arises because we store the leftmost and rightmost nodes in an additional vector. The size of this result vector is proportional to the height of the Binary Tree which will be log2N when the tree is balanced and O(N) in the worst case of a skewed tree.

* ### O(H): Recursive Stack Space is used to calculate the height of the tree at each node which is proportional to the height of the tree.
* ### The recursive nature of the getHeight function, which incurs space on the call stack for each recursive call until it reaches the leaf nodes or the height of the tree.                       