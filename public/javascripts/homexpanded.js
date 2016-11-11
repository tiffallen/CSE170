var data = require('../../home.json');

exports.view = function (req, res){
	console.log(req.query['buttonID']);
	console.log('data: ' + data['myhomepage']);
	res.render('homexpanded', data);
}


