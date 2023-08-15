// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
var intersection = function(nums1, nums2) {
    //using binary search
    let res=[];
    nums1.sort((a,b)=>a-b);
    const binarySearch=(nums,target)=>{
        let left=0,right=nums.length-1;
        while(left<=right){
       let mid=~~((left+right)/2);
       if(nums[mid]==target) return true;
       nums[mid] < target ? left=mid+1 : right=mid-1;
        }
        return false;
    }
    for(let i=0;i<nums2.length;i++){
        if(binarySearch(nums1,nums2[i])){
            if(!res.includes(nums2[i])) res.push(nums2[i])
        }
    }
    return res;
    
    //using maps.
    //  let map=new Map();
    // nums1.forEach((ele,i)=>{
    //     map.set(ele,map.get(ele)+1||1)
    // });
    // let res=[];
    // nums2.forEach(ele=>{
    //     if(map.has(ele)){
    //         res.push(ele);
    //         map.delete(ele)
    //     }
    // });
    // return res;
    };