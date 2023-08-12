// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
// You must decrease the overall operation steps as much as possible.
// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
var search = function(nums, target) {
    // return nums.includes(target)
    let left=0,right=nums.length-1;
    while(left<=right){
   let mid=~~((left+right)/2);
   if(nums[mid]==target) return true;
   else if(nums[left]<nums[mid]){
       
       if(nums[left]<=target&&target<nums[mid]){
           right=mid-1;
       }
       else {
          left=mid+1;
       }
   }
   else if(nums[mid]<nums[left]){
      if(nums[mid]<target&&nums[left]>target) left=mid+1;
     else right=mid-1;
    }
    else {
        left++;
    }
    }
    return false;
    
};