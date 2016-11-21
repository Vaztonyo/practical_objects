function findItemsOver20(list){
  var itemOver20 = [];
  var price1 = 0;
  for (i in list){
    if (list[i].price > 20){
      itemOver20.push(list[i])
    }
  }
   return itemOver20;
}

var itemList = [
    {name : 'apples', price : 10},
    {name : 'pears', price : 37},
    {name : 'bananas', price : 27},
    {name : 'apples', price : 3},
];

console.log(findItemsOver20(itemList))
