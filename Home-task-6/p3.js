// https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript

//new with apply

function construct(Class) {
  var obj = Object.create(Class.prototype);         //creates object
  Class.apply(obj, Array.prototype.slice.call(arguments, 1)); //passes args
  return obj;
}