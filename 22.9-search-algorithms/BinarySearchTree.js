//22.9 Search Algorithms (p. 4-5)

//To start, let's set up a basic binary tree structure from previous BST lesson (p. 4)
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    
    /*
    For the purposes of this example, this algorithm (depth-first search) will simply traverse the nodes adding them to a values array
    If there is a left-hand branch then you recursively search the nodes there. You then add the value at the current node to the array. 
    And finally, you recursively search the right-hand branch. This is O(n), as each node needs to be visited. (22.8, p. 4)
    */
    dfs(values=[]) { //in-order search
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    /*
    Breadth-first search works across the rows of a tree. So the top row will be handled 1st, then the 2nd row, and so on. 
    The tree is visited level by level. In order to carry out a BFS, you need a "first-in, first-out" (FIFO) queue so you 
    can store all the siblings in the queue and process them in the correct order. When you visit a node you add it to the queue. 
    The nodes are then removed from the queue, and their children are visited, adding more values onto the queue. The runtime 
    for this is O(n) because each node needs to be visited once. Let's take a look at a BFS algorithm: (22.8, p. 5)
    */
    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }

}



/*
in-order traversal/search => left child, parent, right child
pre-order traversal/search => parent, left child, right child
post-order traveral/search => left child, right child, parent

*/