/**
 * 75. Sort Colors
Solved
Medium
Topics
Companies
Hint
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 */

var sortColors = function (nums) {
  // nums.sort((x,y)=>x-y)   //alternate
  let n = nums.length;
  let low = 0,
    high = n - 1; //using two pointers at extreme right and left
  let i = 0; //iterator to iterate through array
  while (i <= high) {
    //here we are writing <=high because we never need to go beyond the high
    if (nums[i] === 0) {
      let a = nums[low];
      nums[low] = nums[i]; //if element is 0 then swap it with low
      nums[i] = a;
      i++;
      low++; //then increment i and low tonext
    } else if (nums[i] === 1) {
      i++; //skip if current element is 1
    } else if (nums[i] === 2) {
      let b = nums[high];
      nums[high] = nums[i];
      nums[i] = b; //if element is 2 swap it with high
      high--; //decrement high as it is already swapped
    }
  }
  // Dutch National Flag algorithm.
};

/**
 * The loop condition i <= high ensures that we process every element in the array until the i pointer crosses or meets the high pointer. This is because the elements to the right of the high pointer are already correctly placed, and we don't need to revisit them.

Now, if we used i <= n-1, it wouldn't accurately represent the range we want to process. The n-1 condition doesn't consider the movement of the high pointer, and we might end up revisiting elements that have already been correctly placed.

Using i <= high ensures that we only process the elements until the high pointer, preventing unnecessary iterations over the elements that have already been sorted.

I hope this clarifies the reasoning behind the loop condition. If you have further questions or if something is unclear, feel free to ask!
 */
