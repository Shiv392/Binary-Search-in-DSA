// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
var searchMatrix = function(matrix, target) {
    //O(logmn)
    let row=0,col=matrix[0].length-1;
    while(row<matrix.length && col>=0){
        let element= matrix[row][col];
        if(element==target) return true;
        element < target ? row++ : col--;
    }
    return false;

//    //O(mlogn)
//    const binarySearch=(nums,target)=>{
//        let left=0,right=nums.length-1;
//        while(left<=right){
//            let mid=~~((left+right)/2);
//            if(nums[mid]==target) return true;
//            nums[mid] < target ? left=mid+1 : right=mid-1;
//        }
//        return false;
//    }
//    for(let row of matrix){
//        if(binarySearch(row,target)) return true
//    }
//    return false
};