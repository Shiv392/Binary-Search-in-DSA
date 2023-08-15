// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0
var countNegatives = function(grid) {
   //brute force
//    let res=0;
//    for(let r=0;r<grid.length;r++){
//        for(let c=0;c<grid[0].length;c++){
//            if(grid[r][c]<0) res++;
//        }
//    }
//    return res;

//binary search
let res=0;
const binarySearch=(nums)=>{
    let left=0,right=nums.length-1,count=0;
    while(left<=right){
        let mid=~~((left+right)/2);
    if(nums[mid] < 0){
    count+= right-mid+1;
    right=mid-1;
    }
    else left=mid+1;
    }
  return count
}
for(let row of grid){
    res+= binarySearch(row);
}
return res;
};