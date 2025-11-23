/**
 * Question: Reverse Integer with Overflow Check
 *
 * Write a function reverse(x) that takes a 32-bit signed integer
 * and returns its digits reversed. If the reversed value overflows
 * the 32-bit signed integer range, return 0.
 *
 * Requirements:
 * - Reverse the digits of a 32-bit signed integer.
 * - Return 0 if the result overflows.
 *
 * Constraints:
 * - Time Complexity: O(d) where d is the number of digits.
 * - Space Complexity: O(1) — constant space.
 *
 * Examples:
 * Input: 123
 * Output: 321
 *
 * Input: -123
 * Output: -321
 *
 * Input: 1534236469
 * Output: 0 (overflow)
 */
let num = -123;
function reverseInteger(n) {
  let nCopy = n;
  n = Math.abs(n);
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (reverse > 2 ** 31) return 0;

  return nCopy < 0 ? -reverse : reverse;
}

console.log(reverseInteger(num));
