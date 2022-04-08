//Get the Middle Character
// https://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  //Code goes here!
  var length = s.length/2;
  return (s.length%2 == 0) ? s.substring(length-1,length+1) : s.substring(length,length+1);
}