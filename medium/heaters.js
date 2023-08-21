// Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.
// Every house can be warmed, as long as the house is within the heater's warm radius range. 
// Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.
// Notice that all the heaters follow your radius standard, and the warm radius will the same.
// Example 1:
// Input: houses = [1,2,3], heaters = [2]
// Output: 1
// Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
var findRadius = function(houses, heaters) {
    heaters.sort((a,b)=>a-b);
    let maxradius=0;
    for(let house of houses){
        let left=0,right=heaters.length-1,minDistance=Infinity;
        while(left<=right){
            let mid= ~~((left+right)/2);
            let distance= Math.abs(house-heaters[mid]);
            minDistance=Math.min(minDistance,distance);
            if(house > heaters[mid]) left=mid+1;
            else right=mid-1;
        }
        maxradius=Math.max(maxradius,minDistance);
    }
    return maxradius;
};