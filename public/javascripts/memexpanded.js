var data = require('../../memoriesdata.json');

var buttonID1;

exports.view = function (req, res){
	buttonID1 = req.query.buttonID;
	console.log('Memory Expand: ' + req.query['buttonID1']);
	console.log('data: ' + data['mymemories']);
	res.render('memoriesexpand', data.mymemories[buttonID1]); 
	// will only send the first element of the array "myhomepage"
}
exports.view1 = function (req, res){
	buttonID1 = req.query.buttonID;
	console.log('Memory Expand: ' + req.query['buttonID1']);
	console.log('data: ' + data['mymemories']);
	res.render('memoriesexpand1', data.mymemories[buttonID1]); 
	// will only send the first element of the array "myhomepage"
}
