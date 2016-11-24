var data = require('../../memoriesdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('memoriesnew', data);
}
exports.view1 = function (req, res){
	console.log(data);
	res.render('memoriesnew1', data);
}


