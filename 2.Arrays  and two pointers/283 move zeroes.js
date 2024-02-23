/**
 * 
 * @param {283. Move Zeroes
Solved
Easy
Topics
Companies
Hint
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1} nums 
 * @returns 
 */

var moveZeroes = function (nums) {
  let n = nums.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

/**
 * Certainly! Let's go through each iteration again with the corrected logic:

Initial state:

nums = [2, 3, 4, 0, 1, 0]
n = 6
i = 0
j = 0
Iteration 1 (j = 0):

nums[0] is 2 (non-zero).

Swap nums[i] and nums[j]: No change since i and j are the same.
Increment i (i = 1) and j (j = 1).
Visualization:

css
Copy code
[2, 3, 4, 0, 1, 0]
 ^  ^
 i  j
Current values: i = 1, j = 1

Iteration 2 (j = 1):

nums[1] is 3 (non-zero).

Swap nums[i] and nums[j]: No change since i and j are the same.
Increment i (i = 2) and j (j = 2).
Visualization:

css
Copy code
[2, 3, 4, 0, 1, 0]
    ^  ^
    i  j
Current values: i = 2, j = 2

Iteration 3 (j = 2):

nums[2] is 4 (non-zero).

Swap nums[i] and nums[j]: No change since i and j are the same.
Increment i (i = 3) and j (j = 3).
Visualization:

css
Copy code
[2, 3, 4, 0, 1, 0]
       ^  ^
       i  j
Current values: i = 3, j = 3

Iteration 4 (j = 3):

nums[3] is 0.

Since it's 0, we do nothing and move to the next iteration.
Increment j (j = 4).
Visualization:

css
Copy code
[2, 3, 4, 0, 1, 0]
          ^  ^
          i  j
Current values: i = 3, j = 4

Iteration 5 (j = 4):

nums[4] is 1 (non-zero).

Swap nums[i] and nums[j]: nums[3] and nums[4].
Increment i (i = 4) and j (j = 5).
Visualization:

css
Copy code
[2, 1, 4, 0, 3, 0]
             ^  ^
             i  j
Current values: i = 4, j = 5

Iteration 6 (j = 5):

nums[5] is 0.

Since it's 0, we do nothing and move to the next iteration.
Increment j (j = 6).
Visualization:

css
Copy code
[2, 1, 4, 0, 3, 0]
                ^  ^
                i  j
Current values: i = 4, j = 6

Final Result:

After processing the entire array, the modified nums array is [2, 1, 4, 3, 0, 0].
All non-zero elements have been moved to the front, and the zeroes are at the end.




 */
