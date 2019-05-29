// Code your solution in this file!
const returnFirstTwoDrivers = function(collection) {
  return collection.slice(0, 2)
}

const returnLastTwoDrivers = function(collection) {
  return collection.slice((collection.length - 2), collection.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(num) {
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(collection, fnctn) {
  return fnctn(collection)
}
