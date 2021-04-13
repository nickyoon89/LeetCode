/*
https://leetcode.com/problems/string-to-integer-atoi/
Difficulty: Medium
question and example are below the code
*/

function myAtoi(s: string): number {
    if(s.length > 0 || s.length <= 200){                            // string length check
        let index = 0;
        let strNum : string = s.trim();                             // remove whitespace
        let isPositive = strNum[0] === '-' ? false : true;          // check if it is positive or not
        let retStrNum : string = "";
        let retNum : number;
        let maxNum : number = Math.pow(2,31) - 1;                   // maximum number in range
        let minNum : number = -Math.pow(2,31);                      // minimum number in range
        if(!isPositive || strNum[0] === "+") {                      // remove "+" or "-"
            strNum = strNum.substr(1);
        }
        while("0123456789".includes(strNum[index])){                // check if it is number character by character until it is not
            retStrNum += strNum[index];
            index++;
        }
        if(retStrNum.length < 1) {                                  // if there is no number at the beginning, return 0
            return 0;
        } else {
            retNum = isPositive? parseInt(retStrNum) : -parseInt(retStrNum);
            if(retNum > maxNum ) return maxNum; 
            else if(retNum < minNum) return minNum;
            else return retNum;
        }
    } else {
        return 0;
    }
};

/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. 
This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. 
Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/