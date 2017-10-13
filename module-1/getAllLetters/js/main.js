/*
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. 

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
*/

var output = getAllLetters('Radagast');

function getAllLetters(str) {
  var output = [];
  for (i = 0; i < str.length; i++) {
    output.push(str[i]);
  }
  return output;
}

console.log(output);