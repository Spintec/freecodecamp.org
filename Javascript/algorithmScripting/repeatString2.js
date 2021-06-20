function repeatString(str,num) {
	if (num<1) {
		return "";
	}
	else {
		return str + repeatString(str,num-1);
	}
}

console.log(repeatString("abc",3));
