// function power(base, exponent) {
// 	if (exponent === 0) {
// 		retu
// 	}
// }

// function powerIter(base, exponent) {
// 	var result = 1;
// 	while (exponent > 0) {
// 		result *= base;
// 		exponent--;
// 	}
// 	return result;
// }

// console.log(powerIter(2, 3));

// Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:

function sum(n) {
	var counter = 0;
	var total = 0;
  while (counter <= n) {
  	total += counter;
  	counter++;
  }
  return total;
}

console.log(sum(3)); // => 6
console.log(sum(4)); // => 10
console.log(sum(5)); // => 15
console.log("-----next example-------")

// Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function factorial(n) {
	var counter = 1;
	var total = 1;
  while (counter <= n) {
  	total *= counter;
  	counter++;
  }
  return total;
}
console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log("-----next example-------")

// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, 
// which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.

function repeatString(str, count) {
  var repeatedStr = '';
  var counter = 0;
  while (counter < count) {
  	repeatedStr += str;
  	counter++;
  }
  return repeatedStr;
}
console.log(repeatString('dog', 0)); // => ''
console.log(repeatString('dog', 1)); // => 'dog'
console.log(repeatString('dog', 2)); // => 'dogdog'
console.log(repeatString('dog', 3)); // => 'dogdogdog'
console.log("-----next example-------");

// Modify your sum function from the Basic Requirements section to accept two parameters, start and end: 
// sum should now compute the sum of the numbers from start to end, e.g.

function sum(start, end) {
	var counter = start;
	var total = 0;
	if (start > end) {
		start = end;
		end = counter;
		counter = start;
	}
	// console.log(start, end);
  while (counter <= end) {
  	total += counter;
  	counter++;
  }
  return total;
}
console.log(sum(2, 7)); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
console.log(sum(3, 5)); // => 3 + 4 + 5 => 12
console.log(sum(5, 3)); // => 3 + 4 + 5 => 12
console.log("-----next example-------");

// Let's pretend for a moment that JavaScript does not have the addition operator + 
// instead, it comes with two functions called inc and dec that perform increment and decrement respectively:

// ignore the fact that inc makes use of +
// function inc(x) {
//   return x + 1;
// }

// function dec(x) {
//   return x - 1;
// }

// Your task is to write a function called add that takes two numbers as parameters, x and y, and adds them together. The catch is that you can only use inc and dec to accomplish this.

function dec(x) {
  return x - 1;
}
function inc(x) {
	  return x + 1;
}

function add(x, y) {
	
	var result = x;
	var i = 0;
	// if (x <= 0 && y <= 0) {
	// 	while ( i > y) {
	// 		result = dec(result);
	// 		i = inc(i);
	// 	}
	// } else if (x <= 0 && y >= 0){
	// 	while ( i > y) {
	// 		result = inc(result);
	// 		i = inc(i);
	// 	}
	// } else if (x > 0 && y < 0) {
	// 	while ( i < y) {
	// 		result = dec(result);
	// 		i = dec(i);
	// 	}
	// } else if (x > 0 && y > 0) {
	// 	while ( i < y) {
	// 		result = inc(result);
	// 		i = inc(i);
	// 	}
	if (y <= 0 ) {
		while (i > y) {
			result = dec(result);
			i = dec(i);
		} 
	}	else if (y > 0) {
		while (i < y) {
			result = inc(result);
			i = inc(i);
		}
	}

	return result;
}

console.log(add(5, -4));
console.log("-----next example-------");

// Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise; however, you need to do this without using the % operator.

function isEven(n) {

}


// Write a function called multiply that accepts two numbers as parameters, and multiplies them together -- but without using the * operator; instead, you'll need to use repeated addition.
function multiply(x, y) {

}






