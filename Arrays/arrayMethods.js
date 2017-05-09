let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let arrayMap = array.map(element => {
	return element * 2;
})

let arrayFilterOutOdds = array.filter(element => {
	return element%2 === 0;
})

let arrayAddItUp = array.reduce((accumulator, current) => {
	return accumulator + current;
}, 0)

let arrayConcatIt = array.concat(array2);

let arrayPrintIt = array.forEach(element => {
	console.log(element);
})

array.includes(5); //true
array2.includes(30); //true

array.indexOf(5); // 4
array2.indexOf(30); // 5
array.indexOf(30); // -1

let arrayJoined = array.join();  //"1,2,3,4,5,6,7,8,9,10"

var myArray = new Array('1', '2');
var y = myArray.push('3'); // myArray is now ["1", "2", "3"]
//y -> 3 (gives the length of the array)

var myArray = new Array('1', '2', '3');
var last = myArray.pop();
//last -> '3' (gives the last element of the array that was popped)

var myArray = new Array('1', '2', '3');
var first = myArray.shift();
// myArray is now ["2", "3"], first is "1"

var myArray = new Array('1', '2', '3');
var z = myArray.unshift('4', '5');
// myArray becomes ["4", "5", "1", "2", "3"] and z becomes 5 (for the length of the array)

//slice(start_index, upto_index var myArray = new Array('a', 'b', 'c', 'd', 'e'); myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]

//splice(index, count_to_remove, addElement1, addElement2, ...)
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
// Array.from turns arguments into an array

function turnMyArgumentsIntoAnArray() {
	let args = Array.from(arguments);
	return args;
}

class argToArray {
	constructor(args){
		 this.args  = Array.from(arguments);
	}
}

// Array.from with its map function turning mapped arguments into array
function translate() {
	return Array.from(arguments, value => value + 1);
}
let numbers = translate(1, 2, 3);
console.log(numbers);
