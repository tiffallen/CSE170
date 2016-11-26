var data = require('../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlist', data);
	console.log('IN BUCKETLIST.JS');
}
exports.view1 = function (req, res){
	console.log(data);
	res.render('bucketlist1', data);
	console.log('IN BUCKETLIST.JS');
}

exports.projectInfo = function(req, res) {
  res.json(data); // send JSON back to browser
  console.log("IN PROJECT INFO");
}