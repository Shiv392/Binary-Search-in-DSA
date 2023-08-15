// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
var intersect = function(nums1, nums2) {
    //binary search
    let res=[];
    const binarySearch=(nums,target)=>{
        nums.sort((a,b)=>a-b);
        let left=0,right=nums.length-1;
        while(left<=right){
            let mid=~~((left+right)/2);
            if(nums[mid]==target) {
                nums.splice(mid,1)
                return true;
            }
            nums[mid] < target ? left=mid+1 : right=mid-1;
        }
        return false;
    }
    if(nums1.length > nums2.length){
        for(let i=0;i<nums2.length;i++){
            if(binarySearch(nums1,nums2[i])) res.push(nums2[i])
        }
    }
    else{
        for(let i=0;i<nums1.length;i++){
            if(binarySearch(nums2,nums1[i])) res.push(nums1[i])
        }
    }
    return res;
   
      //using maps
   //    let map=new Map(),res=[];
   //    nums1.forEach(ele=>{
   //        map.set(ele,map.get(ele)+1||1);
   //    })
   //    nums2.forEach(ele=>{
   //        if(map.get(ele)>=1){
   //            res.push(ele);
   //            map.set(ele,map.get(ele)-1)
   //        }
   //    })
   //    return res;
   }
   