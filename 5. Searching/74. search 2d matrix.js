/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 74. Search a 2D Matrix
Solved
Medium
Topics
Companies
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length; //no. of rows
  let n = matrix[0].length; //no. of columns
  let lo = 0,
    hi = m * n - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
};
