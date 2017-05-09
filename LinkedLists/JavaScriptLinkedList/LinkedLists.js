//Linked Lists

//Object Oriented
class LinkedList {
	constructor() {
		this.head = null,
		this.tail = null
	}

	addToHead(node) {
		if(this.head === null && this.tail === null) {
			this.head = node;
			this.tail = node;
		}
		let temp = this.head;
		this.head = node;
		this.head.next = temp;
		temp.prev = this.head;
	}
}

let ll = new LinkedList();

class Node {
	constructor(name, data, prev, next) {  //do I need prev and next in the parameters????
		this.name = name,
		this.data = data,
		this.prev = null,
		this.next = null
	}

}

let node1 = new Node('node1', 100);
let node2 = new Node('node2', 200);
let node3 = new Node('node3', 300);
node1.next = node2;
node2.prev = node1;
node3.prev = node2;
node2.next = node3;

console.log(node1);
console.log(node2);
console.log(node3);
ll.addToHead(node1);
console.log(ll.head);
console.log(ll.tail);


//Functional
function LinkedList(name) {
	this.name = name;
	this.head = null;
	this.tail = null;
}

function Node(name, data) {
	this.name = name,
	this.data = data,
	this.prev = null,
	this.next = null
}

let node1 = new Node('node1', 100);
let node2 = new Node('node2', 200);
let node3 = new Node('node3', 300);
node1.next = node2;
node2.prev = node1;
node3.prev = node2;
node2.next = node3;

console.log(node1);
console.log(node2);
console.log(node3);


//inserting a node into the chain
let node1point5 = new Node('node1.5', 150);

function insertNode(nodeToInsert, insertAfterThisNode, insertBeforeThisNode, linkedList) {
	//there are a few cases which should be checked here... including some of the paramenters being undefined
	if (insertAfterThisNode === null && insertBeforeThisNode === null) {
		return ("This isn't an insertion");
	}
	//adding to head
	if (insertAfterThisNode === null) {
		nodeToInsert.next = insertBeforeThisNode;
		insertBeforeThisNode.prev = nodeToInsert;
		linkedList.head = nodeToInsert;
		return;
	}
	//adding to tail
	if (insertBeforeThisNode === null) {
		nodeToInsert.prev = insertAfterThisNode;
		insertAfterThisNode.next = nodeToInsert;
		linkedList.tail = nodeToInsert;
		return;
	}

	//insertion somewhere in list
	nodeToInsert.next = insertBeforeThisNode;
	insertAfterThisNode.next = nodeToInsert;
	nodeToInsert.prev  = insertAfterThisNode;
	insertBeforeThisNode.prev = nodeToInsert;
}

insertNode(node1point5, node1, node2);

console.log(node1);
console.log(node1point5);
console.log(node2);
console.log(node3);

//print/count the elements in the list
function printAndCountNodes(startingNode) {
	let node = startingNode;
	let count = 0;
	while(node !== null) {
		console.log(node.name, node.data);
		//can do things like arr.push(node.data) to create an array or any number of other things to each element in the list
		count = count + 1;
		node = node.next;
	}
	return count;
}

//search node for value !!this was the interview question I missed at Azuqua
function findNodeWithValue(value, startingNode) {
	let node = startingNode;
	while(node !== null) {
		// console.log(node.data);
		if (value === node.data) {
			console.log('the value of ' + value + ' is found at ' + node.name);
		}
		node = node.next;
	}
}
//remove Node
//reverse list
//merge, map, and filter

//into linked list class add, remove, find, enumerate
