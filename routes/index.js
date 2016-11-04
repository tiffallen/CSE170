var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' });
var data = require('../data.json');

var bucketlist = require('../public/javascripts/bucketlist');
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
router.get('/bucketlist', bucketlist.view);

router.get('/', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/login.html');
	//res.render('layout');
});

router.get('/home', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/home.html');
	//res.render('layout');
});

router.get('/memories', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/memories.html');
	//res.render('layout');

});
router.get('/newMemory', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newMemories.html');
	//res.render('layout');
});

router.get('/newBucketlist', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newBucketlist.html');
	//res.render('layout');
});



router.get('/homeExpand', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/homexpand.html');
	 //res.render('index', {category: 'Halloween'});
});

module.exports = router;
