// Code your solution in this file!

const returnFirstTwoDrivers =
function returnFirstTwoDrivers(drivers) {
  let newDrivers = drivers
  return newDrivers.slice(0,2)
}

const returnLastTwoDrivers =
function returnLastTwoDrivers(drivers) {
  let newDrivers = drivers
  return newDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
fareDoubler(fare)

const fareTripler = createFareMultiplier(3)
fareTripler(fare)

// function fetchSpecifiedDrivers(drivers, function) {
//   return function(drivers)
// }
