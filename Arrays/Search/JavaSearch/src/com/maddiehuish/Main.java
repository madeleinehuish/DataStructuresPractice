package com.maddiehuish;

public class Main {

    private int linearSearch(int[] arr, int value) {
        for(int i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return arr[i];
            }
        }
        return -1;
    }

    private int binarySearch(int[] arr, int value) {
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

    public static void main(String[] args) {
        int tryThisArray[] = {0, 1, 2, 3, 4, 5};
        int tryThisValue = 4;

        Main thisObject = new Main(); //have to create an object to call the function

        int theLinearValue = thisObject.linearSearch(tryThisArray, tryThisValue);
        int theBinaryValue = thisObject.binarySearch(tryThisArray, tryThisValue);
        System.out.println(theLinearValue);
        System.out.println(theBinaryValue);
    }
}
