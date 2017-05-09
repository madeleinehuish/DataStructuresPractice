'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

const binarySearch = function(array, value) {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (array[mid] === value) {
      return mid
    } else if (array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}

linearSearch([1, 2, 3, 4, 5], 4);
binarySearch([1, 6, 35, 145, 235, 1234, 2357, 5478], 2357);


module.exports = { linearSearch, binarySearch };
