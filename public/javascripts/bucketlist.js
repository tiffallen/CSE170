var data = require('../../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlist', data);
}


function deleteEvent(name){
	for(var k = 0; k < data.length; ++k){
		if(name == data[k]['adventurename']){
			data[k]['delete'] = 1;
		}
	}
}