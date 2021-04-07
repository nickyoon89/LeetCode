/*
https://leetcode.com/problems/median-of-two-sorted-arrays/
Difficulty: Hard
question and example are below the code
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums = nums1.concat(nums2).sort((a,b) => a < b ? -1 : a > b ? 1 : 0);   // combine two arrays and sort 
    let length = nums.length;                                                   // check the length of combined array
    if(length % 2 == 1) {
        return nums[(length-1)/2];                          // length - odd number : return the middle number
    } else {
        return (nums[(length/2) - 1]+nums[(length/2)])/2;   // length - even number : return the average of two middle number
    }
};

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/