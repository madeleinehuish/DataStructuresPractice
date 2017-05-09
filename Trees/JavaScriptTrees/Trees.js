//my binary tree structure
let d8 = { data:'d8', left: null, right: null };
let d9 = { data:'d9', left: null, right: null };
let d10 = { data:'d10', left: null, right: null };
let d11 = { data:'d11', left: null, right: null };
let d12 = { data:'d12', left: null, right: null };
let d13 = { data:'d13', left: null, right: null };
let d14 = { data:'d14', left: null, right: null };
let d15 = { data:'d15', left: null, right: null };
let d4 = { data:'d4', left: d8, right: d9 };
let d5 = { data:'d5', left: d10, right: d11 };
let d6 = { data:'d6', left: d12, right: d13 };
let d7 = { data:'d7', left: d14, right: d15 };
let d2 = { data:'d2', left: d4, right: d5 };
let d3 = { data:'d3', left: d6, right: d7 };
let d1 = { data:'d1', left: d2, right: d3 };

//print out data from each tree node
function printOutNode(node) {
	if (node === null) {
		return;
	}
	console.log(node.data);
	printOutNode(node.left);
	printOutNode(node.right);
}

//count number of nodes decending from tree node, including the node started at
function binTreeCount(tree) {
  if (tree === null) {
    return 0;
  } else {
    return 1 + binTreeCount(tree.left) + binTreeCount(tree.right);
  }
}




// work with Tree Classes
class Tree {

	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}

	print(){
		console.log( this.data );
		if (this.left) {
			this.left.print();
		}
		if (this.right) {
			this.right.print();
		}
	}

}




//build tree
let t4 = new Tree('t4', null, null);
let t5 = new Tree('t5', null, null);
let t6 = new Tree('t6', null, null);
let t7 = new Tree('t7', null, null);
let t2 = new Tree('t2', t4, t5);
let t3 = new Tree('t3', t6, t7);
let t1 = new Tree('t1', t2, t3);

t1.print();
