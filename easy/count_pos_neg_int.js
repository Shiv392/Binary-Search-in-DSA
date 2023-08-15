// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:
// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
var maximumCount = function(nums) {
    //brute force
    // let pos=0,neg=0;
    // nums.forEach(ele=>{
    //     if(ele>0) pos++;
    //     else if(ele<0) neg++;
    // })
    // return Math.max(pos,neg)

    //binary search
    return Math.max(upper_bound(nums), lower_bound(nums));
};
// binary search for the index of largest(in value) negative number
function upper_bound(nums) { 
    if(nums[0] >= 0 ) return 0;
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.ceil((left + right) / 2);
      if (nums[mid] < 0) left = mid;
      else right = mid - 1;
    }
    return left + 1;
}

// binary search for the index of smallest positive number
function lower_bound(nums) {
    if(nums[nums.length - 1] <= 0) return 0
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) right = mid;
      else left = mid + 1;
    }
    return nums.length - left;
}