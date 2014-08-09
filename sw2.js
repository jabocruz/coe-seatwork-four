var coe = function() {
	var output = "";
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			output += "Computer Engineering";
		}
		else if (i % 3 === 0) {
			output += "Computer";
		}
		else if (i % 5 === 0) {
			output += "Engineering";
		}
		
		else {
			output += i;
		}
		output += "\n";
	}
	console.log(output);
}
coe();