const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e'],
}

function connectedIsland(graph) {
  const visited = new Set()
  let count = 0

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node)
      for (const neighbour of graph[node]) {
        dfs(neighbour)
      }
    }
  }

  function dfsitreative(node) {
    const stack = [node]
    while (stack.length > 0) {
      const node1 = stack.pop()
      if (!visited.has(node1)) {
        visited.add(node1)
        for (const neighbour of graph[node1]) {
          stack.push(neighbour)
        }
      }
    }
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      //   dfs(node)
      dfsitreative(node)
      count++
    }
  }

  return count
}
