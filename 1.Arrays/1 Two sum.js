/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */
var twoSum = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 3, 4, 5], 9));

var twoSumUsingHash = function (nums, target) {
  let mp = {};
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let compliment = target - nums[i]; //compliment is being checked in mp
    if (compliment in mp) {
      return [i, mp[compliment]]; //it will return the value of the given key
    } else {
      mp[nums[i]] = i;
    }
  }
};
console.log(twoSumUsingHash([2, 3, 4, 5], 9));
