const intArr = [1, 2, 3, 4, 5];
let max = intArr[0];
let min = intArr[0];

for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] > max) {
    max = intArr[i];
  }
}
console.log("Maximum numbers = " + max);

for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] < min) {
    min = intArr[i];
  }
}
console.log("Minimum numbers = " + min);
