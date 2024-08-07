class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(data) {
    this.queue.push(data)
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }
    return this.queue.shift()
  }

  isEmpty() {
    return this.queue.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }
    return this.queue[0]
  }

  printqueue() {
    let str = ''
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + '\n'
    }
    return str
  }
}

let myQueue = new Queue()

myQueue.enqueue('Apple')
myQueue.enqueue('Banana')
myQueue.enqueue('Cherry')
myQueue.dequeue()
console.log(myQueue.printqueue())
