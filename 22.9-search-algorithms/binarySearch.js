//22.9 Search Algorithms (p. 3)

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};


/*
The best case is that the item you are looking for is in the middle of the array; 
that would give you an O(1) time complexity. With each iteration, you can cut 
the area you have to search in half; this means that the worst and average-case 
running times are both O(log(n)).
*/