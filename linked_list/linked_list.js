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

// inserting at the Beginning of Linked List
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data)
  this.head = newNode
}

// inserting at the end of Linked list
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data)
  if (!this.head) {
    this.head = newNode
    return
  }

  let last = this.head

  while (last.next) {
    last = last.next
  }

  last.next = newNode
}

//inserting at given node linked list
LinkedList.prototype.insetAtGivenNode = function (data, prevNode) {
  if (!prevNode) {
    console.log('The given prev node can not be null')
    return
  }

  const newNode = new Node(data, prevNode.next)
  prevNode.next = newNode
}

//Delete a first node Linked List
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return
  }

  this.head = this.head.next
}

// Delete a Last Node of Linked List
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return // head not present
  }

  if (!this.head.next) {
    this.head = null
    return // if there is only one node
  }

  let secondLastNode = head

  while (secondLastNode.next.next) {
    secondLastNode = secondLastNode.next
  }

  secondLastNode.next = null
}

//Delete a key given node of linked list
LinkedList.prototype.deleteGivenKey = function (key) {
  if (!this.head) {
    console.log('Head is empty')
    return
  }

  if (this.head.data === key) {
    this.head = this.head.next
    return
  }

  let currentNode = this.head

  while (currentNode.next !== null) {
    if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next
      return
    }
    currentNode = currentNode.next
  }

  console.log('Key is not present in a linked list')
}

//Search Linked list given key
LinkedList.prototype.searchLinkedList = function (key) {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.data === key) {
      return true
    }
    currentNode = currentNode.next
  }
  return false
}

//travelsal or print a linkedlist
LinkedList.prototype.traversal = function () {
  let currentNode = this.head

  let linkedlistdata = []
  while (currentNode) {
    linkedlistdata.push(currentNode.data)
    currentNode = currentNode.next
  }

  if (linkedlistdata) {
    console.log(linkedlistdata)
  } else {
    console.log('List is bank')
  }
}
