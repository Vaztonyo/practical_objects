const assert = require('assert')

function mostWordsEndWith(string) {
  var lastLetters = {};
  var theLastLetter = [];
  var char = '';
  var counter = 0;
  var result = {
    letter: "",
    letterCount: 0
  };

  var ourArr = string.split(' ');

  for (var i = 0; i < ourArr.length; i++) {
    var findLast = ourArr[i][ourArr[i].length - 1]
    theLastLetter.push(findLast);
  };
  // console.log(theLastLetter)
  for (var i = 0; i < theLastLetter.length; i++) {
    // console.log(theLastLetter[i]);
    var character = theLastLetter[i];
    // console.log(character);
    if (lastLetters[character]) {
      lastLetters[character]++;
      if (lastLetters[character] > counter) {
        counter = lastLetters[character];
        char = character;
      }
    } else {
      lastLetters[character] = 1;
    }
  };

  // Below is a map that you can extract to get a commonly found letter from that sentence
  result.letter = char;
  result.letterCount = counter;
  return result;
};

var sentence = 'Down by the river there is a man that quiver and shiver , but he needs to deliver a packet that he think is a big racket and a packet of gum .'

assert.deepEqual(mostWordsEndWith(sentence), { letter: 't', letterCount: 6 });
// console.log(mostWordsEndWith(sentence));
