var data = require("../bucketdata.json");

exports.addEvent = function(req, res) {
	var tripname = req.query.tripname; 
	var category = req.query.category; 
	var location = req.query.locationideas;
	var img = "http://lorempixel.com/400/400/people";
	var newEvent = {"adventureName": tripname, "category": category, "locationideas": location, "adventurepics": img};
	data.mybucketlist.push(newEvent);
	console.log(newEvent);
	console.log("yay, addEvent just ran!");
	return res.redirect("/bucketlist");
}

