class Stack {
  constructor() {
    this._arr = [];
  }

  push(item) {
    this._arr.push(item);
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  pop() {
    return this._arr.pop();
  }

  length() {
    return this._arr.length;
  }
}

module.exports = Stack;

//example
// let skyrimFollowers = new Stack();
// skyrimFollowers.push('Brelina');
// skyrimFollowers.push('Lydia');
// let peekIt = skyrimFollowers.peek();
// console.log(peekIt);
// skyrimFollowers.push('Uthgerd');
// peekIt = skyrimFollowers.peek();
// console.log(peekIt);
// skyrimFollowers.push('Meeko');
// peekIt = skyrimFollowers.peek();
// console.log(peekIt);
// console.log(skyrimFollowers);
// skyrimFollowers.pop();
// peekIt = skyrimFollowers.peek();
// console.log(peekIt);
// console.log(skyrimFollowers);

//yields
// Lydia
// Uthgerd
// Meeko
// { _arr: [ 'Brelina', 'Lydia', 'Uthgerd', 'Meeko' ] }
// Uthgerd
// { _arr: [ 'Brelina', 'Lydia', 'Uthgerd' ] }
