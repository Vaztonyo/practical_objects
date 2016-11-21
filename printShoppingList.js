var printShoppingList = [
  { itemName : 'Bread', price : 11.00},
  { itemName : 'Milk', price : 7.00},
  { itemName : 'Bread', price : 19.50}
];

console.log('Shopping List:');

for (var i = 0; i < printShoppingList.length; i++){
  var listItem = printShoppingList[i];
  console.log(listItem.itemName + " @ " + "R" + listItem.price);
};
