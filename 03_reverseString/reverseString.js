const reverseString = function(str) {
    const revArray=[];
    const length=str.length-1;
    for(let i=length;i>=0;i--){
        revArray.push(str[i]);
    }
    return revArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
