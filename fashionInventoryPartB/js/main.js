// var shoes = [
//           {name: 'tasselled black low-top lace-up', price: 1000},
//           {name: 'tasselled green low-top lace-up', price: 1100},
//           {name: 'plain beige suede moccasin', price: 950},
//           {name: 'plain olive suede moccasin', price: 1050}
//         ];

var currentInventory = [
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

function calculateSum(arr) {
  return arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
 }

// function calculateAverage(arr) {
//   return calculateSum(arr) / arr.length;
// }

function getTotalCost(obj) {
  var total = [];
  obj.shoes.map(function(i) {
    total.push(i.price);
  });
  return calculateSum(total);
}

function getNameAndAveragePrice(obj) {
  var designerObj = {}
  designerObj.name = obj.name;
  designerObj.averagePrice = getTotalCost(obj) / obj.shoes.length;
  return designerObj;
}

function calculateAveragePricePerDesigner(arr) {
  var designers = {}
  designers.designers = arr.map(function(i) {
    return getNameAndAveragePrice(i)
  });
  return designers;
}

console.log(calculateSum([5, 5, 5]));
console.log(getTotalCost(currentInventory[0]));
//console.log(getNameAndAveragePrice(currentInventory[0]));
console.log(calculateAveragePricePerDesigner(currentInventory));
