// Code your solution in this file!

const returnFirstTwoDrivers =
function returnFirstTwoDrivers(drivers) {
  let newDrivers = drivers
  newDrivers.length = 2
  return newDrivers
}

const returnLastTwoDrivers =
function returnLastTwoDrivers(drivers) {
  let newDrivers = drivers
  newDrivers.slice(-2)
  return newDrivers
}
