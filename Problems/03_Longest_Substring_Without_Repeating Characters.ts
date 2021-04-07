/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
Difficulty: Medium
question and example are below the code
*/

function lengthOfLongestSubstring(s: string): number {
    const charArray = [...s];                       // make char array
    let substringLength : number;                   // current substring length
    let longestLength = 0;                          // longest substring length
    for (let i = 0; i < charArray.length; i++) {
        const c1 = charArray[i];
        let subStr = [c1];                          // array of substring (char)
        if(i == 0) longestLength = 1;               // in case char array is just one character
        if(longestLength < substringLength) longestLength = substringLength;
        substringLength = 1;                        // current substring length initialize
        for (let j = i + 1; j < charArray.length; j++) {
            const c2 = charArray[j];
            if ( subStr.includes(c2)) break;        // if substring array includes current char, break
            else subStr.push(c2);                   // add current char to the substring array
            substringLength++;
        }
    }
    return longestLength;
};

/*
Given a string s, find the length of the longest substring without repeating characters.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

Example:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/