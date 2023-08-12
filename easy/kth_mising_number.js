// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
// Example 1:
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
var findKthPositive = function(nums, k) {
    let arr=[];
    let last=nums[nums.length-1];
    for(let i=1;i<last;i++){
        if(!nums.includes(i)){
       arr.push(i);
        }
    }
    for(let i=last+1;i<10000;i++){
        arr.push(i);
    }
    return arr[k-1];
 };