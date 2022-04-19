// Extract Nested Object Reference

//https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
   var arr = string.split('.');
   return arr.reduce((prev,curr) => (prev ? prev[curr] : prev),this);
}