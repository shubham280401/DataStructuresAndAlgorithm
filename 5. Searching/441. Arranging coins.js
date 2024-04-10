/**
 * 441. Arranging Coins
Solved
Easy
Topics
Companies
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1
 */
var arrangeCoins = function (n) {
  let lo = 1,
    hi = n;
  let ans = 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let value = Math.floor((mid * (mid + 1)) / 2);
    if (value <= n) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
};
console.log(arrangeCoins(10));
