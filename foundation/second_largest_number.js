/**
 * Problem Statement:
 * Write a function secondLargest(arr) that returns the second largest
 * distinct number in an array.
 *
 * Requirements:
 * - The array must contain at least two elements.
 * - If all elements are equal, return: "No second largest found."
 * - If the array has fewer than two elements, return:
 *   "Array should have at least two numbers."
 *
 * Examples:
 * Input: [0, 3, 5, 2, 7, 9]  → Output: 7
 * Input: [4, 4, 4, 4]        → Output: "No second largest found"
 * Input: [5]                 → Output: "Array should have at least two numbers"
 * Input: [10, 20]            → Output: 10
 */

let arr = [0, 3, 5, 2, 7, 9, 9];

function secondLargest(nums) {
  if (nums.length < 2) return "Array should have at least two numbers";
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest === -Infinity
    ? "No Second Largest Element Found"
    : secondLargest;
}
console.log(secondLargest(arr));
