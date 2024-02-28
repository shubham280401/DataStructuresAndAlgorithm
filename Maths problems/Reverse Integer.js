/**
 * 7. Reverse Integer
Solved
Medium
Topics
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
 */

var reverse = function (x) {
  let revNo = 0;
  while (x !== 0) {
    let lastDigit = x % 10;
    revNo = revNo * 10 + lastDigit;
    if (revNo > 2 ** 31 - 1 || revNo < -(2 ** 31)) {
      return 0;
    }
    x = Math.trunc(x / 10);
  }
  return revNo;
};
console.log(reverse(-321));
