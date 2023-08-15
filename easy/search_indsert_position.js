// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
var searchInsert = function(nums, target) {
    //O(n) approch
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]>=target) return i;
    // }
    // return nums.length;
    
    //O(logn) approch
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=~~((left+right)/2);
        if(nums[mid]==target) return mid;
        nums[mid] < target ? left=mid+1 : right=mid-1;
    }
    return left;
    };
