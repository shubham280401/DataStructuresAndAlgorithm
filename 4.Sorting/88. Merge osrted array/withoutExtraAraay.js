var merge = function (nums1, m, nums2, n) {
  //   let result = Array(m + n);
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  return nums1;
};

console.log(merge([5, 6, 2, 4, 3, 7, 8, 0, 0, 0], 7, [99, 99, 99], 3));
