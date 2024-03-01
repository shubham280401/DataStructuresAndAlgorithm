//Print  N to 1

function recursion(i, n) {
  if (i < 1) return;
  console.log(i);
  recursion(i - 1, n);
  return "done";
}

console.log(recursion(4, 3));

//Print 1 to n using backtracking

function backtracking(i, n) {
  if (i > n) return;
  backtracking(i + 1, n);
  console.log(i);
  return "done";
}
console.log(backtracking(1, 3));
