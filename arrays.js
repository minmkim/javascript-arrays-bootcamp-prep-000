var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = addElementToBeginningOfArray(array, element)
  return newArray
}

function addElementToEndOfArray(array, element) {
  var newArray = destructivelyAddElementToEndOfArray(array, element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, element) {
  return array[element]
}

