var reverseString = function(word) {
	var output = "";
	for (i = 1; word.length >= i; i++) {
		var char = word.length - i;
		output += word[char];
	}
	console.log(output);
}
reverseString("James Bryan");