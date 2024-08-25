const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e'],
}

function biggestIsland(graph) {
  let visited = new Set()
  let largest = 0

  for (let node in graph) {
    if (!visited.has(node)) {
      let size = dfs(graph, node, visited)
      //   let size = dfsrecursiv(graph, node, visited)
      if (size > largest) {
        largest = size
      }
    }
  }

  return largest
}

function dfs(graph, node, visited) {
  const stack = [node]
  let size = 0
  while (stack.length > 0) {
    let currentNode = stack.pop()
    if (!visited.has(currentNode)) {
      visited.add(currentNode)
      size += 1
      for (let neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }
  }
  return size
}

function dfsrecursiv(graph, node, visited) {
  if (visited.has(node)) {
    return 0
  }
  visited.add(node)
  let size = 1
  //find neighbour
  for (const neighbour of graph[node]) {
    size += dfs(neighbour)
    // size = size + dfs(neighbour)
  }
  return size
}
