# Big O Cheat Sheet:

https://www.bigocheatsheet.com/
https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1

- Big Os-
  O(1) Constant- no loops
  <!-- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search) -->
  O(n) Linear- for loops, while loops through n items
  <!-- O(n*log(n)) Log Liniear- usually sorting operations -->
  O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
  nested loops
  <!-- O(2^n) Exponential- recursive algorithms that solves a problem of size N -->
  <!-- O(n!) Factorial- you are adding a loop for every element -->

**Iterating through half a collection is still O(n)
**Two seperate collections O(a + b)

- What can cause time in a function?-
  Operations (+, -, \*, /)
  Comparisons (<, >, ==)
  Looping (for, while)
  Outside Function call (function())

Rule BookRule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b) + for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

- What causes Space complexity?-
  Adding Variables
  Adding Data Structures
  Function Calls
  Allocations
