var shoppingList = [
  { itemName : 'Milk 500ml', qty : 2},
  { itemName : 'Bread', qty : 1},
  { itemName : 'Rolls', qty : 6},
  { itemName : 'Fanta 1L', qty : 2},
];

var priceMap = {
  'Milk 500ml' : 7.50,
  'Bread' : 12.75,
  'Rolls' : 1.50,
  'Fanta 1L' : 13.35
};

for (var i = 0; i < shoppingList.length; i++){
  var listItem = shoppingList[i];
  var itemName = listItem.itemName;

  var itemPrice = priceMap[itemName];

  listItem.totalPrice = listItem.qty * itemPrice;
}

console.log(shoppingList);
