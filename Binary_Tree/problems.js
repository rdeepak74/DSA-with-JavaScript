function treeSumBreadtFirst(root) {
  if (root === null) {
    return 0
  }
  const queues = [root]
  let sum = 0
  while (queues.length > 0) {
    const node = queues.shift()
    sum += node.key
    if (node.left !== null) {
      queues.push(node.left)
    }
    if (node.right !== null) {
      queues.push(node.right)
    }
  }
  return sum
}

function treeSumRecursive(root) {
  if (root === null) {
    return 0
  }

  return root.key + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

function treeSumDeptFirs(root) {
  if (root === null) {
    return 0
  }
  const stacks = [root]
  let sum = 0

  while (stacks.length > 0) {
    const node = stacks.pop()
    sum += node.key
    if (node.right !== null) {
      stacks.push(node.right)
    }
    if (node.lef !== null) {
      stacks.push(node.left)
    }
  }
  return sum
}
