function reversedWords(originalString) {
  let words = originalString.split(" ");
  console.log(words);
  let newString = "";
  for (let word of words) {
    for (let i = word.length - 1; i >= 0; i--) {
      if (
        (word[i].charCodeAt() > 47 && word[i].charCodeAt() < 58) ||
        (word[i].charCodeAt() > 64 && word[i].charCodeAt() < 91) ||
        (word[i].charCodeAt() > 96 && word[i].charCodeAt() < 123)
      ) {
        newString = newString + word[i];
      } else {
        newString = newString + word[i];
      }
    }
    newString = newString + " ";
  }
  return newString;
}

console.log(reversedWords("Hello")); //olleH
console.log(reversedWords("How are you")); // woH era uoy
console.log(reversedWords("How! ar@e yo$u")); // !woH e@ra u$oy
