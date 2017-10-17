/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/
var output = countWords('ask a bunch get a bunch a');

// function countWords(str) {
//   var newArr = str.split(" ");
//   var obj = {};
//   var key;
//   var value;
//   return newArr;
// }

function countWords(str) {
  // your code here
  if (str.length = 0) {
    return []
  } else {
    var wordCount = [];
    var strToArr = str.split(" ");
    var testArray = [];
    var word;
    var number = 1;
    var finalArr
    var newObj = {
    }
    console.log(strToArr)
    for(i = 0; i < strToArr.length; i ++) {
    	// console.log(strToArr.indexOf(strToArr[i]))
    	// testArray.push(strToArr.indexOf(strToArr[i]))
    	// testArray.sort();
    	// console.log(testArray);
    	
    	// console.log(strToArr.indexOf(strToArr[i]).sort())
      
      // if (strToArr.indexOf(strToArr[i]) > strToArr.indexOf(strToArr[i - 1])) {
      testArray.push(strToArr.indexOf(strToArr[i]));
      // console.log(testArray);
      // console.log(true);
      // wordCount.push(strToArr[i])
     
      // console.log(newObj);
      console.log(testArray);
      // } 
      testArray.sort();
    }
    for (j = 0; j < testArray.length; j++) {
      // console.log(testArray[j])
      if (testArray[j] === testArray[j + 1]) {
        console.log(true);
        console.log(testArray[j]);
        console.log(strToArr[j]);
        Object.defineProperty(newObj, strToArr[j], {
        value: 2,
        enumerable: true,
        writable: true,
        configurable: true
        });
        console.log(newObj);
        // console.log("found a repeat");
        // console.log(strToArr[i]);

      } else if (testArray[j] !== testArray[j + 1]) {
        Object.defineProperty(newObj, strToArr[j], {
          value: 1,
          enumerable: true,
          writable: true,
          configurable: true
        });
      }
    }
        // if (testArray[j] === testArray[j + 2]) {
        //   Object.defineProperty(newObj, strToArr[i], {
        //   value: 3,
        //   enumerable: true,
        //   writable: true,
        //   configurable: true
        //   });
        //   // console.log("found a repeat");
        //   // console.log(strToArr[i]);
        // }

    // for (i = 0; i < testArray.length; i++) {
    //   if (testArray.includes(testArray[i]) === true) {
    //     console.log("found a repeat");
    //   }
    // }
    // testArray.sort();

    console.log(testArray);
    // console.log(wordCount);
    console.log(newObj);
      // else {
        // wordCount[strToArr.indexOf(i)]++
      // }
    
  	
  	// for (i = 0; i < strToArr.length; i++) {
  	// 	if (testArray[i] == testArray[i + 1]) {
   //  		word = strToArr[i];
   //  		console.log(strToArr[i])
   //  		number++;
   //  		wordCount.push(newObj);
   //  	}
  	// }
    // return newObj;
	}
}

// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}


   // for (j = 0; j < strToArr.length; j++) {
      //     if (strToArr.indexOf(strToArr[j]) === strToArr.indexOf(strToArr[i])) {
      //       console.log("found a repeat");
      //       console.log(strToArr[i]);
      //     } else {
      //       console.log("not a repeat")
      //       // wordCount.push(strToArr[i])
      //     }
            
        // }

