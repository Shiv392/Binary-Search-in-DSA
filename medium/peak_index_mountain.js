var peakIndexInMountainArray = function(arr) {
    //    return arr.indexOf(Math.max(...arr));
    let a=0,b=arr.length-1;
    let mid=~~(a+(b-a)/2);
    while(a<b){
    if(arr[mid]<arr[mid+1]) a=mid+1;
    else b=mid;
    mid=~~(a+(b-a)/2);
    }
    return a;
    };