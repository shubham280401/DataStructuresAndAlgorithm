function smallOrEqual(A, B) {
  let n = A.length;
  let hi = n - 1,
    lo = 0;
  let ans = 0;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (A[mid] <= B) {
      ans = mid + 1;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
}
console.log(smallOrEqual([5, 4, 3, 2, 1], 4));
