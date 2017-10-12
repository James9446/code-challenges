/*
Write a function called "addFullNameProperty".
Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
function addFullNameProperty(obj) {
	var arr = Object.getOwnPropertyNames(obj);
	Object.defineProperty(obj, "fullName", {
  value: obj[arr[0]] + " " + obj[arr[1]],
  writable: true,
  enumerable: true,
  configurable: true
	});
}

addFullNameProperty(person);
console.log(person.fullName);
