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
