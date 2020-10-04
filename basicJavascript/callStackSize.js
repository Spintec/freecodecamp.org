function recurseForever(a){
    if(a>=3){
        return a;
    }
    
   // console.log(a);
    return recurseForever(a+1);
    }


recurseForever(1);
const result= recurseForever(2);
console.log(result);