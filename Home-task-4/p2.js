// return a function that returns n
// https://www.codewars.com/kata/a-function-within-a-function

function always (n) {
   return function() { return n; };
}
