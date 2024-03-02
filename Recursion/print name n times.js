//Print 1 to n using recursion and backtracking
function recursion(i, n) {
  if (i > n) {
    return "Iteration done";
  }
  console.log("Iteration: ", i);
  recursion(i + 1, n);
  return "done";
}

console.log(recursion(1, 3));
console.log(recursion(1, 0));
console.log(recursion(0, 3));
console.log(recursion(-1, 3));

function backtracking(i, n) {
  if (i < 1) return;
  backtracking(i - 1, n);
  console.log("Using backtrancking: ", i);
  return "done";
}

console.log(backtracking(4, 4));
