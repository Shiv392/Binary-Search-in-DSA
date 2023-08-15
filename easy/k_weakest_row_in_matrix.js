// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
// Example 1:
// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].
var kWeakestRows = function(mat, k) {
    let arr=[];
    //brute force
   // for(let i=0;i<mat.length;i++){
   //     let soldier=0;
   //     for(let j=0;j<mat[0].length;j++){
   //         if(mat[i][j]==1) soldier++;
   //     }
   //     arr.push([i,soldier]);
   // }
   // return arr.sort((a,b)=>a[1]-b[1]).map(ele=> ele[0]).splice(0,k)
   
   //binarySearch
   const binarySearch=(nums,left,right)=>{
       if(left==right) return left;
       let mid=~~((left+right)/2);
       return nums[mid]==0 ? binarySearch(nums,left,mid) : binarySearch(nums,mid+1,right)
   }
   for(let i=0;i<mat.length;i++){
       arr.push([i,binarySearch(mat[i],0,mat[0].length)])
   }
   return arr.sort((a,b)=>a[1]-b[1]).map(ele=> ele[0]).slice(0,k);
   };