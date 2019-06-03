const returnFirstTwoDrivers = (function (drivers) {
    return drivers.slice(0,2)
})

const returnLastTwoDrivers = (function(drivers) {
    return drivers.slice(-2)
})

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number) {
    return function(fare) {
        return number * fare;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, functions) {
    return (functions === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers))
}

