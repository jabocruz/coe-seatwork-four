var convertFirstLetter = function(word) {
	{
		var letter = word.split(" ");
		for (var i = 0; i < letter.length; i++) {
			var x = letter[i].charAt(0).toUpperCase();
			letter[i] = x + letter[i].substr(1);
		}
		return letter.join(" ");
	var output = "";
	}
}
convertFirstLetter('bahay kubo kahit munti');