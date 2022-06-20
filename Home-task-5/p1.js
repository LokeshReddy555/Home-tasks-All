// Let's make a Cat constructor!
// http://www.codewars.com/kata/using-closures-to-share-class-state

function Cat() {
  if (arguments.length < 2) {
    throw new Error("Invalid arguments");
  }
  var name = arguments[0];
  var weight = arguments[1];

  Cat.count = (Cat.count || 0) + 1;
  Cat.totalWeight = (Cat.totalWeight || 0) + weight;

  Object.defineProperty(this,
    "weight", {
    get: () => weight,
    set: (value) => {
      Cat.totalWeight += (value - weight);
      weight = value;
    }
  }
  )
}
Cat.averageWeight = () => Cat.totalWeight / Cat.count;








/*
var Cat = (function () {
  var cats = {
    count: 0,
    totalWeight: 0,
  }
  
  function Cat (name, weight) {
   if (!name || !weight) {
      throw new Error('Invalid arguments');
    }
     Object.defineProperty(this, 'weight', {
      value: weight,
      writable: true
    });
    cats.count++;
    cats.totalWeight += this.weight;
  }
  
  Cat.prototype.averageWeight = function () {
    return cats.totalWeight/cats.count;
  }
  Cat.prototype.constructor = Cat;
  return Cat;
  
}());


// undefined
// var c = new Cat("loki",25);
// undefined
// c.averageWeight();
// 25
// var d = new Cat("loki",15);
// undefined
// c.averageWeight();
// 20
// d.weight = 25;
// 25
// d.weight
// 25
// c.averageWeight();
// 20
----------------------------------------------------------------------------------
// Let's make a Cat constructor!
var Cat = (function () {
  var catCount = 0, catAggWeight = 0;
  var constr = function(name, weight) {
    if(!name || !weight) {throw 'Must provide a name and a weight!';}
    catCount++;
    catAggWeight += weight;
    Object.defineProperty(this, 'weight', {set: function(v) {
      catAggWeight += v - weight;
      weight = v;
    }, get: function() {return weight;}});
  }
  constr.averageWeight = function() {
    return catAggWeight / catCount;
  }
  return constr;
}());
-----------------------------------------------------------------------------------
var Cat = function () {
  if( arguments.length < 2 ) throw "Need two arguments"
  let name = arguments[0], weight = arguments[1]
  
  Cat.count =  (Cat.count || 0) + 1;
  Cat.weightSum  = (Cat.weightSum  || 0) +  weight;
  
  Object.defineProperty( this, 
    "weight", {
      get : ( ) => weight,
      set : (v) => { Cat.weightSum += (v - weight); weight = v }
    }
  )
};

Cat.averageWeight = () => Cat.weightSum / Cat.count
*/