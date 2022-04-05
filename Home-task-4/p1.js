//Prefill an Array
// https://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  if(n === 0 || n === '0') return [];

  if(v === null){
   return new Array(n).fill(undefined); 
  }
  
  if(isNaN(Number(n)) || !parseInt(n) || n < 0 || n%1 != 0){

    let typeError = new TypeError();
    typeError.name = "TypeError";
    typeError.message =  n + " is invalid";
    throw typeError
  };
  
  return new Array(n).fill(v); 
}