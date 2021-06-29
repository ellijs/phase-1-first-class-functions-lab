const drivers = ["Andy", "Bobby", "Clair", "Dave"];

const returnFirstTwoDrivers = (array) => array.slice(0, 2);
const returnLastTwoDrivers = (array) => array.slice(array.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (int) => (fare) => int * fare;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, selectingDrivers) =>
  selectingDrivers(array);

returnFirstTwoDrivers(drivers);
returnLastTwoDrivers(drivers);
