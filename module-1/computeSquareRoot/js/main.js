
/*
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.
var output = computeSquareRoot(9);
console.log(output); // --> 3

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem:

https://www.deltacollege.edu/dept/basicmath/Babylonian.htm
*/

function computeSquareRoot(num) {
	var guess = num / 2;
  // var guess = getRandomRangedNumber(1, num);
  // var guess = 2;
  var num2;
  var average;
  for (i = 0; i < 10; i++) {
  	num2 = num / guess;
  	average = (num2 + guess) / 2;
  	num2 = guess;
  	guess = average;
  	console.log("num2 " + num2);
  	console.log("guess " + guess);
  	console.log("average " + average);
  	console.log("----end of loop")
  }
  return guess.toFixed(8);
}


function getRandomRangedNumber(lower, upper) {
	if (isNaN(lower) || isNaN(upper)) {
		console.log("One or more of your arguments is not a number")
	} else if (lower >= upper) {
		console.log("For getRandomRangedNumber() function to work please enter a number for the first argument that is lower than the second argument.");
	} else {
		var randomNumber = Math.floor(Math.random() * ((upper + 1) - lower)) + (lower - 1) + 1;
		return randomNumber;
	}
}

console.log(computeSquareRoot(10000));
// var test = 22 / 7
// test.toFixed(5) += 1
// console.log(test.toFixed(5));



