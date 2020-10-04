function countdown(n){
    if (n<1){
        return [];
    }
    const countArray=countdown(n-1);
    countArray.unshift(n);
    return countArray;    
    }

//console.log(countdown(10));
//console.log(countdown(5));
//console.log(countdown(3));
console.log(countdown(-1));