function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    //to repeat the process we use this loop
    let isSwapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      //the loop of j is actually pushing the bigger element to the last
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped == false) return arr;
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
