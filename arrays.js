var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArray = destructivelyAddElementToEndOfArray(array, element)
  return newArray
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}