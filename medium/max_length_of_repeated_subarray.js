// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
// Example 1:
// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:
// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
// Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
var findLength = function(nums1, nums2) {
    let temp=[]
    for(let i=0;i<nums1.length;i++){
        for(let j=i+1;j<=nums1.length;j++){
            temp.push(nums1.slice(i,j));
        }
    }
    let res=-Infinity;
    for(let i=0;i<nums2.length;i++){
        for(let j=i+1;j<=nums2.length;j++){
           let arr=nums2.slice(i,j);
           if(temp.includes(arr)){
               res=Math.max(res,arr.length);
           }
        }
    }
    return res;
};