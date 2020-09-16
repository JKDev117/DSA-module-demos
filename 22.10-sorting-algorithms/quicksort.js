//22.10 Sorting Algorithms (p. 4)

/*
Quicksort is another sorting algorithm with O(nlog(n)) best and average-case performance, although it is O(n^2) 
in the worst case. Despite this, quicksort is more commonly used than merge sort, as it is more cache-efficient 
and can easily be performed in place (i.e., without additional memory allocations).
*/

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

/*
Quicksort again uses a divide and conquer approach. 
You partition the array into 2 halves around a pivot value. 
All of the values which are less than the pivot value go to 1 half of the array, 
and all of the values which are greater than the pivot go to the other half of the array. 
You then recursively sort the 2 halves of the array until the halves are of length 0 or 1.

There are different partitioning algorithms. A common in-place algorithm is Lomuto's algorithm.
*/

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};



