var cheerio = require('cheerio');
var request = require('request');


var body = 

$ = cheerio.load(body);
console.log($('body').children().length);
var testStart = /Web games/g
$('body').children().each(function(i, elem) {
	var elemText = $(this).text().trim()
	console.log($(this).prop("tagName"));
	console.log($(this).attr("class"));
	if (elemText.search(testStart) == -1) {
		console.log("removing unwanted div\n")
		$(this).remove();
	} else {
		console.log("found the start\n");
		return false;
	}
});
console.log($('body').children().length);
