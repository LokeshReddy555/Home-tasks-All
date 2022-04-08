//Transportation on vacation
// https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(distance) {
  // Your solution here
  var discount = distance>=7 ? 50 : distance>=3 ? 20 : 0;
  return (distance*40)-discount;
}