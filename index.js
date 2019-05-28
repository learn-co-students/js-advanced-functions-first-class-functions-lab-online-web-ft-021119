// Code your solution in this file!
	
const returnFirstTwoDrivers = function(arr){
	let newArr = [];
	newArr.push(arr[0], arr[1]);
	return newArr;
};

const returnLastTwoDrivers = function(arr){
	return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function(num){
		return function(val){
			return num * val;
		};
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3); 


function fetchSpecifiedDrivers(drivers, driverFunc){
	return driverFunc(drivers);
};

