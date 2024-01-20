const arr = [12, 34, 1, 16, 28];
let temp;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}

console.log("Array sorts from min to max :", arr.sort());
