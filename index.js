// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  let FirstTwoDrivers = [];
  FirstTwoDrivers.push(drivers[0]);
  FirstTwoDrivers.push(drivers[1]);
  return FirstTwoDrivers;
};

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  let LastTwoDrivers = [];
  LastTwoDrivers.push(drivers[drivers.length-2]);
  LastTwoDrivers.push(drivers[drivers.length-1]);
  return LastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function createFareMultiplier(fare) {
    return fare*num;
  };
};

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
};

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};

function fetchSpecifiedDrivers(array, func) {
  return func(array);
};
