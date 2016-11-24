var data = require('../../home.json');
var logindata = require('../../login.json');

exports.view = function (req, res){
	//myhomepage["grid"] = false;
	console.log(data);
	logindata['directToPage1'] = false;
	res.render('home', data);
}
exports.view1 = function (req, res){
	//myhomepage["grid"] = true;
	console.log(data);
	logindata['directToPage1'] = true;
	res.render('home1', data);
}


/*function initializePage() {
	// your code here
	$('.btn').click(function() {
		ga("send", "event", "choose", "click");
	});
}*/

