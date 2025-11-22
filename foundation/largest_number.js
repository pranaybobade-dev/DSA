/**
 * Problem Statement:
 * Write a function largestNumber(arr) that returns the largest number in an array.
 *
 * Requirements:
 * - The array must contain at least one element.
 * - If the array is empty, return: "Array should have at least one number."
 *
 * Examples:
 * Input: [3, 7, 2, 9, 5]   → Output: 9
 * Input: [10, 10, 10]      → Output: 10
 * Input: []                → Output: "Array should have at least one number"
 */

let arr = [0];
function largestNumber(nums) {
  if (nums.length === 0) return "Array should have at least one number";
  let largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

console.log(largestNumber(arr));
