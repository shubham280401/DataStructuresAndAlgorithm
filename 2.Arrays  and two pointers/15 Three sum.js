var threeSum = function (nums) {
  nums.sort((x, y) => x - y);
  let n = nums.length;
  let c = 0;
  let triplet = [];
  //   if (n < 3) {
  //     return false;
  //   }

  while (c < n - 2) {
    let i = c + 1;
    let j = n - 1;
    let target = nums[c] * -1;
    while (i < j) {
      if (nums[i] + nums[j] == target) {
        triplet.push([nums[c], nums[i], nums[j]]);
        i++; //can do anything i++ or j--
        while (i < j && nums[i] === nums[i - 1]) i++;
        while (i < j && nums[j] == nums[j - 1]) j--;
      } else if (nums[i] + nums[j] > target) {
        j--;
      } else i++;
    }
    c++;
    while (c < n - 2 && nums[c] === nums[c - 1]) c++;
  }
  return triplet;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * var threeSum = function (nums) {
  let n = nums.length;
  nums.sort((x, y) => x - y);

  let triplet = [];
  for (let c = 0; c < n - 2; c++) {
    if (nums[c] !== nums[c - 1] || c == 0) {
      let i = c + 1,
        j = n - 1;
      let sum = nums[i] + nums[j];
      let target = -nums[c];
      while (i < j) {
        if (sum == target) {
          triplet.push([nums[c], nums[i], nums[j]]);
          while (i < j && nums[i] == nums[i + 1]) i++;
          while (i < j && nums[j] == nums[j - 1]) j--;
          i++;
          j--;
        } else if (sum > target) {
          j--;
        } else {
          i++;
        }
      }
    }
  }
  return triplet;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
Certainly! Let's walk through the threeSum function execution step by step with the input [-1, 0, 1, 2, -1, -4]:

Sorting the Array:

Original Array: [-1, 0, 1, 2, -1, -4]
Sorted Array: [-4, -1, -1, 0, 1, 2]
Outer Loop (c Pointer) Execution:

Iteration 1 (c = 0, nums[c] = -4):

Initialize i = 1 and j = 5 (pointers for the remaining array).

Calculate the target value: target = -(-4) = 4.

Inner Loop Execution:

Check nums[i] + nums[j]:
nums[1] + nums[5] = -1 + 2 = 1 (not equal to target).
Since the sum is less than the target, increment i.
Check nums[i] + nums[j]:
nums[2] + nums[5] = -1 + 2 = 1 (not equal to target).
Increment i again.
... Continue until i becomes greater than or equal to j.
Increment c to 1, skipping duplicates (-4 is not equal to -1).

Iteration 2 (c = 1, nums[c] = -1):

Initialize i = 2 and j = 5.

Calculate the target value: target = -(-1) = 1.

Inner Loop Execution:

Check nums[i] + nums[j]:

nums[2] + nums[5] = -1 + 2 = 1 (equal to target).
Add the triplet [-1, -1, 2] to the result.
Increment i while skipping duplicates.
... Continue until i becomes greater than or equal to j.

Increment c to 2, skipping duplicates (-1 is not equal to 0).

Iteration 3 (c = 2, nums[c] = -1):

Initialize i = 3 and j = 5.

Calculate the target value: target = -(-1) = 1.

Inner Loop Execution:

Check nums[i] + nums[j]:

nums[3] + nums[5] = 0 + 2 = 2 (not equal to target).
Increment i.
... Continue until i becomes greater than or equal to j.

Increment c to 3, skipping duplicates (-1 is not equal to 1).

Iteration 4 (c = 3, nums[c] = 0):

Initialize i = 4 and j = 5.

Calculate the target value: target = -(0) = 0.

Inner Loop Execution:

Check nums[i] + nums[j]:

nums[4] + nums[5] = 1 + 2 = 3 (not equal to target).
Increment i.
... Continue until i becomes greater than or equal to j.

Increment c to 4, skipping duplicates (0 is not equal to 1).

Iteration 5 (c = 4, nums[c] = 1):

Initialize i = 5 and j = 5.

Calculate the target value: target = -1.

Inner Loop Execution:

Check nums[i] + nums[j]:

nums[5] + nums[5] = 2 + 2 = 4 (not equal to target).
Increment i.
... Continue until i becomes greater than or equal to j.

Increment c to 5, skipping duplicates (1 is not equal to 2).

Iteration 6 (c = 5, nums[c] = 2):

Since c reaches the end of the array, the outer loop stops.
Result:

The result array contains unique triplets: [[ -1, -1, 2 ], [ -1, 0, 1 ]].
This algorithm efficiently finds unique triplets with a time complexity of O(n^2).
 */
