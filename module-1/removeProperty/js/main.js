/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.

removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/
var obj = {
  name: 'Sam',
  age: 20
}
function removeProperty(obj, key) {
	var objProperties = Object.getOwnPropertyNames(obj)
	console.log(objProperties)
  for (i = 0; i < objProperties.length; i++) {
  	// console.log(obj[key]);
   //  console.log(obj.key);
    if (key === objProperties[i]) {
    	console.log(objProperties[i])
      obj[objProperties[i]] = undefined;
    }
  }
}
removeProperty(obj, 'name')
console.log(obj.name)