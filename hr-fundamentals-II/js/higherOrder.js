// Write each as seen below in your main.js file.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// Finish the implementation of sumSquares below (using each):

// function sumSquares(numbers) {
//   var total = 0;
//   each(numbers, function() {
//   	total *= 2;
//   	return total;
//   })
//   return total;
// }

// console.log(sumSquares([1, 2, 3]))