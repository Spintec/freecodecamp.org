/**Accessing a property's name dynamically during the program's execution */

myComputer={
    pcName:"486"
};

function propPrefix(snur){
    var pref="pc";
    return pref+snur;
}

var someProperty=propPrefix("Name");
console.log(myComputer[someProperty]);