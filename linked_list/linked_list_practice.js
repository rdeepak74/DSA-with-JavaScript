class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
}

LinkedList.prototype.insertBeginning = function (data) {
  const newNode = new Node(data)

  this.head = newNode
}

LinkedList.prototype.inserAtEnd = function (data) {
  const newNode = new Node(data)
  if (!this.head) {
    return (this.head = newNode)
  }

  let last = this.head
  while (last.next) {
    last = last.next
  }
  last.next = newNode
}

LinkedList.prototype.insertAtgivenNode = function (data, prevNode) {
  if (!prevNode) {
    console.log('Prevnode cannot be null')
    return
  }

  const newNode = new Node(data, prevNode.next)
  prevNode.next = newNode
}

LinkedList.prototype.deletAtfirstNode = function () {
  if (!this.head) {
    return
  }

  this.head = this.head.next
}

LinkedList.prototype.deletelastLinkedlistNode = function () {
  if (!this.head) {
    return
  }

  if (!this.head.next) {
    this.head = null
  }

  let secondlast = this.head

  while (secondlast.next.next) {
    secondlast = secondlast.next
  }
  secondlast.next = null
}

LinkedList.prototype.deletegivenkey = function (key) {
  if (!this.head) {
    return
  }

  if (this.head.data === key) {
    this.head = this.head.next
  }

  let currentNode = this.head

  while (currentNode) {
    if (currentNode.next.data === key) {
      currentNode = currentNode.next.next
      return
    }
    currentNode = currentNode.next
  }

  console.log('key is not present')
}

LinkedList.prototype.searchLinkedList = function (key) {
  if (!this.head) {
    return false
  }
  let currentNode = this.head

  while (currentNode) {
    if (currentNode.data === key) {
      return true
    }
    currentNode = currentNode.next
  }

  return false
}

LinkedList.prototype.printLinkedlist = function () {
  if (!this.head) {
    console.log('Linked list not present')
    return
  }

  let currentNode = this.head

  let linkedlistData = []
  while (currentNode) {
    linkedlistData.push(currentNode.data)
    currentNode = currentNode.next
  }

  if (linkedlistData) {
    console.log(linkedlistData)
  }
}
