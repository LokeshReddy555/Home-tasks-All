// partition the items array so that all values for which predFnFn returns true are
// at the end, returning the index of the first true value
// https://www.codewars.com/kata/partition-on

function partitionOn(predFn, items) {
  var trueArray = items.filter(ele => predFn(ele));      //filtering only true elements
  var falseArray = items.filter(ele => !predFn(ele));     //filtering only false elements
  items.splice(0);   //removes elements from index 0
  items.push(...falseArray);  //adds false elements
  items.push(...trueArray);  //adds true elements
  return falseArray.length;
}