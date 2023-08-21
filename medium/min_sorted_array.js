// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
var findLength = function(nums1, nums2) {
    //dp
     let dp = new Array(nums1.length+1).fill(0).map(
        () => new Array(nums2.length+1).fill(0)
    )    
    let max = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] != nums2[j]) {
                continue;
            }
            dp[i+1][j+1] = dp[i][j]+1;                        
            max = Math.max(max, dp[i+1][j+1]);
        }        
    }

    return max;

    //brute force
    // let temp=[]
    // for(let i=0;i<nums1.length;i++){
    //     for(let j=i+1;j<=nums1.length;j++){
    //         temp.push(nums1.slice(i,j));
    //     }
    // }
    // let res=-Infinity;
    // for(let i=0;i<nums2.length;i++){
    //     for(let j=i+1;j<=nums2.length;j++){
    //        let arr=nums2.slice(i,j);
    //        if(temp.includes(arr)){
    //            res=Math.max(res,arr.length);
    //        }
    //     }
    // }
    // return res;
};