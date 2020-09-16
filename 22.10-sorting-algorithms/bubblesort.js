//22.10 Sorting Algorithms (p. 2)
//bubble sort

/*
In bubble sort, you keep looping through an array to find out whether adjacent values need swapping, 
and you keep going until there are no more values that need swapping
*/

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) { //best => O(n); avg./worst => O(n^2)
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};


/*
The swap function simply swaps the values at 2 indices in an array. 
The bubbleSort function looks through adjacent pairs of values in the array. 
If the values are in the wrong order then it swaps them around and increases the swaps counter.

If the number of swaps was greater than 0 then the list definitely isn't in the correct order yet, 
so you need to call bubbleSort again to keep sorting. Otherwise, you have a sorted array which you can return.

The best case is that the nodes are already in order, so it simply needs to check each pair 1 time; 
an O(n) operation. In the worst case, each value needs swapping with each other value, so that's O(n^2). 
And this is the same as the average case, which is also O(n^2).

*/