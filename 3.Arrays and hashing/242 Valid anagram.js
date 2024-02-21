/**
 * 242. Valid Anagram
Solved
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  //prpare freq map of s
  const mp = {}; //make an empty frequency map
  for (let i = 0; i < s.length; i++) {
    //iterate over the s string and increment if present or if first occurence found then make key and assign value as 1
    if (mp[s[i]]) {
      mp[s[i]] += 1;
    } else {
      mp[s[i]] = 1;
    }
  }
  //this loop matches the character of string t with the map
  for (let i = 0; i < t.length; i++) {
    if (mp[t[i]] === undefined) {
      //here if the value is not present then simply return false
      return false;
    } else {
      mp[t[i]] -= 1; //if occurence found remove the occurence i.e. decrement by 1
      if (mp[t[i]] == 0) {
        delete mp[t[i]]; //if the value becomes zero then delete the key
      }
    }
  }

  return Object.keys(mp).length == 0; //here it checks if the value inside mp is 0 or not means it will depict if the t is balanced with s
};
console.log(isAnagram("anagram", "nagaram"));
