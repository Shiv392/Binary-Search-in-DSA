// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:
// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
var triangleNumber = function(nums) {
    let count=0;
    nums.sort((a,b)=>a-b);
    if(nums.length<3) return count;
    for(let k=nums.length-1;k>=2;k--){
        let i=0,j=k-1;
        while(i<j){
            let sum=nums[i]+nums[j];
            if(sum>nums[k]){
                count+=j-i;
                j--;
            }
            else{
                i++;
            }
        }
    }
    return count;
};