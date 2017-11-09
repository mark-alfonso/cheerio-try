var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

fs.readFile(__dirname + '/in.html', function (err, data){
    if (err) return console.error(err);

    doc = cheerio.load(data);

    // var content = doc('body blockquote').first().contents();
    // doc('body blockquote').first().replaceWith(content)

    var content = '';
    doc('body > blockquote').each(function(i, e) {
        content = doc(this).contents();
        doc(this).replaceWith(content)
    });

    fs.writeFile(__dirname + '/out.html', doc.html() , function (err) {
        if (err) throw err;
        console.log('success!');
    });
});