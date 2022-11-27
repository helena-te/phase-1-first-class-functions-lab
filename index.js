// Code your solution in this file!

const returnFirstTwoDrivers = function (names) {
    // while (names.length > 2) {
    //     names.pop();
    // }
    // return names;
    return names.slice(0, 2);
};



const returnLastTwoDrivers = function (names) {
    return names.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function mult(fare) {
        return int * fare;
    }   
};

function fareDoubler(fare) {
    return 2 * fare;
    };

function fareTripler(fare) {
    return 3 * fare;
    };    

function selectDifferentDrivers(drivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
};