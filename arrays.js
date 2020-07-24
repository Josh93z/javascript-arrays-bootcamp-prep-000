var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(array,element){
  
  var alteredArray = array.unshift(element);
  
  return alteredArray;
  
}