// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
var searchRange = function(nums, target) {
    const firstocc=(nums)=>{
        let left=0,right=nums.length-1,first=-1;
        while(left<=right){
          let mid=~~((left+right)/2);
          if(nums[mid]>=target) right=mid-1;
          else left=mid+1;
          if(nums[mid]==target) first=mid;
        }
        return first;
    }
    const lastocc=(nums)=>{
        let left=0,right=nums.length-1,last=-1;
        while(left<=right){
            let mid=~~((left+right)/2);
           if(nums[mid]<=target) left=mid+1;
           else right=mid-1;
           if(nums[mid]==target) last=mid;
        }
        return last;
    }
    return [firstocc(nums),lastocc(nums)];
};