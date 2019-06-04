// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number) {
  return function() {
    return number *= number;
  };
};

const fareDoubler = function(number) {
  return number *= 2;
};

const fareTripler = function(number) {
  return number *= 3;
};

const fetchSpecifiedDrivers = function(array, fn) {
  return fn(array);
};
