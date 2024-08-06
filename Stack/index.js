class Stack {
  constructor() {
    this.stack = []
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    this.stack.pop()
  }

  isEmpty() {
    return this.stack.length === 0
  }

  constian(element) {
    this.stack.includes(element)
  }

  clearAll() {
    this.stack = []
  }

  reverse() {
    this.stack.reverse()
  }

  printStack() {
    let str = ''
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + '\n'
    }
    return str
  }
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)

console.log(myStack.printStack())
