/**
 * Write a program that defines a function to calculate the sum of two integers
 * and prints the result. Call this function by passing two integer values.
 *
 * Example:
 * Input: 5, 3
 * Process: a + b => 5 + 3 = 8
 * Output: 8
 */

function sumOfTwoIntegers(a, b) {
  if (!a && !b) return "Please Pass The values";
  return a + b;
}

let result = sumOfTwoIntegers(5, 3);
console.log(result);
