/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here

}



// Test arrays
var newArray = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
function transformEmployeeData(array) {
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var obj1 = {};
  var obj2 = {};
  arr1 = array[0];
  arr2 = array[1];
  for (i = 0; i < arr1.length; i++) {
    Object.defineProperty(obj1, arr1[i][0], {
    value: arr1[i][1],
    writable: true,
    enumerable: true,
    configurable: true 
    });
  }
  for (i = 0; i < arr2.length; i++) {
    Object.defineProperty(obj2, arr2[i][0], {
    value: arr2[i][1],
    writable: true,
    enumerable: true,
    configurable: true 
    });
  }
  arr3.push(obj1);
  arr3.push(obj2);
  return arr3;
}

// function transformEmployeeData(array) {
//   var obj = {};
//   var obj2 = {};
//   var newArray = [];
  
//   var loopCounter = array[0].length;
//   var descriptor = Object.create(null); // no inherited properties
//   // not enumerable, not configurable, not writable as defaults
//   descriptor.value = 'static';
//   for (i = 0; i < loopCounter; i++) {
//     var counter = 0;
//     Object.defineProperty(obj, 'key', descriptor);
//     Object.defineProperty(obj, array[counter][i][0], {
//     value: array[counter][i][1],
//     writable: true,
//     enumerable: true,
//     configurable: true 
//     });
//     counter += 1;
//   }
//   for (i = 0; i < loopCounter; i++) {
//     var counter = 0;
//     counter += 1;
//     Object.defineProperty(obj2, 'key', descriptor);
//     Object.defineProperty(obj2, array[counter][i][0], {
//     value: array[counter][i][1],
//     writable: true,
//     enumerable: true,
//     configurable: true 
//     });
//   }
//   newArray.push(obj);
//   newArray.push(obj);
//   return newArray;
// }
// function transformEmployeeData(array) {
// 	// Variable for storing new object
// 	var obj1 = {};
//   var obj2 = {};
// 	// for loop iterates through the 'outer' array 
//   // for (i = 0; i < array.length; i++) {
//   	// Variable stores as an object property the index 0 value from the current 'inner' array i.e. 'make' becomes the first property for the object
//   	var property1 = array[0][0][0];
//     console.log(property1)
//   	// Variable stores as an object value the index 1 value from the current 'inner' array i.e. 'Ford' becomes the first value for the object
// 		var value1 = array[0][0][1];
//     console.log(value1)
//     obj1[property1] = value1;

//     // Variable stores as an object property the index 0 value from the current 'inner' array i.e. 'make' becomes the first property for the object
//     var property2 = array[1][0][0];
//     // Variable stores as an object value the index 1 value from the current 'inner' array i.e. 'Ford' becomes the first value for the object
//     var value2 = array[1][0][1];
// 		// This sets the objects current property to the current value
// 		obj2[property2] = value2;		
//   // }
//   return obj2;
// }

console.log(transformEmployeeData(newArray));
