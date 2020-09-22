function compareOr(num) {
    if (num > 10) {
      return "No";
    }
    if (num < 5) {
      return "No";
    }
    return "Yes";
}

function compareOrOperator(num) {
    if(num>10 && num<5) {
        return "No";
    }
    return "Yes";
}

console.log(compareOr(5));

console.log("Compare with operator: ",compareOr(5));