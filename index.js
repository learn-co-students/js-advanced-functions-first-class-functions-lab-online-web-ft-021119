const returnFirstTwoDrivers = function(drivers){
  let array = [];
  for (let i=0; i < 2; i++){
    array.push(drivers[i])
  }
  return array
}

const returnLastTwoDrivers = function(drivers){
  let array = [];
  for (let i=2; i < 4; i++){
    array.push(drivers[i])
  }
  return array
}

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]

// look at functions returning functions section
const createFareMultiplier = function(mult){
  return function(num) {
    return num * mult;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, twoDrivers){
  return twoDrivers(drivers)
}
