/** Using objects as key/value (dictionary-like) in order to lookup items */

function itemsLookup(val) {
    var result="";

    var lookup={
        "alpha":"Adams",
        "beta":"Caroten",
        "charlie":"Sheen",
        "delta":"Plan",
        "echo":"Pink Floyd"
    }
    result=lookup[val];
    return result;
}

console.log(itemsLookup("alpha"));