//Basic Mathematical Operations
// https://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2)
{
  // Code
  switch(operation){
      case '+': return value1+value2;break;
      case '-': return value1-value2;break;
      case '*': return value1*value2;break;
      case '/': return value1/value2;
      //include default
  }
}