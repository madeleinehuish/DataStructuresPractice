function LinkedList(head) {
	this.head = head;
	this.next = head.next;
}

function Node(data, next) {
	this.data = data;
	this.next = next;
}

function count(list) {
  let len = 0;

  while(list !== null) {
    len += 1;
    list = list.next;
  }

  return len;
}

let node3 = new Node(300, null);
let node2 = new Node(200, node3);
let node1 = new Node(100, node2);

console.log(node1);
console.log(node2);
console.log(node3);

let MaddieLinkedList = new LinkedList(node1);

count(MaddieLinkedList); //gives 3
