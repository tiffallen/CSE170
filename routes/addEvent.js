var data = require("../bucketdata.json");

exports.addEvent = function(req, res) {
	var adventurename = req.query.adventurename; 
	var category = req.query.category; 
	var locationideas = req.query.locationideas;
	var adventurepics = "http://lorempixel.com/400/400/people";
	var newEvent = {"adventurename": adventurename, "category": category, "locationideas": locationideas, "adventurepics": adventurepics};
	data.mybucketlist.push(newEvent);
	console.log(newEvent);
	return res.redirect("/bucketlist");
}

