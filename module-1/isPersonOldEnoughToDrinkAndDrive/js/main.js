/*
Write a function called "isPersonOldEnoughToDrinkAndDrive".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.
var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false
*/

var obj = {
  age: 45
};

// function isPersonOldEnoughToDrinkAndDrive(person) {
//   var arr = Object.getOwnPropertyNames(person);
//   var canDrinkAndDrive = false;
//   if (person[arr[0]] > 21 && canDrinkAndDrive === true) {
//   	return true;
//   } else {
//   	return false;
//   }
// }
function isPersonOldEnoughToDrinkAndDrive(person) {
  var arr = Object.getOwnPropertyNames(person);
  var canDrinkAndDrive = false;
  if (person[arr[0]] < 21 || canDrinkAndDrive === false) {
  	return false;
  } else {
  	return true;
  }
}

var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output);