function rangeOfNumbers(startNum,endNum) {
    if (startNum==endNum){
        return [startNum];
    }
    else {
        const rangeOfArray=rangeOfNumbers(startNum+1,endNum);
        rangeOfArray.unshift(startNum);
        return rangeOfArray;
    }
}

console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(6,9));
console.log(rangeOfNumbers(4,4));

/*function loopRange(startNum,endNum){
    rangeArray=[startNum];
    while(startNum<endNum){
        rangeArray.push(startNum+1);
        startNum++;
    }
    return rangeArray;
}

console.log(loopRange(1,5));
*/