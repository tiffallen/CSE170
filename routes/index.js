var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Just Go' });
});

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

module.exports = router;
