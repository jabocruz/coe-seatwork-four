var joinArray = function(inputArray, separator) {
	var output = "";
	var counter = 0;
	for (var x = 0; x < inputArray.length; x ++) {
    	if (inputArray[x] != null) {
        	counter ++;
    	}
    }
	for (i = 0; i < counter; i++) {
		output += inputArray[i]
		if (i != inputArray.length -) {
			output += separator;
		}
	}
	console.log(output);
}
var myColor[] = ["Red", "Green", "White", "Black"];
joinArray(myColor, ',');