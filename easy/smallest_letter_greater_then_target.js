// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
var nextGreatestLetter = function(letters, target) {
    // for(let i=0;i<letters.length;i++){
    //     if(letters[i].charCodeAt(0)>target.charCodeAt(0)){
    //         return letters[i]
    //     }
    // }
    const n = letters.length  
        let left = 0, right = n - 1
        while (left <= right){
            const mid = Math.floor(left + (right - left) / 2)
            letters[mid] <= target ? left = mid + 1 : right = mid - 1
        }
        return left == n ? letters[0] : letters[left]
    };
    