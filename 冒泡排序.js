/*
*
*
*
*
*
*分为初级版和改进版
*
*
* */

/*
*
*
*
* 初级版
* */
function sort(arr){
    if(arr instanceof Array){
        for(var i = 0;i<arr.length;i++){
            for(var j = 0;j<arr.length-1-j;j++){
                    if(arr[j]>arr[j+1]){
                        arr[j] = [arr[j+1],arr[j+1]=arr[j]][0]
                    }
            }
        }
        return arr;
    }else {
        return false;
    }
}

/*
*
* 改进版  会在特定情况下减少时间复杂度
*
* */
function sort1(arr){
    if(arr instanceof Array){
        var flag = 0;
        var i = arr.length-1;
        while(i>0){
            for(var j = 0;j<i;j++){
                if(arr[j]>arr[j+1]){
                    flag = j;
                    arr[j] = [arr[j+1],arr[j+1]=arr[j]][0];
                }
            }
            i = flag;
        }
        return arr;
    }else{
        return false;
    }
}
console.log(sort([4,2,5]));
console.log(sort1([4,2,5]));
