var data = require("../memoriesdata.json");
console.log("yay, addMemory file accessed!");

exports.addMemory = function(req, res) {
	// Your code goes here
	var tripname = req.query.tripname; 
	var category = req.query.category; 
	var triploc = req.query.triploc;
	var tripdate = req.query.tripdate;
	var trippics = "http://lorempixel.com/400/400/people";
	var tripfriends = req.query.tripfriends;
	var mynotes = req.query.mynotes;
	var newMemory = {"tripname": tripname, "category": category, "triploc": location, "tripdate": tripdate, "trippics": trippics, "tripfriends": tripfriends, "mynotes": mynotes};
	console.log("yay, addMemory class accessed!");
	data.mymemories.push(newMemory);
	console.log(newMemory);
	console.log("yay, addMemory just ran!");
}
