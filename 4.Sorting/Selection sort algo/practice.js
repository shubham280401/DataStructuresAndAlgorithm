function selectionSort(arr) {
  let n = arr.length;
  /**
   * we have unsorted region initially from index 0
   * so i denotes the start of unsorted region
   */
  for (let i = 0; i < n - 1; i++) {
    let min_idx = findMinElement(arr, i);
    if (min_idx != i) {
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
}

function findMinElement(arr, i) {
  /**
   * this function finds index of min el in arr from index i to n-1
   */
  let min_idx_el = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_idx_el]) {
      min_idx_el = j;
    }
  }
  return min_idx_el;
}
const arr = [5, 4, 3, 2, 1, -1, -2];
selectionSort(arr);
console.log(arr);
