function splitify(str) {
	return str.split(/\W/);
}
console.log(JSON.stringify(splitify("Hello World,I-am code")));
