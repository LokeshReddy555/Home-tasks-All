// Function Cache
// http://www.codewars.com/kata/function-cache

function cache(func) {
  var cache = {};
  return function () {
    var key = JSON.stringify(arguments);    //converts to unique string which can be recovered later
    if (!(key in cache)) {
      const result = func.apply(null, arguments);
      cache[key] = result;
    }
    return cache[key];
  }
}