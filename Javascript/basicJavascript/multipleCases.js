function multipleCases(val){
    var answer="";
    switch(val) {
        case 1:
        case 2:
        case 3:
            return answer="Low";
            break;
        case 4:
        case 5:
        case 6:
            return answer="Mid";
            break;
        case 7:
        case 8:
        case 9:
            return answer="High";
            break;
    }
}
console.log(multipleCases(4));