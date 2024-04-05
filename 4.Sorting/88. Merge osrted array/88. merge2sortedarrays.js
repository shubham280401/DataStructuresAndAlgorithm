var merge = function (nums1, m, nums2, n) {
  let result = Array(m + n);
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      k++;
      j++;
    }
  }
  while (j < n) {
    result[k] = nums2[j];
    k++;
    j++;
  }
  while (i < m) {
    result[k] = nums1[i];
    k++;
    i++;
  }
  k = 0;
  while (k < m + n) {
    nums1[k] = result[k];
    k++;
  }
  return nums1;
};

console.log(merge([5, 6, 2, 4, 3, 7, 8, 0, 0, 0], 7, [99, 99, 99], 3));
