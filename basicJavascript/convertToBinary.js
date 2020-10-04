function convertToBinary(str,radix){
    return parseInt(str,radix);
}

console.log(convertToBinary("10010011",2));

//OR 

function convertToBinary(str){
    return parseInt(str,2);
}

console.log(convertToBinary("10010011"));

