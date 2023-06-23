const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(0, 2);
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer) {
    const fareMultiplier = fare => fare * integer;
    return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, fun) {
    return fun(arrayOfDrivers);

}


// console.log(returnFirstTwoDrivers);
// console.log(returnLastTwoDrivers);