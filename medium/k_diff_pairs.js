// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.
// Example 1:
// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:
var findPairs = function(nums,k) {
    //binary search
    let res=0;
nums.sort((a,b)=>a-b);
for(let i=0;i<nums.length;i++){
    if(i>0 && nums[i]==nums[i-1]){
        //avoiding duplicates
        continue;
    }
    const target= nums[i]+k;
    let left=i+1,right=nums.length-1;
    while(left<=right){
    let mid= ~~((left+right)/2);
    if(nums[mid]==target){
        res++;
        break;
    }
   else if(nums[mid] < target) left=mid+1;
   else right=mid-1;
    }
}
return res;

    //using maps.
    // let map=new Map();
    // let count=0;
    // for(let i of nums){
    //     map.set(i,(map.get(i)+1)||1);
    // }
    // map.forEach((value,key)=>{
    //     if(k==0){
    //         if(value>1) count++;
    //     }
    //     else {
    //         if(map.has(key+k)) count++;
    //     }
    // })
    // return count;

}