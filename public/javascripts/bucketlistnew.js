var data = require('../../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlistnew', data);
}
exports.view1 = function (req, res){
	console.log(data);
	res.render('bucketlistnew1', data);
}



