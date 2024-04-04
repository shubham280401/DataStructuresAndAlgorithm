function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let element = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = element;
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
