//LinkedList constructor function
function LinkedList() {
  this.head = null;
  this.tail = null;
}

//Node constructor function
function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

//Add to Head
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, null, this.head);
  //checking if there are items in the linked list
  if (this.head) { this.head.prev = newNode }
  //the case where there are no items in linked list
  else this.tail = newNode;
  this.head = newNode;
}

//create new LinkedList example
let ll = new LinkedList();

console.log(ll);

ll.addToHead(300);
ll.addToHead(200);
ll.addToHead(100);

console.log(ll);
