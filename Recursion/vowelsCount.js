function isVowel(charecter) {
  let lowerCase = charecter.toLowerCase()
  let vowels = 'aeiou'

  if (vowels.indexOf(lowerCase) != -1) {
    return true
  } else {
    return false
  }
}

function countVowels(String) {
  let count = 0
  for (let i = 0; i < String.length; i++) {
    if (isVowel(String[i])) {
      count++
    }
  }
  return count
}

// console.log(countVowels('Hello'))

function recursiveCountVowels(string, stringLength) {
  console.log(
    `Length: ${stringLength}, Current String ${string.substring(
      0,
      stringLength
    )}`
  )
  if (stringLength == 1) {
    console.log('Base case got hit here')
    console.log('Base case: ', Number(isVowel(string[0])))
    return Number(isVowel(string[0]))
  }

  //   return (
  //     recursiveCountVowels(string, stringLength - 1) +
  //     isVowel(string[stringLength - 1])
  //   )
  let result =
    recursiveCountVowels(string, stringLength - 1) +
    isVowel(string[stringLength - 1])
  console.log(`count after checking ${string[stringLength - 1]}: ${result}`)
  return result
}

let myString = 'Hellog'
console.log(recursiveCountVowels(myString, myString.length))
