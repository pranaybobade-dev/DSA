/**
 * Write a function isPalindrome(x) that takes an integer x
 * and returns true if it reads the same backward and forward;
 * otherwise return false.
 *
 * Requirements:
 * - Handles both positive and negative integers.
 * - Returns false for negative numbers (not palindromes).
 * - Time Complexity: O(d) where d is the number of digits.
 * - Space Complexity: O(1) — only a few variables are used.
 *
 * Examples:
 * Input: 121  -> Output: true
 * Input: -121 -> Output: false
 * Input: 10   -> Output: false
 */

let num = 12;
function palindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
}

console.log(palindrome(num));
