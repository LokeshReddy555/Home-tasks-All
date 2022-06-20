//Array Helpers

//https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

// TODO
Array.prototype.square = function(){
    return this.map(ele => Math.pow(ele,2));
  }

Array.prototype.cube = function(){
    return this.map(ele => Math.pow(ele,3));
  } 

Array.prototype.average = function(){
    return this.sum()/this.length;
  } 

Array.prototype.sum = function(){
    return this.reduce((prev,curr) => (prev+curr),0);
  } 

Array.prototype.even = function(){
    return this.filter(ele => (ele%2==0));
  } 

Array.prototype.odd = function(){
    return this.filter(ele => (ele%2==1));
  } 