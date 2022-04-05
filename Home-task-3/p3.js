// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
// https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  var tarr = items.filter(ele => pred(ele));      //filtering only true elements
  var farr = items.filter(ele => !pred(ele));     //filtering only false elements
  items.splice(0);   //removes elements from index 0
  items.push(...farr);  //adds false elements
  items.push(...tarr);  //adds true elements
  return farr.length;
}