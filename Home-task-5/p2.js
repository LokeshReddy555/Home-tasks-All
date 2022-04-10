//A Chain adding function
// http://www.codewars.com/kata/a-chain-adding-function

function add(num1) {
  var fn = function (num2) {
    return add(num1 + num2);      //recursive call
  }
  fn.valueOf = function () {  //obj to primitive
    return num1;
  }
  return fn;
}