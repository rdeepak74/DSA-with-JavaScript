function recursiveSum(n) {
  if (n === 1) {
    return 1
  }
  return n + recursiveSum(n - 1)
}
console.log(recursiveSum(10))
