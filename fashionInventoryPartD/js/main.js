var shoes = [
  {name: 'tasselled black low-top lace-up', price: 1000},
  {name: 'tasselled green low-top lace-up', price: 1100},
  {name: 'plain beige suede moccasin', price: 950},
  {name: 'plain olive suede moccasin', price: 1050}
];

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


var testArray = [  
  { 
    nameWords: [ "tasselled", "green", "low-top", "lace-up" ], 
    targetWordIndex: 3 
  }, 
  { 
    nameWords: [ "red", "leather", "laced", "sneakers" ], 
    targetWordIndex: 2 
  }, 
  { 
    nameWords: [ "black", "leather", "laced", "sneakers" ], 
    targetWordIndex: 2 
  } 
];



function createArrayOfShoeDescriptionsPerDesigner(arr) {
  arr = createArrayOfShoeDescriptions(arr[0]).concat(createArrayOfShoeDescriptions(arr[1]));
  return arr;
}

function createArrayOfShoeDescriptions(obj) {
  var lacedShoeObj = [];
  for (var i = 0; i < obj.shoes.length; i++) {
    if (checkForTerm(obj.shoes[i])) {
      lacedShoeObj.push(createShoeDescription(obj.shoes[i]));
    }
  }
  return lacedShoeObj;
}

function createShoeDescription(obj) {
  var lacedShoeObj = {};
  lacedShoeObj.nameWords = obj.name.split(' ');
  lacedShoeObj.targetWordIndex = checkForTerm(obj);
  return lacedShoeObj;
}

function checkForTerm(obj) {
  var termIndex;
  var description = obj.name.split(' ');
  for (var i = 0; i < obj.name.length; i++) {
    if (description[i] === 'laced' || description[i] === 'lace-up') {
      termIndex = i;
    }
  }
  return termIndex;
}


// console.log(checkForTerm(shoes[0]))
// console.log(createShoeDescription(shoes[0]))
// console.log(createArrayOfShoeDescriptions(currentInventory[1]));
// console.log(createArrayOfShoeDescriptionsPerDesigner(currentInventory));

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed');
  } else {
    console.log('Failed [' + testName + '] the result ' + actual + ' was expected to equal ' + expected);
  }
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('Passed');
  } else {
    console.log('Failed [' + testName + '] the result ' + actual + ' was expected to equal ' + expected);
  }
}

// Testing checkForTerms()
assertEqual(checkForTerm(shoes[0]), 3, 'It should return index of term');
assertEqual(checkForTerm(shoes[2]), undefined, 'It should return undefined if no term is found');

// Test createShoeDescription()
assertObjectsEqual(createShoeDescription(shoes[0]), { nameWords: [ 'tasselled', 'black', 'low-top', 'lace-up' ],
  targetWordIndex: 3 }, 'It should return and object with two properties')

// Testing createArrayOfShoeDescriptions()
assertObjectsEqual(createArrayOfShoeDescriptions(currentInventory[1]), [ { nameWords: [ 'red', 'leather', 'laced', 'sneakers' ],
    targetWordIndex: 2 },
  { nameWords: [ 'black', 'leather', 'laced', 'sneakers' ],
    targetWordIndex: 2 } ], 'It should return and array of objects')

// Testing createArrayOfShoeDescriptionsPerDesigner()
assertObjectsEqual(createArrayOfShoeDescriptionsPerDesigner(currentInventory), testArray, 'It should equal testArray.')


