// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
// Return true if there is a 132 pattern in nums, otherwise, return false.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:
// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
var find132pattern = function(nums) {
    let stack=[];
    let k=-1;
    let n=nums.length;
    if(n<3) return false;
    for(let i=n-1;i>=0;i--){
        if(k>-1&&nums[k]>nums[i]){
            return true;
        }
        while(stack.length>0&&nums[stack[stack.length-1]]<nums[i]){
            k=stack.pop();
        }
        stack.push(i)
    }
    return false;
   };