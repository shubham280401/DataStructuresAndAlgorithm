function fibo(n) {
  if (n <= 1) return n;
  let last = fibo(n - 1);
  let slast = fibo(n - 2);
  return last + slast;
}

console.log(fibo(4));
