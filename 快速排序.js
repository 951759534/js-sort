/**
 * Created by K550jk on 2017/4/19.
 */









function quickSort(arr){
    if(arr instanceof Array){
        if(arr.length>1){
          var midIndex = Math.floor(arr.length/2);
          var left = [],right=[];
          for(var i =0;i<arr.length;i++){
              if(midIndex ==i){
                  continue;
              }else if(arr[i] >arr[midIndex]){
                      right.push(arr[i]);
                  }else{
                      left.push(arr[i]);
                  }
          }
          return quickSort(left).concat(arr[midIndex],quickSort(right));
        }else{
            return arr;
        }
    }else{
        return false;
    }
}
console.log(quickSort([5,3,2,5,7,3,1,7]));