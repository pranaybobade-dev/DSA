/**
 * Problem Statement:
 * Write a function that takes an integer and returns its square.
 * Call this function and print the result. Square(x) is a function
 * that computes the square of a number. It returns the result instead
 * of printing it.
 *
 * Example:
 * Input: 3
 * Process: square(3) = 3 × 3 = 9
 * Output: The square is: 9
 */

function squareNumber(num) {
  return Math.pow(num, 2);
}
let res = squareNumber(3);
console.log(res);
