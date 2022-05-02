const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = [];
  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.stack.push(element);
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.stack.length === 0) {
      return undefined;
    } else {
      return this.stack.pop();
    }
    
    
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let i = this.stack.length - 1;
    return this.stack[i];
  }
}

module.exports = {
  Stack
};
