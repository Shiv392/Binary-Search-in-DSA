// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
// Return the single element that appears only once.
// Your solution must run in O(log n) time and O(1) space.
// Example 1:
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
var singleNonDuplicate = function(nums) {
    //binary search
     let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = (left + right) >>> 1;
        if (mid % 2 !== 0) mid--;
        const value = nums[mid];
        if (value !== nums[mid + 1] && value !== nums[mid - 1]) {
            return value;
        }
        if (value === nums[mid - 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
   
   //two pointer approch.
    //  let left=0,right=nums.length-1;
    //  while(left<=right){
    //      if(nums[left]==nums[left+1]) left+=2;
    //      else return nums[left];
    //      if(nums[right]==nums[right-1]) right-=2;
    //      else return nums[right];
    //  }
    //  return -1;
};