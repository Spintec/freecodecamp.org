var i=0;
function plusminus(val){
    if (val=="One"){
        i++;
    }
    else if (val=="Zero"){
        i+=0
    }
    return i;
}
(plusminus("One"));
(plusminus("Zero"));
console.log(i);

