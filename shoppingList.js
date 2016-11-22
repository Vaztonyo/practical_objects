const assert = require('assert');

function shoppingList(list){
  var price1 = 0;
  for (i in list){
    price1 = price1 + list[i].price;
  }
  return price1;
}

var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

var shoppingList3 = [
    { itemName : 'Coke', price : 18.50 },
    { itemName : 'Muffins', price : 13.50 },
    { itemName : 'Cheese', price : 19.50 },
    { itemName : 'Donuts', price : 12.50},
    { itemName : 'Boerewors Roll', price : 16.50}
];

assert.equal(shoppingList(shoppingList1), 37.50);
assert.equal(shoppingList(shoppingList2), 58);
assert.equal(shoppingList(shoppingList3), 80.50);

// console.log(shoppingList(shoppingList1));
// console.log(shoppingList(shoppingList2));
// console.log(shoppingList(shoppingList3));
