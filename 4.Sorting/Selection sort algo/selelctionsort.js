function selectionSort(arr) {
  let n = arr.length;
  /**
   * we have the unsorted region initially from index 0 so i
   * denotes start of unsorted region
   */
  for (let i = 0; i < n - 1; i++) {
    //we just want to go till n-1
    let min_idx = findMinElement(arr, i);
    if (min_idx !== i) {
      //min element and 1st elem of unsorted reg are diff then swap
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
  return arr;
}

/**
 *
 * this function finds out minimum element in the array from index [i,n-1]
 */
function findMinElement(arr, i) {
  let min_idx_el = i; //intially first no is minimum
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_idx_el]) {
      //if the curr element is smaller than the assumed min elem then we update the assumed min elem
      min_idx_el = j;
    }
  }
  return min_idx_el;
}
const arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr));
