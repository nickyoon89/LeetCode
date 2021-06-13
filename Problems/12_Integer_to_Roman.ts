/*
https://leetcode.com/problems/integer-to-roman/
Difficulty: Medium
question and example are below the code
*/

function intToRoman(num: number): string {
    let returnRoman = "";                                       // Roman String to return
    let romanWords = ["M", "D", "C", "L", "X", "V", "I"];       // Roman symbol in array
    let curStds = [1000, 100];                                  // [number the current symbol represents, standard unit]
    let curNum;                                                 // how many symbol should be added
    let index = 0;
    while (index < romanWords.length) {
        curNum = Math.floor(num/curStds[0]);
        num = num % curStds[0];                                             // subtract calculated amount from the given number
        for (let i = 0; i < curNum; i++) returnRoman += romanWords[index];  // add symbol
        if(num >= (curStds[0]-curStds[1])) {                                // check the exception such as 900 or 400.. etc
            num -= (curStds[0]-curStds[1]);                                 // subtract calculated amount from the given number
            if(index % 2 === 0){                                            // add right symbols in case of exceptions
                returnRoman += (romanWords[index+2] + romanWords[index]);
            } else {
                returnRoman += (romanWords[index+1] + romanWords[index]);
            }
        } 
        if(index % 2 === 0){    // change numbers from curStds array
            curStds[0] /= 2;
        } else {
            curStds[0] /= 5;
            curStds[1] /= 10;
        }
        index++;
    }
    return returnRoman;
};

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 */