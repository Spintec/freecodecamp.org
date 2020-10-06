function nextinline(arr,item) {
	arr.push(item);
	item=arr.shift();
	return item;

}

console.log(nextinline([],5));

console.log(nextinline([],1));

console.log(nextinline([2],1));

console.log(nextinline([5,6,7,8,9],1));
	
