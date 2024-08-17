function recursiveGCD(num1, num2) {
  if (num1 === num2) {
    return num1
  }

  if (num1 > num2) {
    return recursiveGCD(num1 - num2, num2)
  }

  if (num1 < num2) {
    return recursiveGCD(num1, num2 - num1)
  }
}
// console.log(recursiveGCD(56, 98))

function gcd(num1, num2) {
  while (num2 != 0) {
    let temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}
console.log(gcd(56, 98))
