var drawTriangle = function(level) {
	var output = "";
	for (var i = 0; i < level; i++) {
		for (var limit = 0; i >= limit; limit++) {
			output += "#";
		}
		output += "\n";
	}
	console.log(output);
}
drawTriangle(7);