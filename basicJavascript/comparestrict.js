function compareStrictEquality(a,b) {
    if(a===b) {
        return "These two numbers are equal";
    }
    return "These two number are not equal";
}

console.log(compareStrictEquality(1,1));
console.log(compareStrictEquality(1,"1"));
