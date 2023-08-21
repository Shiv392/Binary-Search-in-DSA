// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
var lengthOfLIS = function(nums) {
    const sub=[nums[0]];
    const binarySearch=(nums,target)=>{
        let left=0,right=nums.length-1;
        while(left<=right){
            let mid=~~((left+right)/2);
            if(nums[mid]<target) left=mid+1;
            else right=mid-1;
        }
        return left;
    }
    for(let i=1;i<nums.length;i++){
        const curr=nums[i];
        if(curr>sub[sub.length-1]) sub.push(curr);
        else {
            const j= binarySearch(sub,curr);
            sub[j]=curr
        }
    }
    return sub.length;
    };