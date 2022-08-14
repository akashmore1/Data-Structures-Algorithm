# You are given an array of integers in which each subsequent value is not less than pervious value.
# Write a function that takes this array as an input and returns
# a new array with squares of each number sorted in ascending order

def squared_sorted_array(arr):
    solution_arr = []
    start = 0
    end = len(arr) - 1

    while start <= end:
        if arr[start] ** 2 >= arr[end] ** 2:
            solution_arr.append(arr[start] ** 2)
            start += 1
        else:
            solution_arr.append(arr[end] ** 2)
            end -= 1

    solution_arr.reverse()
    return solution_arr


print(squared_sorted_array([-4, -2, 1, 3, 4, 6]))
