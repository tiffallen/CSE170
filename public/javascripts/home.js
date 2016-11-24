var data = require('../../home.json');

exports.view = function (req, res){
	//myhomepage["grid"] = false;
	console.log(data);
	res.render('home', data);
}

exports.view1 = function (req, res){
	//myhomepage["grid"] = true;
	console.log(data);
	res.render('home1', data);
}

/*function initializePage() {
	// your code here
	$('.btn').click(function() {
		ga("send", "event", "choose", "click");
	});
}*/

