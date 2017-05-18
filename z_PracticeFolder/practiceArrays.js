let arr = [1, 2, 3, 4, 5];

const binarySearch = (arr, value) => {
	let lo = 0;
	let hi = arr.length -1;
	while(lo<=hi) {
		let mid = Math.floor(lo + (hi-lo)/2);
		if (arr[mid] === value) {
			return mid;
		} else if (arr[mid] < value) {
			lo = mid + 1;
		} else {
			hi = mid - 1
		}
	}
}

binarySearch(arr, 4);

delete(index) {
     if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    while (index < this.length-1) {
      this._array[index] = this._array[index+1];
      index ++;
    }
    this._array[this.length -1] = undefined;
  }

const swap = (arr, i1, i2) => {
	const temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;
}

const bubbleSort = (arr) => {
	for(let i = arr.length; i > 0; i--) {
		for(let j = 0;j < i -1; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}
	return arr;
}

let newArray = [4, 6, 1, 35, 25, 12, 23];
let newA = bubbleSort(newArray);
console.log(newA);



// const selectionSort = (arr) => {
// 	let max = arr[0];
// 	let newArr = [];
// 	while (arr.length !== 0) {
// 		for(let i = 1; i < arr.length; i++) {
// 			if(arr[max] > arr[i]) {
// 				swap(arr, max, arr[i]);
// 				max = i + 1;
// 			}
// 			newArr.push(arr.pop());
// 		}
// 	}
// 	return newArr;
// }

const find_smallest = (arr) => {
    console.log(arr);
    let smallest = arr[0];
    let smallest_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
				}
		}
    return smallest_index;
}


const selectionSort = (arr) => {
    newArr = []
    while (arr.length !== 0) {
			for (let i =0; i < arr.length-1; i++) {
				if (arr[i] < arr[i+1]) {
					swap(arr, i, i+1);
				}
			}
			let takeThisValue = arr.pop();
			newArr.push(takeThisValue); //or could just do newArr.push(arr.pop()); on one line, take out one before
		}
    return newArr;
}

let a1 = [23, 13, 43, 10, 3, 1, 35, 38, 29, 87, 34];
selectionSort(a1);
