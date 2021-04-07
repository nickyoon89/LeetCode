/*
https://leetcode.com/problems/two-sum/
Difficulty: Easy
question and example are below the code
*/

function twoSum(nums: number[], target: number): number[] {
    let toReturn : number[];
    toReturn = [];
    if((nums.length < 2 || nums.length > Math.pow(10,3)) ||
        (target < -Math.pow(10, 9) || target > Math.pow(10,9))){ // check if the target and nums.length is out of range
            return;
        }
    else {
        for (let i = 0; i < nums.length - 1; i++) {
            const num1 = nums[i];
            target - num1
            for (let j = i + 1; j < nums.length; j++) {
                const num2 = nums[j];
                if(num1 < -Math.pow(10,9) || num1 > Math.pow(10,9) || num2 < -Math.pow(10,9) || num2 > Math.pow(10,9)) return; // check if each number is out of range
                if(num1 + num2 == target) { // check if the sum is match with target number
                    return [i , j];
                }
            }
        }
    }
};

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Constraints:
2 <= nums.length <= 10^3
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

Example :
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/