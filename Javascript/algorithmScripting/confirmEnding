/*function confirmEnding(str,target) {
	if (str.indexOf(" ")!=-1){ 
		var strArray=str.split(" ");
	}
	else {
		var strArray=str.split("");
	}
	if (strArray[strArray.length-1]==target){
		return true;
	}
	else {
		return false;
	}
}
 Does not work for the last case and it is too long anyway. Therefore it looks this way:
*/
function confirmEnding(str, target) {
  return str.slice(str.length - target.length)===target;
}


console.log(confirmEnding("Bastian","n"));
console.log(confirmEnding("Bastian","r"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Congratulation", "on"));
