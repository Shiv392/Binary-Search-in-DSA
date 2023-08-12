// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.
// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
var judgeSquareSum = function(c) {
    let a=0,b=Math.ceil(Math.sqrt(c));
    while(a<=b){
        let prod=a**2+b**2;
        if(prod==c) return true;
        else if(prod<c) a++;
        else b--
    }
    return false
};