var data = require('../../home.json');

exports.view = function (req, res){
	console.log(data);
	res.render('home', data);
}


