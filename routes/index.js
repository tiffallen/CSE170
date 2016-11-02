var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resourse');
});

router.get('/users/detail', function(req, res, next) {
  res.send('detail');
});

router.get('users/bucketlist', function (request, response){

	console.log('request was made: ' + request.url);

	response.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/Bucketlist.html', 'utf8');
	myReadStream.pipe(response);
});

module.exports = router;
