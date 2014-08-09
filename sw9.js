var isLeap = function(year) {
	var output = "";
	if (year % 4 === 0) {
		output += year + " is a leap year";
	}
	else {
		output += year + " is not a leap year"
	}
	console.log(output);
}
isLeap(2014);