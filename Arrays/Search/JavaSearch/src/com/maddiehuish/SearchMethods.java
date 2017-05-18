package com.maddiehuish;

public class SearchMethods {

    public int linearSearch(int[] arr, int value) {
        for(int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return arr[i];
            }
        }
        return -1;
    }

    public int binarySearch(int[] arr, int value) {
        int low = 0;
        int high = arr.length -1;
        int mid;

        while (low <= high) {
            mid = (low + high) / 2;
            if (arr[mid] < value) {
                low = mid + 1;
            } else if (arr[mid] > value) {
                high = mid -1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    public int binarySearchRecursive(int[] arr, int value, int low, int high) {
        if (low > high) return -1; // Error

        int mid = (low + high) / 2;
        if (arr[mid] < value) {
            return binarySearchRecursive(arr, value, mid + 1, high);
        } else if (arr[mid] > value) {
            return binarySearchRecursive(arr, value, low, mid -1  );
        } else {
            return mid;
        }
    }

}
