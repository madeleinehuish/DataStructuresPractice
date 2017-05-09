#linear search

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
        mid = math.floor(lo +(hi - lo)/2)
        if (arr[mid] < value):
            lo = mid + 1
        elif (arr[mid > value]):
            hi = mid - 1
        else:
            return mid

    return -1

linear_value = linear_search(try_this_array, 4)
binary_value = binary_search(try_this_array, 4)

print(linear_value)
print(binary_value)
