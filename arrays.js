var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(array,element){
  
  var alteredArray = array.unshift(element);
  
  return alteredArray;
  
}
function AddElementToBeginningOfArray(array,element){
  
  var alteredArray = array.push(element);
  
  return alteredArray;
}