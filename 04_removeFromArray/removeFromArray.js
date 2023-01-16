const removeFromArray = function(arr,num1,num2=0,num3=0,num4=0) {
    let res=new Array();
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=num1){
            res.push(arr[i]);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
