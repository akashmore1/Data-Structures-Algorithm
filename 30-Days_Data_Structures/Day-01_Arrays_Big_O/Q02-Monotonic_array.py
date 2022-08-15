# An array is monotonic if it is either monotone increasing or monotone decreasing.
# An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
# Given an integer array nums, return true if the given array is monotonic, or false otherwise.

def findMonotonicArray(arr):
    index = 0
    difference_value = 0
    temp_diff = 0

    # Instead of below loop we can directly compare first and last element of array
    while difference_value == 0 and index < len(arr)-1:
        difference_value = arr[index] - arr[index - 1]
        index += 1

    if difference_value > 0:
        for num in range(0, len(arr)-1):
            temp_diff = arr[num] - arr[num + 1]
            if temp_diff < 0:
                return False
    elif difference_value < 0:
        for num in range(0, len(arr)-1):
            temp_diff = arr[num] - arr[num + 1]
            if temp_diff > 0:
                return False
    else:
        return True

    return True


print(
    findMonotonicArray([11, 11, 9, 4, 3, 3, 3, 1, -1, -1, 3, 3, 3, 5, 5, 5]),
    findMonotonicArray([11, 11, 9, 4, 3, 3, 3, 1, -1]),
    findMonotonicArray([1, 2, 4, 6, 7, 88, 99]),
    findMonotonicArray([4, 4, 4, 4, 4, 4, 4, 4, 4])
)
