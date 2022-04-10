// Function Composition - 2
// http://www.codewars.com/kata/function-composition-1

var compose =
    // Your solution
    (...fns) =>              //any no.of functions
        (argument) =>                   //single attribute
            fns.reduceRight((result, fn) => fn(result), argument);  //reduces from right to left

// function compose(...args) {
//     return function (n) {
//         var result = n;
//         while (args.length !== 0) {
//             result = args.pop()(result);
//         }
//         return result;
//     }
// }