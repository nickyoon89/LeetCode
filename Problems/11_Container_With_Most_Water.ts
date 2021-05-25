/*
https://leetcode.com/problems/container-with-most-water/
Difficulty: Medium
question and example are below the code
*/

function maxArea(height: number[]): number {
    let max = 0;
    let heightOrigin = [...height];
    let secondMaxHeight = height.sort(function(a,b) {return b-a;})[1]; // get the second highest value to check maximum area value
    for (let i = 0; i < heightOrigin.length-1; i++) {
        const height1 = heightOrigin[i];
        if(max > secondMaxHeight * (heightOrigin.length - i)) break; // if max is already bigger than possible maximum area, skip the for loop
        for (let j = heightOrigin.length - 1; j > 0; j--) {
            if(max > secondMaxHeight * (j - i)) break; // if max is already bigger than possible maximum area, skip the for loop
            const height2 = Math.min(heightOrigin[j],heightOrigin[i]); 
            const area = height2 * (j - i);
            if(max < area) max = area; // assign area value if it is bigger than former max
        }
    }
    return max;
};

/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, 
together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Example 3:
Input: height = [4,3,2,1,4]
Output: 16

Example 4:
Input: height = [1,2,1]
Output: 2
*/