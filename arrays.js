var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
//array2 = [];
//  array2.unshift(array, element);
[element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}
