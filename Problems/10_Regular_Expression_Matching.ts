/*
https://leetcode.com/problems/regular-expression-matching/
Difficulty: Hard
question and example are below the code
*/

function isMatch(s: string, p: string): boolean {
    let pArray = p.split("");
    let sArray = s.split("");
    let index : number = sArray.length - 1;
    let isAst : boolean = false;
    for (let i = pArray.length - 1; i >= 0 ; i--) {
        const pattern = pArray[i];
        if(pattern === "*") {
            isAst = true;
            continue;
        } else {
            if(!isAst) {
                if(pattern === ".") index--;
                else {
                    if (pattern !== sArray[index]) return false;
                    else index--;
                }
            } else {
                isAst = false;
                let strGroup = "";
                let nextChr = i === 0 ? null : pArray[i-1];
                if(pArray[i] === "."){
                    strGroup = "abcdefghijklmnopqrstuvwxyz";
                } else {
                    strGroup = pArray[i];
                }
                while (nextChr != sArray[index] && strGroup.includes(sArray[index])){
                    index --;
                }
                index++;
            }
        }
    };
    if (index === 0) return true;
    else return false;
};

/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where: 

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Constraints:

0 <= s.length <= 20
0 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.
*/