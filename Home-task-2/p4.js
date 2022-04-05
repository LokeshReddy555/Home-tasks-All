//Transportation on vacation
// https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  // Your solution here
  var total = d*40;
  if(d >= 7) return total-50;
  else if(d >= 3) return total-20;
  return total;
}