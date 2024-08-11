class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
}

DoublyLinkedList.prototype.insertAtStart = function (data) {
  const newNode = new Node(data, this.head, null)
  // if(this.head!==null){
  //     this.head.prev=newNode
  //     this.head = newNode
  //     return
  // }

  // if(!this.head){
  //     this.head=newNode
  //     this.tail=newNode
  // }

  if (this.head !== null) {
    this.head.prev = newNode
  }
  this.head = newNode

  if (this.tail === null) {
    this.tail = newNode
  }
}

DoublyLinkedList.prototype.inserAtEnd = function (data) {
  const newNode = new Node(data, null, this.head)
  if (this.tail !== null) {
    this.tail.next = newNode
  }

  this.tail = newNode
  if (this.head === null1) {
    this.head = newNode
  }
}

DoublyLinkedList.prototype.insertAtGiven = function (data, prevData) {
  const newNode = new Node(data, prevData.next, prevData)

  if (prevData === null) {
    console.log('can not be null prevData')
    return
  }

  if (prevData.next !== null) {
    prevData.next.prev = newNode
  }
  prevData.next = newNode

  if (newNode.next === null) {
    this.tail = newNode
  }
}

DoublyLinkedList.prototype.deleteFirstNode = function () {
  {
    if (this.head === null) {
      return
    }

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return
    }

    this.head = this.head.next
    this.head.prev = null
  }
}

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (this.tail === null) {
    console.log('DLL is empty')
    return
  }

  if (this.head === this.taill) {
    this.head = null
    this.tail = null
    return
  }

  this.tail = this.tail.prev
  this.tail.nex = null
}

DoublyLinkedList.prototype.reverselinkedList = function () {
  let currentNode = this.head
  let tempNode = null

  while (currentNode != null) {
    tempNode = currentNode.prev
    currentNode.prev = currentNode.next
    currentNode.next = tempNode
    currentNode = currentNode.prev
  }

  if (temp != null) {
    this.tail = this.head
    this.head = tempNode.prev
  }
}
