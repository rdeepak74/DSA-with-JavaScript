// class Node {
//     constructor(key) {
//       this.key = key
//       this.left = null
//       this.right = null
//     }
//   }

function breathFirtTraversal(root) {
  const values = []
  if (root === null) {
    return values
  }

  const queues = [root]
  while (queues.length > 0) {
    const node = queues.shift()
    values.push(node.key)
    if (node.left !== null) {
      queues.push(node.left)
    }
    if (node.right !== null) {
      queues.push(node.right)
    }
  }
  return values
}
