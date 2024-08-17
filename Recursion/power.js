// Iterative approach

function power(base, expo) {
  let result = 1
  for (let i = 0; i < expo; i++) {
    result *= base
  }
  return result
}
// console.log(power(2,5))

function recursivePower(base, expo) {
  if (expo == 0) {
    return 1
  }
  return base * recursivePower(base, expo - 1)
}
console.log(recursivePower(2, 5))
