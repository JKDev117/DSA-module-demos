//22.4 Working with arrays
/*
This module simulates a block of memory. The implementation is terrible (see the free function for an example of just how bad it is), but it's perfect as a learning tool.
*/


class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
  
      this.head += size;
      return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
  
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
}
  
module.exports = Memory;


/* Notes

The module has 5 functions:

get(ptr) - returns the value stored at a certain memory address (ptr is shorthand for pointer: variables containing memory addresses are known as pointers)

set(ptr, value) - sets the value stored at a certain memory address

allocate(size) - reserves a contiguous block of memory consisting of size boxes which you can safely modify, returning a pointer to the 1st box or null if the allocation fails

free(ptr) - frees the block of memory reserved using allocate

copy(to, from, size) - copies size boxes of data from the from pointer to the to pointer (for example, copy(10, 0, 3) would copy the values at boxes 0, 1 and 2 to the boxes at 10, 11 and 12 respectively)

*/