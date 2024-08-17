function findFirstOccurance(arr, findme, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] == findme) {
      return currIndex
    }
  }
  return -1
}

function recursiveFirstOcc(arr, findeme, currIndex) {
  if (currIndex === arr.length) {
    return -1
  }

  if (arr[currIndex] == findeme) {
    return currIndex
  }

  return recursiveFirstOcc(arr, findme, currIndex + 1)
}
