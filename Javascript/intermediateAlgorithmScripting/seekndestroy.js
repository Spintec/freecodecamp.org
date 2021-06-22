/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
    for ( let j=0; j < arr.length; j++) {   
        for ( let i=1; i < arguments.length; i++) {
            index_nr = arr.indexOf(arguments[i]);
                if (index_nr!=-1) {
                    arr.splice(index_nr, 1);
                }
        }
    }
    return arr;
}

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
//console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
