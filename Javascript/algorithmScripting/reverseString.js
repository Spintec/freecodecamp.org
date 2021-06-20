function reverseString(str) {
  let strArray=str.split('');
  let cpArray=[...strArray];
  console.log(strArray);
  for (let i in strArray){
	strArray.unshift(...cpArray[i]);
	strArray.pop();
	console.log(i,strArray[i],strArray);
  }

  return strArray.join("");
}


console.log(reverseString("Hello"));
console.log(reverseString("Howdy"));
