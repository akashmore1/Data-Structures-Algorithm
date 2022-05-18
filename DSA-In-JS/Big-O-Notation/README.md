# Big O Notation

1. When a problem has muliple solution, to find which solution is better, we use Big O notation.
2. It's important to have a precise vocabulary to talk about how our code performs.
3. When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.

### What does a better code means?

1. Faster
2. Less memory intensive
3. More Readable.

### Why not to use timers?

1. We used timers in SumOfNNumbers.js file. But generally we should not use timers.
2. Different machines will record different times
3. The same machine will record different times!
4. For fast algorithms, speed measurements may not be precise enough?

### If not time then what?

1. Let's count the number of simple operations the computer has to perform!
2. Time will always be determined by number of operations. They are directly proportional.

## Time Complexity

## Introducing Big O

1. Big O Notation is a way to formalize fuzzy counting. (Counting number of operations)
2. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
3. We won't care about the details, only the trends.

### Big O defination:

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

1. f(n) could be linear (f(n) = n)
2. f(n) could be quadratic (f(n) = n )
3. f(n) could be constant (f(n) = 1)
4. f(n) could be something entirely different!

### Big O of loop operations:

1. For single loop: O(n)
2. For loop inside loop: O(n^2)

### Simplifying Big O Expressions:

**When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions**
**These rules of thumb are consequences of the definition of big O notation.**

1. Constants Don't Matter.
   1. We can write (n, n+1, 9n+12) all as O(n).
   2. (Ignoring all constants)
   3. O(400) = O(1),
   4. O(13n^2) = O(n^2)
2. Smaller Terms Don't Matter.
   1. O(n^2 + n + 14) = O(n^2)
   2. Remember Big O is calculated for worst case scenarios like very high input. In above case, for higher value **_n_** is negligible compared to **_n^2_**

### Big O shorthands:

1. Analyzing complexity with big O can get complicated.
2. There are several rules of thumb that can help.
3. These rules won't ALWAYS work, but are a helpful starting point.
   1. Arithmetic operations are constant.
   2. Variable assignment is constant.
   3. Accessing elements in an array (by index) or object (by key) is constant.
   4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
4. Some more example:
   ![Examples](<./ExampleFor(O).png>)

### Big O Graphs for different values:

![Graph](<./Big(O)graphs.png>)

## Space Complexity

1. We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
2. So far, we've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?
3. We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
4. Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs. Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

### Rules of thumbs for Space Complexity

1. Most primitives (booleans, numbers, undefined, null) are constant space.
2. Strings require O(n) space (where n is the string length).
3. Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects).
