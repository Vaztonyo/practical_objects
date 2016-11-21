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
    { itemName : 'Coke', price : 18.00 },
    { itemName : 'Muffins', price : 12.00 },
    { itemName : 'Cheese', price : 19.50 },
    { itemName : 'Donuts', price : 11.50}
];

console.log(shoppingList(shoppingList1));
console.log(shoppingList(shoppingList2));
console.log(shoppingList(shoppingList3));
