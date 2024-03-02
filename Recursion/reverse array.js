//reverse an array
let arr = [1, 2, 3, 4, 5];
function reverseArray(i) {
  let n = arr.length;
  if (i >= n / 2) return;
  let temp = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = temp;
  reverseArray(i + 1);
  return arr;
}

console.log(reverseArray(0, arr));
