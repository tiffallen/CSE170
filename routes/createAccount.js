
var data = require('../login.json');

	
	/* if(password == confirmPassword) {
		data.mylogin.push(newUser);
		window.alert("Passwords match");
		return res.redirect('home');
	}
	else {
		window.alert("Passwords do not match. Please try again :)");
		return res.redirect('createAccount');
	} */


exports.createAccount = function(req, res) {

	var username = req.query.username; 
	var password = req.query.password; 
	var confirmPassword = req.query.confirmPassword;

	var newUser = {"username": username, "password": password};
	data.mylogin.push(newUser);

	return res.redirect("home");
 };