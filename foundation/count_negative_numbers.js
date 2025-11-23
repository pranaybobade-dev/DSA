// Problem Statement:
// Write a function that returns the number of negative numbers in an array.

let arr = [1, 2, 3, - 3, 0, -4];
function negativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(negativeNumbers(arr));
