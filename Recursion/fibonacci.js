function fibonacci(value) {
  let n0 = 0
  let n1 = 1
  for (let i = 0; i < value; i++) {
    let temp = n0 + n1
    n0 = n1
    n1 = temp
  }
  return n0
}

// console.log(fibonacci(6))

function recursivefibonacci(value) {
  if (value <= 1) {
    return value
  }

  return recursivefibonacci(value - 2) + recursivefibonacci(value - 1)
}

console.log(recursivefibonacci(6))
