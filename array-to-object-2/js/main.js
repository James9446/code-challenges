/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. 
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/

// Simple solution 

// Test arrays
var newArray = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fromListToObject(array) {
	// Variable for storing new object
	var obj = {};
	// for loop iterates through the 'outer' array 
  for (i = 0; i < array.length; i++) {
  	// Variable stores as an object property the index 0 value from the current 'inner' array i.e. 'make' becomes the first property for the object
  	var property = array[i][0];
  	// Variable stores as an object value the index 1 value from the current 'inner' array i.e. 'Ford' becomes the first value for the object
		var value = array[i][1];
		// This sets the objects current property to the current value
		obj[property] = value;		
  }
  return obj;
}

console.log(fromListToObject(newArray));
