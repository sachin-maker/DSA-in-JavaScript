## Zig Zag Traversal Of Binary Tree

### Given a Binary Tree, print the zigzag traversal of the Binary Tree. Zigzag traversal of a binary tree is a way of visiting the nodes of the tree in a zigzag pattern, alternating between left-to-right and right-to-left at each level.

### Zigzag traversal is a modification of the traditional level order traversal in a binary tree. Level Order Traversal explores does at each level from left or right but zigzag traversal adds a twist by alternating the direction of exploration. At odd levels, we proceed from left to right but for even levels the order is reversed, from right to left. This is achieved by introducing a `leftToRight` flag which controls the order in which nodes are processed at each level. When `leftToRight` is true, nodes are inserted into the level vector from left to right and when its false, nodes are inserted right to left.

### Algorithm:

* ### Step 1: Initialise an empty queue data structure to store the nodes during traversal. Create a 2D array or a vector of a vector to store the level order traversal. If the tree is empty, return this empty 2D vector.

* ### Step 2: Create a `leftToRight` flag to keep track of the direction of traversal. When `leftToRight` is true, nodes are inserted into the level vector from left to right and when its false, nodes are inserted right to left.

* ### Step 3: Enqueue the root node ie. Add the root node of the binary tree to the queue.

* ### Step 4: Iterate until the queue is empty:

* ### Get the current size of the queue. This size indicates the number of nodes at the current level.
* ### Create a vector ‘level’ to store the nodes at the current level.
* ### Step 5: Iterate through ‘size’ number of nodes at the current level:

* ### Pop the front node from the queue.
* ### Store the node’s value in the level vector. Determine the index to insert the node’s value based on the traversal direction ‘leftToRight’.
* ### If ‘leftToRight’ is true, the index is set to ‘i’ which means the node’s value will be inserted form left to right. If ‘rightToLeft’ is false, the index is set to size - 1 - i, meaning the node’s value will be inserted from right to left.
* ### Step 6: Enqueue the left and right child nodes of the current node (if they exist) into the queue.

* ### Step 7: After processing all the nodes at the current level, add the ‘level’ vector to the ‘ans’ 2D vector, representing the current level. Reverse the direction of traversal for the next level by updating the ‘leftToRight’ flag to its opposite value. This toggling ensures that the nodes at the next level will be processed in the opposite direction, alternating between left-to-right and right-to-left.

* ### Step 8: Once the traversal loop completes ie. all levels have been processed, return the ‘ans’ 2D vector containing the level-order traversal.

```js
                            
// Node structure for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to perform zigzag level
    // order traversal of a binary tree
    ZigZagLevelOrder(root) {
        // Array to store the
        // result of zigzag traversal
        const result = [];

        // Check if the root is null,
        // return an empty result
        if (!root) {
            return result;
        }

        // Queue to perform
        // level order traversal
        const nodesQueue = [];
        nodesQueue.push(root);

        // Flag to determine the direction of
        // traversal (left to right or right to left)
        let leftToRight = true;

        // Continue traversal until
        // the queue is empty
        while (nodesQueue.length > 0) {
            // Get the number of nodes
            // at the current level
            const size = nodesQueue.length;

            // Array to store the values
            // of nodes at the current level
            const row = Array(size);

            // Traverse nodes at 
            // the current level
            for (let i = 0; i < size; i++) {
                // Get the front node
                // from the queue
                const node = nodesQueue.shift();

                // Determine the index to insert the node's
                // value based on the traversal direction
                const index = leftToRight ? i : (size - 1 - i);

                // Insert the node's value at
                // the determined index
                row[index] = node.data;

                // Enqueue the left and right
                // children if they exist
                if (node.left) {
                    nodesQueue.push(node.left);
                }
                if (node.right) {
                    nodesQueue.push(node.right);
                }
            }

            // Switch the traversal
            // direction for the next level
            leftToRight = !leftToRight;

            // Add the current level's
            // values to the result array
            result.push(row);
        }

        // Return the final result of
        // zigzag level order traversal
        return result;
    }
}

// Helper function to print the result
function printResult(result) {
    for (const row of result) {
        for (const val of row) {
            process.stdout.write(val + " ");
        }
        console.log();
    }
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const solution = new Solution();

// Get the zigzag level order traversal
const result = solution.ZigZagLevelOrder(root);

// Print the result
printResult(result);

                            
```
### Time Complexity: O(N) where N is the number of nodes in the binary tree. Each node of the binary tree is enqueued and dequeued exactly once, hence all nodes need to be processed and visited. Processing each node takes constant time operations which contributes to the overall linear time complexity.

### Space Complexity: O(N) where N is the number of nodes in the binary tree. In the worst case, the queue has to hold all the nodes of the last level of the binary tree, the last level could at most hold N/2 nodes hence the space complexity of the queue is proportional to O(N). The resultant vector answer also stores the values of the nodes level by level and hence contains all the nodes of the tree contributing to O(N) space as well.
