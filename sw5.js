var countChar = function(word,char) {
	var count = 0;
	for (var i = 0; i < word.length; i++) {
		if (word[i] === char) {
			count++;
		}
	}
	return count;
}
console.log(countChar("kkkrizzle", "k"));