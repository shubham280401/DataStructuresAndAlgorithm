/**
 * 151. Reverse Words in a String
Solved
Medium
Topics
Companies
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 */

var reverseWords = function (s) {
  let arr = s.split(" ").filter((e) => e !== ""); //It forms array and filter removes empty strings if present
  let n = arr.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    let storeLeft = arr[left]; //Stores the left value
    arr[left] = arr[right]; //assigns the value to right
    arr[right] = storeLeft; //left and right both left with the value of right thus assign storedLeft value to right
    left++; //move the pointers further
    right--;
  }
  return arr.join(" "); //return the reversed words
};

var reverseWords = function (s) {
  let str = s.split(" ");
  let output = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i]) output += (output ? " " : "") + str[i];
  return output;
};
