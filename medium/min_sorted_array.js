// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // return Math.min(...nums)
    //idea is to just find unsorted part
    let left=0,right=nums.length-1;
    while(left<right){
        let mid=~~(left+(right-left)/2);
        if(mid>0&&nums[mid]<nums[mid-1]) return nums[mid];
        else if(nums[left]<=nums[mid]&&nums[mid]>=nums[right]){
            left=mid+1;
        }
        else right=mid-1;
    }
    return nums[left];
};