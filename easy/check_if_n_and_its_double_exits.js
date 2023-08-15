// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
var checkIfExist = function(arr) {
    //binary search
    arr.sort((a,b)=>a-b);
    const binarySearch=(nums,target)=>{
        let left=0,right=nums.length-1;
        while(left<=right){
            let mid=~~((left+right)/2);
            if(nums[mid]==target) return true;
            nums[mid] < target ? left=mid+1 : right=mid-1;
        }
        return false;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0 && arr[i+1]==0) return true;
        if( arr[i]!=0 && binarySearch(arr,arr[i]*2)) return true;
    }
    return false;
    
     //two pointer
    // let i=0,j=1;
    // while(i<arr.length-1){
    //     if(arr[i]==arr[j]*2 || arr[j]==arr[i]*2) return true;
    //     if(j==arr.length-1) {
    //         i++,j=i+1;
    //     }
    //     else j++;
    // }
    // return false;
    
    //using set
    // let set=new Set();
    // for(let i=0;i<arr.length;i++){
    //     if(set.has(arr[i])) return true;
    //     set.add(arr[i]*2);
    //     set.add(arr[i]/2);
    // }
    // return false;
    
    // let map={}
    // for(let i of arr){
    //     if(map[i]!=undefined){
    //         return true;
    //    }
    //     map[i*2]=i;
    //    map[i/2]=i;
    // }
    // return false
    };
    