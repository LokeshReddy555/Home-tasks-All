//function composition - only 2 functions
// http://www.codewars.com/kata/function-composition

function compose(f, g) {
  // Compose the two functions here!
  return function (...args) {         //because it can have multiple arguments
    return f(g(...args));
  }
}
//const compose = (f, g) => (...x) => f(g(...x));
