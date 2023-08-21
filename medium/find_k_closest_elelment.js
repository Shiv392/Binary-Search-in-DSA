// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
// Example 1:
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
var findClosestElements = function(arr, k, x) {
    // arr=arr.sort((a,b)=>Math.abs(a-x)-Math.abs(b-x));
    // return arr.slice(0,k).sort((a,b)=>a-b);
    
    let idx = 0;
        while (k < arr.length - idx) {
            const last = arr.pop();
            if (last - x < x - arr[idx]) {
                idx++;
                arr.push(last);
            }
        }
        return arr.slice(idx);
    };