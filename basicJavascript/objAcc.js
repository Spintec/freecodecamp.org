// Accessing object properties with dot "." notation > This notation is used when one knows the name of the property
var myObj={
    prop1:"val1",
    prop2:2
};
var prop1val=myObj.prop1;
var prop2val=myObj.prop2;
console.log("Property values using dot notation: ",prop1val,prop2val);

// Accessing object properties with bracket "[]" notation > This notation is used when the property names contain spaces. They can also be used for properties which do not contain spaces.
var myObj2={
    "Space Name":"Kirk",
    "More Space":"Spock",
    "NoSpace":"USS Enterprise"
};
var prop1val2=myObj2["Space Name"];
var prop2val2=myObj2["More Space"];
var prop3val2=myObj2["NoSpace"]

console.log("Property values using bracket notation: ",prop1val2,prop2val2,prop3val2);
