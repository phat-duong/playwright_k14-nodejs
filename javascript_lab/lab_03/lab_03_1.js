const intArr = [1, 2, 3, 4, 5];
let even_count = 0;
let odd_count = 0;

for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] % 2 == 1) odd_count++;
  else {
    even_count++;
  }
}

console.log("Even numbers = " + even_count);
console.log("Odd numbers = " + odd_count);
