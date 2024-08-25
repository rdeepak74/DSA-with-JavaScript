/*
const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
  ];
  
  convert edges to graph directed graph
  const graph = {
    b: [a],
    a: [b]
  }
  
  loop => check if DOES NOT exist, then add key => push both nodes
  
  Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.
  
  After that you can find and node path etc.
  Take care of cycle via visited technique.
  
  */

function convertdirectedgraph(edges) {
  const graph = {}
  for (let edge of edges) {
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

function directeddfs(graph, start, dest) {
  const visited = new Set()
  const stack = [[start]]
  while (stack.length > 0) {
    const node = stack.pop()
    if (node === dest) {
      return true
    }
    if (!visited.has(node)) {
      visited.add(node)
      for (let neighbour of graph[node]) {
        // if (!visited.has(neighbour)) {
        //     stack.push(neighbour)
        //   }
        stack.push(neighbour)
      }
    }
  }
  return false
}

function undirectedFinal(edges, start, dest) {
  const graph = convertdirectedgraph(edges)
  return directeddfs(graph, start, dest)
}
