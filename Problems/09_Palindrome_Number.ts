/*
https://leetcode.com/problems/palindrome-number/
Difficulty: Easy
question and example are below the code
*/

function isPalindrome(x: number): boolean {
    let strNum = x.toString();
    // if(strNum.length > 0 && strNum[0] === "-" || strNum[0] === "+") strNum = strNum.substr(1);                   // in case, if I want to ignore - or + sign
    let ret = (strNum[0] === strNum[strNum.length - 1] && strNum ===  strNum.split("").reverse().join("")) ? true : false;  // check if the reversed number is same as the original number
    return ret;
};

/*

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/