/*
https://leetcode.com/problems/zigzag-conversion/
Difficulty: Medium
question and example are below the code
*/

function convert(s: string, numRows: number): string {
    const charArray = [...s];           // make the string to char array
    let retStr = "";                    // to return
    for (let i = 0; i < numRows; i++) { 
        for (let j = i; j < charArray.length ; j += numRows === 1 ? 1 : (2 * (numRows - 1))) { 
            retStr += charArray[j];                                                 // add the character in vertical line of the row
            for(let k = 1; k < numRows - 1; k++) {                                  // if it has diagonal line, add the character 
                if(i == k && charArray[j + (2 * (numRows - 1)) - (k * 2)]) {
                    retStr += charArray[j + (2 * (numRows - 1)) - (k * 2)];
                    break;                                                          // as diagonal line has one character maximum for each vertical line, if it finds one, break the for loop
                }
            }
        }

    }
    return retStr;
};

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows as 3 like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

*/