function findElement(arr, x) {
  let n = arr.length;
  let lo = 0,
    hi = n - 1;
  let ans = arr.length;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < x) {
      lo = mid + 1; //diacard left half
    } else {
      ans = mid;
      hi = mid - 1;
    }
  }
  return ans;
}
console.log(findElement([1, 1, 3, 3, 3, 4, 5, 5, 7], 5));
