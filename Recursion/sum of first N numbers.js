//sum of n numbers

function sumOfn(i, sum) {
  if (i < 1) {
    console.log(sum);
    return "done";
  }
  sumOfn(i - 1, sum + i);
  return "done";
}

console.log(sumOfn(3, 0));
