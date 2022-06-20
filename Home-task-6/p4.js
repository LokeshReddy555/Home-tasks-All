//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

//SantaClausable Interface

function isSantaClausable(obj) {
  // TODO
   if(typeof obj.sayHoHoHo == 'function' &&
      typeof obj.distributeGifts == 'function' &&
      typeof obj.goDownTheChimney == 'function'){
     return true;
   }
  return false;
}