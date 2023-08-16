// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
var findDuplicate = function(nums) {
    //binary search
    let left = 1;
        let right = nums.length - 1;
    
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
    
            let count = 0;
            for (const num of nums) {
                if (num <= mid) {
                    count++;
                }
            }
    
            if (count <= mid) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    
        return left;
    
    //using maps
    // let map=new Map(),res=-1;
    // nums.forEach(ele=>{
    //     if(map.has(ele)) res=ele;
    //     map.set(ele,1)
    // })
    // return res;
    };