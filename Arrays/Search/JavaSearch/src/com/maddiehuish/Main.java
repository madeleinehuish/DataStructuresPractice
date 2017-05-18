package com.maddiehuish;


public class Main {

    public static void main(String[] args) {
        int tryThisArray[] = {0, 1, 2, 3, 4, 5};
        int tryThisValue = 4;
        int lenArr = tryThisArray.length;

        SearchMethods thisObject = new SearchMethods(); //have to create an object to call the function

        int theLinearValue = thisObject.linearSearch(tryThisArray, tryThisValue);
        int theBinaryValue = thisObject.binarySearch(tryThisArray, tryThisValue);
        int theRecursiveBinaryValue = thisObject.binarySearchRecursive(tryThisArray, tryThisValue, 0, lenArr);

        System.out.println(theLinearValue);
        System.out.println(theBinaryValue);
        System.out.println(theRecursiveBinaryValue);
    }
}
