var data = require("../../login.json");


exports.view = function (req, res){
	//myhomepage["grid"] = false;
	console.log(data);
	res.render('newUser', data);
}


