/**
 * 217. Contains Duplicate
Attempted
Easy
Topics
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
var containsDuplicate = function (nums) {
  let mp = {};
  for (let i = 0; i < nums.length; i++) {
    if (mp[nums[i]]) {
      mp[nums[i]] += 1;
    } else {
      mp[nums[i]] = 1;
    }
  }

  let c = 0;
  while (c < nums.length) {
    if (mp[nums[c]] > 1) {
      return true;
    }
    c++;
  }
  return false;

  //   for (let key in mp) {
  //     if (mp[key] > 1) {
  //       return true;
  //     } else return false;
  //   }
};
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4, 6, 5, 4, 7, 8, 9, 6, 3, 2, 4, 5]));

/**
 * var containsDuplicate = function(nums) {
    let mp = {};

    for (let i = 0; i < nums.length; i++) {
        if (mp[nums[i]]) {
            mp[nums[i]] += 1;
        } else {
            mp[nums[i]] = 1;
        }
    }

    for (let key in mp) {
        if (mp[key] > 1) {
            return true;
        }
    }

    return false;
};

 */
