# linear search
try_this_array = [1, 2, 3, 4, 5]

def linear_search(arr, value):
    for element in arr:
        if arr[element] == value:
            return arr[element]
    return -1

# binary search
def binary_search(arr, value):
    lo = 0
    hi = len(arr)-1

    while lo <= hi:
        mid = (lo + hi) // 2
        if value < arr[mid]:
            hi = mid -1
        elif value > arr[mid]:
            lo = mid + 1
        else:
            return arr[mid]

    return -1


# def binary_recursive_search(arr, value):
#     if len(arr) == 0:
#         return False
#     else:
#         mid = len(arr)//2
#         if arr[mid] == value:
#             return True
#         else:
#             if value < arr[mid]:
#                 return binary_search(arr[:mid], value)
#             else:
#                 return binary_search(arr[mid+1:], value)

linear_value = linear_search(try_this_array, 4)
binary_value = binary_search(try_this_array, 4)
# binary_recursive_value = binary_recursive_search(try_this_array, 4)

print(linear_value)
print(binary_value)
# print(binary_recursive_value)
