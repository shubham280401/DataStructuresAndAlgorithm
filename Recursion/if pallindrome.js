//check palindrome

let str = "madam";
let n = str.length;
function checkPallindrome(i) {
  if (i >= n / 2) return true;
  if (str[i] !== str[n - i - 1]) return false;
  checkPallindrome(i + 1);
  return true;
}

console.log(checkPallindrome(0));
