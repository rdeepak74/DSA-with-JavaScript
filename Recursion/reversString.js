function revereString(string) {
  let result = ''
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }
  return result
  //   let string2 = string.split('')
  //   console.log(string2.reverse().join(''))
}
console.log(revereString('Hello'))

function recursionString(string) {
  if (string === '') {
    return string
  }

  let reversPart = recursionString(string.substring(0, string.length - 1))
  let result = string[string.length - 1] + reversPart

  return result
}

console.log(recursionString('Hello'))
