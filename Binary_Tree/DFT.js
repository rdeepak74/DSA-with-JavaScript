// class Node {
//     constructor(key) {
//       this.key = key
//       this.left = null
//       this.right = null
//     }
//   }

function depthFirstTraversal(root) {
  const values = []
  if (root === null) {
    return values
  }
  const stacks = [root]
  while (stacks.length > 0) {
    const node = stacks.pop()
    values.push(node.key)
    if (node.right !== null) {
      stacks.push(node.right)
    }
    if (node.left !== null) {
      stacks.push(node.left)
    }
  }

  return values
}

function recursiveDepthFirstTraversal(root) {
  if (root === null) {
    return
  }

  const leftValues = recursiveDepthFirstTraversal(root.left)
  const rightValues = recursiveDepthFirstTraversal(root.right)

  // return [root.key,leftValues,rightValues]
  return [root.key, ...leftValues, ...rightValues]
}
