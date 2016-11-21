var shoppingList = [
  { itemName : 'Milk 500ml', qty : 2},
  { itemName : 'Bread', qty : 1},
  { itemName : 'Rolls', qty : 6},
  { itemName : 'Fanta 1L', qty : 2},
];

shoppingList.push({
  itemName : 'Coke 1L',
  qty : 3});

  var barOne = {
    itemName : 'Bar One',
    qty : 3};

shoppingList.push(barOne);
// console.log(shoppingList)
console.log('shopping list: ');
for (var i = 0; i < shoppingList.length; i++){
  var listItem = shoppingList[i];
  console.log(listItem.itemName + " " + listItem.qty);
}
