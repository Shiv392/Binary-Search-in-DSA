// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0;
    let rigth=nums.length-1;
    while(left<=rigth){
        let mid=Math.floor((left+rigth)/2);
     if(nums[mid]==target) return mid;
     if(nums[left]<=nums[mid]){
         if(nums[left]<=target&&target<=nums[mid]){
             rigth=mid-1; //moving right to left direction
         }
         else {
             left=mid+1;   //moving left to next of mid
         }
     }
     else{
         if(nums[mid]<=target&&target<=nums[rigth]){
             left=mid+1;
         }
         else rigth=mid-1;
     }
    }
    return -1;
 };