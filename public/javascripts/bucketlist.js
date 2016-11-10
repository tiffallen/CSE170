//script.src = 'content/js/jquery.min.js';

var data = require('../../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlist', data);
	console.log('IN BUCKETLIST.JS');
}

function select(name){
	for(var k = 0; k < data.length; ++k){
		if(name == data[k]['adventurename']){
			data[k]['selected'] = 0;
		}
		else {
			data[k]['selected']  = 1;
		}
		console.log('Trying to select event: ' + name);
	}
	location.href = "bucketExpanded" ;
}

/* $("#select").click(function(){
	alert("CLICKED");
});  */

function deleteEvent(name){
	for(var k = 0; k < data.length; ++k){
		if(name == data[k]['adventurename']){
			data[k]['delete'] = 1;
		}
	}
}