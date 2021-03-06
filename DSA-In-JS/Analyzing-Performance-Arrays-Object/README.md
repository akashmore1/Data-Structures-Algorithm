# Analyzing Performance of Arrays and Objects

### Now that we've covered BIG O...

Let's spend a couple minutes analyzing the things we do all the time in JS: working with Arrays, Objects, and built-in methods.

## Objects

1. Example:
   let instructor = {
   firstName: "Kelly",
   isInstructor: true,
   favoriteNumbers: [1,2,3,4]
   }
2. For object Big O is
   Insertion - O(1)
   Removal - O(1)
   Searching - O(N)
   Access - O(1)
3. When you don't need any ordering, objects are an excellent choice!
4. We can see, Big O of searching is O(n), searching doesn't mean finding key. e.g. accessing "instructure.firstName" has O(n).
5. Searching means finding out if object has a key which has value true or "kelly". This has complexity O(n).
6. If we are using Object.keys() method, then it has O(n).
7. e.g. Object.keys(instructor) will return [firstName, isInstructure, favouriteNumbers]. In case of this method, object has to see all keys, and as no. of keys increases the no. of operations for Object.keys() increases, so f(Object.keys()) = O(n).
8. Object.entries() method have O(n) as well.
9. Object.entries(instructor) will return [['firstName', 'kelly'],['isInstructor', true],['favouriteNumbers', [1, 2, 3, 4]]]
10. hasOwnProperty() has O(1). e.g. instructor.hasOwnProperty('firstName') will return true.
11. Big O og object methods:
    ![object-methods](<./Big(O)-Object-methods.png>)

## Arrays

1. When we need order, we use arrays.
2. When we need order we can use singly linked list and doubly linked list, but we will see that in future.
3. Accessing an element in array has O(1).
4. Searching an element in an array has O(n).
5. Inserting or removing an element at the end of array has O(1).
6. But inserting or removing an element at the beginning of array is costlier. As we will need to index every element in this case.
7. Inserting or removing an element at the beginning of an array, has O(n).

### Big O of array operations

![O(array operations)](<./Big(O)-array-operations.png>)
