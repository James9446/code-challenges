// Write a function fullName that takes a person object as an argument, and returns that person's full name as a string.

// Your fullName function should work correctly regardless of whether or not the person has a middle name -- 
// if it doesn't produce the output shown above when given the object {name: {first: "John", last: "Doe"}}, fix it so that it does.

var alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age: 26
};

function fullName(person) {
	var name = '';
	for (var key in person.name) {
		name += person.name[key] + ' ';
	}
  return name.trim();
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"
console.log('');
console.log("-----next example-------");
console.log('');

console.log(fullName({name: {first: "John", last: "Doe"}})); // => "John Doe")

// We often deal with arrays of objects; below is an example of an array of objects, where each object represents a person:

// Write a function that, when passed an array of people (person objects) as an argument, 
// returns an array of their full names. Can you make use of your fullName function here?

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function fullNames(people) {
	var names = '';
	for (var i = 0; i < people.length; i++) {
		for (var key in people.name) {
			// console.log(people.name[key]);
			names += people.name[key] = " ";
		}
	}
	return names;
}

console.log(fullNames(people));







