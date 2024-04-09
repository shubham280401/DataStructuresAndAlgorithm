/**
 *
 * @param {the given input array inside which we need to find an element} arr
 * @param {*elem need to be found} x
 */
function binarySearch(arr, x) {
  let n = arr.length;
  let lo = 0,
    hi = n - 1;
  while (lo <= hi) {
    let mid = Math.floor(lo + (lo + hi) / 2);
    if (arr[mid] == x) {
      //we found indx at which x is present
      return mid;
    } else if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  //if loop ends and we never return in loop means elem is not present
  return -1;
}
// console.log("hi");
const arr = [-6, 1, 4, 7, 8, 9, 19, 22, 34];
console.log(binarySearch(arr, -6));
