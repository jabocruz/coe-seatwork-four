var joinArray = function(inputArray, separator) {
	var output = "";
	for (i = 0; i < inputArray.length - 1; i++) {
		output += inputArray[i] + separator;
	}
	output += inputArray[inputArray.length - 1];
	console.log(output);
}
var myColor = ["Red", "Green", "White", "Black"];
joinArray(myColor, ',');