function printShoppingList(list){
  for (i in list){
    console.log(list[i].itemName + ' @ ' + 'R' + list[i].price);
  }
}

var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];
printShoppingList(shoppingList);
