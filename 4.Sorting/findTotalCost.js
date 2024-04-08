function findTotalCost(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  totalCost = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    totalCost += totalSum;
    totalSum -= arr[i];
  }
  return totalCost;
}

console.log(findTotalCost([4, 1, 6]));
