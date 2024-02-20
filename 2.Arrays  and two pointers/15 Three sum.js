var threeSum = function (nums) {
  nums.sort((x, y) => x - y);
  let n = nums.length;
  let c = 0;
  let triplet = [];
  //   if (n < 3) {
  //     return false;
  //   }

  while (c < n) {
    let i = c + 1;
    let j = n - 1;
    let target = nums[c] * -1;
    while (i < j) {
      if (nums[i] + nums[j] == target) {
        triplet.push([nums[c], nums[i], nums[j]]);
        i++;
        while (i < j && nums[i] === nums[i - 1]) i++;
      } else if (nums[i] + nums[j] > target) {
        j--;
      } else i++;
    }
    c++;
    while (c < n && nums[c] === nums[c - 1]) c++;
  }
  return triplet;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
