const palindromes = function (str) {
    let start=0,end=str.length-1;
    while(start<end){
        if(str[start]!=str[end])
        return false;
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
