// Use split to write a function longestWord that takes a string as an argument and returns the longest word.

function longestWord(str) {
	var longest = '';
	// var longestWord;
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		if (str[i].length > longest.length) {
			longest = str[i]
		}
	}
	return longest;
}

console.log(longestWord("the quick brown fox jumped over the lazy dog"));
console.log('');
console.log("-----next example-------");
console.log('');
// Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function remove(array, element) {
	// console.log(array);
  for (var i = 0; i < array.length; i++) {
  	if (array[i] === element) {
  		// console.log(array[i]);
  		array.splice(i, i);
  		// console.log(array);
  	}
  }
  return array;
}
console.log(remove([1, 3, 6, 2, 3], 3)); // => [1, 6, 2]
console.log('');
console.log("-----next example-------");
console.log('');


// Write a function evens that accepts an array as an argument, 
// and returns an array consisting of all of the even numbers in that array.

function evens(array) {
	var evens = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			evens.push(array[i]);
		}
	}
	return evens;
}


console.log(evens([1, 3, 6, 2, 3, 4, 8]));
console.log('');
console.log("-----next example-------");
console.log('');


// Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.

function average(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i]
	}
	return total / array.length;
}

console.log(average([10, 10, 10, 10]));
console.log(average([2, 3, 6, 2, 3, 4, 8]));
console.log('');
console.log("-----next example-------");
console.log('');


// Write a function called min that finds the smallest number in an array of numbers

function mins(array) {
	var smallest = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			smallest = array[i];
		}
	}
	return smallest;
}

console.log(mins([2, 3, 6, 10, 3, 4, 8, 1]));
console.log('');
console.log("-----next example-------");
console.log('');

// Write a function shortestWord that works like longestWord, but returns the shortest word instead.


function shortestWord(str) {
	var shortest= [];
	// var longestWord;
	str = str.split(' ');
	var shortest = str[0];

	for (var i = 0; i < str.length; i++) {
		if (str[i].length < shortest.length) {
			shortest = str[i];
		}
	}
	return shortest;
}

console.log(shortestWord("the quick brown fox jumped over the lazy dog"));
console.log('');
console.log("-----next example-------");
console.log('');

// Write a function countChar that takes two arguments: any string, and a character (string of one letter), 
// and returns the number of times that the character occurs in the string.



console.log(countChar("the quick brown fox jumped over the lazy dog"));
console.log('');
console.log("-----next example-------");
console.log('');



