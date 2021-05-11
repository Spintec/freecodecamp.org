function truncateString(str,num){
	let strArray=[];
	if (str.length > num) {
		for (let i = 0; i < num;i++){
			strArray.push(str[i]);
		}
		return strArray.join("")+"...";
	}
	else {
		return str;
	}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
