//usng binary search
function xxxx(nums,target){
    let left=0,right=nums.length-1;
    while(left<=right){
        const sum=nums[left]+nums[right];
        if(sum==target) return [left+1,right+1];
        else if(sum>target) right--;
        else left++;
    }
    return [-1,-1]
    }
    console.log(xxxx([2,7,11,15],9))