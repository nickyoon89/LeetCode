/*
https://leetcode.com/problems/reverse-integer/
Difficulty: Easy
question and example are below the code
*/

function reverse(x: number): number {
    let numStr : string = Math.abs(x).toString();                               // number in absolute to string
    let reverseNum : number = parseInt(numStr.split("").reverse().join(""));    // reverse the string
    let retNum = x > 0 ? reverseNum : -reverseNum;                              // check if the number is positive or negative
    if((retNum > Math.pow(2, 31) -1) || (retNum < -Math.pow(2, 31))){           // check if the result is in range
        return 0;
    }
    return retNum;
};

/* 
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example:

Input: x = 123
Output: 321

*/


