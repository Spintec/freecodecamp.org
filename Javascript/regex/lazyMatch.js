let text="<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*?>/;
let result=text.match(myRegex);
console.log(result);