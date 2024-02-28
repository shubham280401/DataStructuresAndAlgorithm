/**
 * Armstrong Number
Programming
Math
Very Easy
60.3% Success

30

8

Bookmark
Asked In:
Problem Description
 
 

Given an integer A, check if it is an Armstrong number of not.
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.


Problem Constraints
1 <= A <= 109


Input Format
Given an integer A.


Output Format
Return an integer.


Example Input
Input 1:
A = 371
Input 2:

A = 123


Example Output
Output 1:
1
Output 2:

0
 */

function armstrong(A) {
  let sum = 0;
  let given = A;
  let str = A.toString();
  let n = str.length;
  while (given > 0) {
    let digit = given % 10;
    sum = sum + digit ** n;
    given = Math.trunc(given / 10);
  }
  if (A === sum) return 1;
  else return 0;
}
