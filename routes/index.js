var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' });
var data = require('../data.json');

//var bucketlist = require('./bucketlist_route');
//var bucketlist_expanded = require('./bucketlist_get_json');
var newUser = require('../public/javascripts/createAccount');
var createAccount = require('../routes/createAccount');
//var bucketlistexpanded = require('../public/javascripts/bucketlistexpanded');
var home = require('../public/javascripts/home');
//var home1 = require('../public/javascripts/home');
var homexpanded = require('../public/javascripts/homexpanded');
var homevent = require('../public/javascripts/homevent');

var memories = require('../public/javascripts/memories');
var memexpanded = require('../public/javascripts/memexpanded');
var memnew = require('../public/javascripts/memoriesnew');


var bucketlist = require('../routes/bucketlist_route');
var bucketexpanded = require('../public/javascripts/bucketlistexpanded');
var bucketnew = require('../public/javascripts/bucketlistnew');
/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Just Go' });
}); */

router.get('/users', function(req, res, next) {
  res.send('respond with a resourse');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});
/* router.get('/bucketlist', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/bucketlist.html');
	//router.get('/', bucketlist.view);
	//res.render('layout');
}); */
router.get('/createAccount', createAccount.createAccount);
router.get('/newUser', newUser.view);
//router.get('/bucketlist', bucketlist.view);
//router.get('/bucketExpanded', bucketlistexpanded.view);
router.get('/home', home.view);
router.get('/home1', home.view1);
router.get('/homeExpanded', homexpanded.view);
router.get('/homeExpanded1', homexpanded.view2);
router.get('/homeEvents', homexpanded.view1);
router.get('/homeEvents1', homexpanded.view3);

router.get('/memories', memories.view);
router.get('/memories1', memories.view1);
router.get('/memExpanded', memexpanded.view);
router.get('/memExpanded1', memexpanded.view1);
router.get('/newMemory', memnew.view); 
router.get('/newMemory1', memnew.view1); 


router.get('/bucketlist', bucketlist.view);
router.get('/bucketlist1', bucketlist.view1);
router.get('/bucketExpanded', bucketexpanded.view);
router.get('/bucketExpanded1', bucketexpanded.view1);
router.get('/newBucketlist', bucketnew.view);
router.get('/newBucketlist1', bucketnew.view1);

router.get('/', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/login.html');
	//res.render('layout');
});

/* router.get('/newUser', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newUser.html');
	//res.render('layout');
});


router.get('/newMemoryHTML', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newMemories.html');
	//res.render('layout');
});

router.get('/newBucketlistHTML', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newBucketlist.html');
	//res.render('layout');
});



router.get('/homeExpand', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/homexpand.html');
	 //res.render('index', {category: 'Halloween'});
});

router.get('/homeEvent', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/homeevent.html');
	 //res.render('index', {category: 'Halloween'});
});

router.get('/memoriesExpand', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/memoriesexpand.html');
	 //res.render('index', {category: 'Halloween'});
});

 router.get('/bucketExpanded', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/bucketexpanded.html');
	 //res.render('index', {category: 'Halloween'});
}); */
/* router.get('/home', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/home.html');
	//res.render('layout');
}); */

/* router.get('/memories', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/memories.html');
	//res.render('layout');

}); */

module.exports = router;
