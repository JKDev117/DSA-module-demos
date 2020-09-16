//22.10 Sorting Algorithms (p. 3)
//merge sort

/*
Merge sort takes a divide and conquer approach to sorting. 
It breaks the array down into continually smaller chunks, 
then merges them back together in the correct order.
*/

function mergeSort(array) { //best, avg., & worst => O(n log n)
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

/*
If the array has 1 or 0 elements, then it is by definition sorted, so you can return the array itself. 
Otherwise, you slice the array into 2 halves and sort each half by recursively calling mergeSort. 
The 2 sorted halves are then merged together in the correct order using the merge function.
*/

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

/*
To merge the 2 lists you just keep choosing the lowest value from the left or right arrays 
that hasn't already been added to the output array. 
When 1 of the arrays is empty, you add all of the remaining values from the other array to it.

Merge sort has a best, average, and worst-case performance of O(nlog(n)). 
This is probably the lower limit for a comparison sort's average case and 
is significantly better than bubble sort's O(n^2).

*/