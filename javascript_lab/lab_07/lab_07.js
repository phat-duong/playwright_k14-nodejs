const readline = require("readline-sync");
const string = getUserInput();

function getUserInput() {
  return readline.question("Input string: ");
}

function countWord(string) {
  let words = string.replace(/,/gi, "").split(" ");
  let wordMap = {};

  for (const word of words) {
    if (wordMap[word] === undefined) {
      wordMap[word] = 1;
    } else {
      wordMap[word] += 1;
    }
  }
  return wordMap;
}

console.log(countWord(string));
