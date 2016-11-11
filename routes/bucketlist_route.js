var data = require('../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlist', data);
	console.log('IN BUCKETLIST.JS');
}

exports.projectInfo = function(req, res) {
  res.json(bucket_expand); // send JSON back to browser
  console.log("IN PROJECT INFO");
}