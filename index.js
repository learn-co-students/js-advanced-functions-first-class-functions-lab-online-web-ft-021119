const  returnFirstTwoDrivers = function returnFirstTwoDrivers(driver) {
	let first_two = [];
	first_two.push(driver[0]);
	first_two.push(driver[1]);
	return first_two;

};
const  returnLastTwoDrivers = function returnLastTwoDrivers(driver) {
	let last_two = [];
	last_two.push(driver[driver.length-2]);
	last_two.push(driver[driver.length-1]);
	return last_two;
};
const selectingDrivers = [returnFirstTwoDrivers,
	returnLastTwoDrivers];
 function createFareMultiplier(first) {
 	return function createFareMultiplier(second){
 		return first * second;
 	};
 };

  function fareDoubler(fare) {
  	return fare * 2;
};
function fareTripler(fare) {
  	return fare * 3;
};

  function fetchSpecifiedDrivers(driver, desired_function) {

  	return desired_function(driver);
};
// Code your solution in this file!
