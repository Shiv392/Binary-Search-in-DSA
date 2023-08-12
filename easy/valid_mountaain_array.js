var validMountainArray = function(arr) {
    if(arr.length<3) return false;
       let res;
   for(let i=0;i<arr.length;i++){
       if(arr[i+1]&&arr[i]<arr[i+1]&&(res||res==undefined)) res=true;
       else if(arr[i+1]&&arr[i]>arr[i+1]&&res) res=false;
       else if(arr[i+1]&&arr[i]>arr[i+1]&&res==false) res=false;
       else if(arr[i+1]) return false;
   }
   return res==false;
};