// return reverse of individual words in a string
// How Are You => woH era uoY

function reverseWords(originalString) {
  // split string into array of words
  var words = originalString.split(" ");

  // reverse each word
  var reversedWords = words.map(function (word) {
    return word.split("").reverse().join("");
  });

  console.log(reversedWords);

  // join reversed words into a string
  return reversedWords.join(" ");
}

console.log(reverseWords("How Are You!"));

// ================================================================================================

function reverse(str) {
  let strArr = str.split(".");
  let results = [];
  for (let i = 0; i < strArr.length; i++) {
    let reversed = [];
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      reversed.push(strArr[i][j]);
    }
    results.push(reversed.join(""));
  }
  return results.join(".");
}

console.log(reverse("i.like.this.program.very.much"));

// ================================================================================================
// Using maps

function reverseMaps(str) {
  str = str.split(" ");
  let result = [];

  str.map((word) => {
    const reversed = word.split("").reverse().join("");
    result.push(reversed);
  });

  return result.join(" ");
}
console.log(reverseMaps("How Are You"));
