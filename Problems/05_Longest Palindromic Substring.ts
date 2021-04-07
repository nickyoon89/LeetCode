/*
https://leetcode.com/problems/longest-palindromic-substring/
Difficulty: Medium
question and example are below the code
*/

function longestPalindrome(s: string): string {
    for (let l = s.length; l > 0; l--) {                    // check from the longest possibility
        for (let i = 0; i < s.length - l + 1; i++) {        // i = substring start point
            const subStr = s.substr(i, l);
            if( subStr[0] === subStr[l-1] && [...subStr].reverse().join('') === subStr) { // check if it is palindrome 
                return subStr; 
            }
        }
    }
};

/*
Given a string s, return the longest palindromic substring in s.

Example :
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/