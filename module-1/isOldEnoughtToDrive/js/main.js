/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

function isOldEnoughToDrive(age) {
  // your code here
  /* START SOLUTION */
  if (age >= 16) {
    return true
  } else {
    return false
  }
  /* END SOLUTION */
}