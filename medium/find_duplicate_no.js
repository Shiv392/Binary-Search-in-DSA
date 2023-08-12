//use constant space
//floyds cycle detectin algotithn

var findDuplicate = function(nums) {
    // let obj={};
    // for(let i of nums){
    //     if(obj[i]) return i;
    //     obj[i]=true;
    // }
    //floyds cycle finding algorigthm
    let slow=nums[0],fast=nums[nums[0]];
    while(slow!=fast){
        slow=nums[slow];
        fast=nums[nums[fast]];
    }
    slow=0;
    while(slow!=fast){
        slow=nums[slow];
        fast=nums[fast];
    }
    return slow;
    };