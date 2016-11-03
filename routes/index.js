var express = require('express');
var router = express.Router();

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
router.get('/bucketlist', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/Bucketlist.html');
	//res.render('layout');
});

router.get('/', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/home.html');
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
router.get('/new', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newMemories.html');
	//res.render('layout');
});

module.exports = router;
