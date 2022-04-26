// Code your solution in this file!

const returnFirstTwoDrivers = arrayOfDrivers => {
    return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = arrayOfDrivers => {
    return arrayOfDrivers.slice(-2) 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(x) {
    return function(fare) {
        return fare * x
    }
}
//const createFareMultiplier= x => fare => (x * fare )

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnSomething) {
   return returnSomething(arrayOfDrivers)
}
    