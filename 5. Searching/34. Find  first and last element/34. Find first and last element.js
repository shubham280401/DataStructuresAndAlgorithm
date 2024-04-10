/**
 * 34. Find First and Last Position of Element in Sorted Array
Solved
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function lowerBound(arr, x) {
  let n = arr.length;
  let hi = n - 1,
    lo = 0;
  let ans = arr.length;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < x) {
      //discard the left half
      lo = mid + 1;
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }
  return ans;
}

function upperBound(arr, x) {
  let n = arr.length;
  let hi = n - 1,
    lo = 0;
  let ans = arr.length;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] <= x) {
      lo = mid + 1;
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }
  return ans;
}
var searchRange = function (nums, target) {
  let lb = lowerBound(nums, target);
  // let n=nums.length;
  let result = Array(2);
  if (lb == nums.length || nums[lb] !== target) {
    result[0] = -1;
    result[1] = -1;
    return result;
  } else {
    let ub = upperBound(nums, target);
    result[0] = lb;
    result[1] = ub - 1;
    return result;
  }
};
