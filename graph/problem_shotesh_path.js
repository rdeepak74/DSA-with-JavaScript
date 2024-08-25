function shortestpath(edges, start, dest) {
  const graph = createGraph()
  const queue = [[start, 0]]
  const visited = new Set([start])

  while (queue.length > 0) {
    const [node, distance] = queue.shift()
    if (node === dest) {
      return distance
    }
    for (let neighbor of graph(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }
}

function createGraph(edges) {
  const graph = {}

  for (const edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) {
      graph[a] = []
    }
    if (!(b in graph)) {
      graph[b] = []
    }
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const edges = [
  ['a', 'b'],
  ['b', 'c'],
  ['c', 'd'],
]
