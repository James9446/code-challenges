var shoes = [
          {name: 'tasselled black low-top lace-up', price: 1000},
          {name: 'tasselled green low-top lace-up', price: 1100},
          {name: 'plain beige suede moccasin', price: 950},
          {name: 'plain olive suede moccasin', price: 1050}
        ];

var currentInventory = [
   {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  },
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
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

function checkIfBlack(obj) {
  var shoeAndPrice = '';
  var nameSplit = obj.name.split(' ')
  for (var i = 0; i < nameSplit.length; i++) {
    if (nameSplit[i] === 'black') {
      shoeAndPrice += obj.name + ',' + obj.price;
    }
  }
  return shoeAndPrice;
}

function getBlackShoeInfo(obj) {
  var blackShoes = '';
  for (var i = 0; i < obj.shoes.length; i++) {
    if (checkIfBlack(obj.shoes[i])) {
      blackShoes += obj.name + ',' + checkIfBlack(obj.shoes[i]) + '\n';
    }
  }
  return blackShoes;
}


function listAllBlackShoes(arr) {
  var blackShoeList = arr.map(function(i) {
    return getBlackShoeInfo(i);
  })
  return blackShoeList.toString();
}

console.log(listAllBlackShoes(currentInventory));
// console.log(getBlackShoeInfo(currentInventory[0]));
// console.log(checkIfBlack(shoes[0]));


































// function getShoeInfo(obj) {
//   return obj.name + ', ' + obj.price + '\n';
// }

// function getShoeNameAndInfo(obj, i) {
//   return obj.name + ', ' + getShoeInfo(obj.shoes[i]);
// }

// function getShoeInventory(obj) {
//   var inventory = '';
//   for (var i = 0; i < obj.shoes.length; i++) {
//     inventory += getShoeNameAndInfo(obj, i) + ' ';
//   }
//   return inventory.trim();
// }

// // function renderInventory(arr) {
// //   var inventory = '';
// //   for (var i = 0; i < arr.length; i++) {
// //     inventory += getShoeInventory(arr[i]) + '\n';
// //   }
// //   return inventory.trim();
// // }

// function renderInventory(arr) {
//   return arr.map(function(i) {
//     return getShoeInventory(i) + '\n';
//   }).join('');
// }


// //console.log(getShoeInfo(currentInventory[0].shoes[0]))
// //console.log(getShoeInventory(shoes))
// //console.log(getShoeNameAndInfo(currentInventory[0], 0));

// //console.log(getShoeInventory(currentInventory[0], 0));

// console.log(renderInventory(currentInventory));

