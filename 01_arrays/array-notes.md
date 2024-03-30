## Resources

[Dynamic Arrays](https://www.geeksforgeeks.org/how-dynamic-arrays-work-in-javascript/)

### String Question?

Tuern the string into an Array using split().

### Dynamic Arrays

Dynamic arrays in JavaScript are copied to a new location in memory when they grow beyond their capacity (doubling the size of the array).
Dynamic arrays allocate memory for elements and can dynamically resize:

Memory Allocation: Initially allocates space for elements.
Adding Elements: Doubles capacity if needed, copies elements, and adds the new element.
Array Doubling: Doubles size to reduce frequent resizes, maintaining constant-time adds.
Constant Time: The average time to add is constant, despite occasional resizing.
Shrinking and Efficiency: Can shrink to free memory, with a threshold to avoid unnecessary resizing
