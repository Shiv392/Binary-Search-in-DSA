var MyCalendar = function() {
    this.value=[];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    // for(let book of this.value){ linear search
    //     if(end > book[0] && start < book[1]) return false;
    // }
    // this.value.push([start,end]);
    // return true;
    let left=0,right=this.value.length-1;
    while(left<=right){
        const mid = ~~((left+right)/2);
        const [s,e]= this.value[mid];
        if(s < end && e > start) return false;
        if(start >= e ) left = mid+1;
        else right=mid-1;
    }
    this.value.splice(left,0,[start,end]);
    return true;
};