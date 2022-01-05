let someString = "szxzshpswsp";
let lettersString = someString
  .split("")
  .filter((char) => /[a-zA-Z]/.test(char));
let testObj = {};
for (let letter of lettersString) {
  let counter = 0;
  for (let i = 0; i < lettersString.length; i++) {
    if (letter === lettersString[i]) {
      counter++;
    }
  }
  testObj[letter] = counter;
}

for (const test in testObj) {
  for (const innerTest in testObj) {
    if (testObj[innerTest] < testObj[test]) {
      delete testObj[innerTest];
    }
  }
}

for (const letter in testObj) {
  console.log(
    `Letter that is most often used "${letter}", the number of it's occurences in the string "${testObj[letter]}".`
  );
}


// Old

// let someString = "szxzshpswsp";
// let testObj = {};
// for (let letter of someString) {
//   testObj[letter] = testObj.hasOwnProperty(letter) ? testObj[letter] + 1 : 1;
// }
// let letter = Object.keys(testObj).reduce((a, b) =>
//   testObj[a] > testObj[b] ? a : b
// );
// console.log(
//   `Letter that is most often used "${letter}", the number of it's occurences in the string "${
//     someString.split(letter).length - 1
//   }".`
// );
