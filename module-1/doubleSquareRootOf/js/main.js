/*
Write a function called "doubleSquareRootOf".
Given a number, "doubleSquareRootOf" returns double its square root.
var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/

function doubleSquareRootOf(num) {
	var guess = num / 2;
  var num2;
  var average;
  for (i = 0; i < 3; i++) {
  	num2 = num / guess;
  	average = (num2 + guess) / 2;
  	num2 = guess;
  	guess = average;
  }  
  return Math.floor(guess) * 2;
}